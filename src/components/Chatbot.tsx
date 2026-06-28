import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

interface Msg {
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTIONS = [
  'What are Eshan’s strongest projects?',
  'Tell me about the I-State research.',
  'What did he do at TEXMiN?',
  'How do I contact / hire him?',
];

const GREETING =
  'Hey 👋 I’m Eshan’s AI — I can assist you on his behalf. Ask me about his projects, experience, research, or how to hire him.';

// Abuse / cost guardrails (kept low so a single visitor can't run up the bill).
const MAX_USER_MESSAGES = 12; // per browser session
const MIN_GAP_MS = 1500; // throttle rapid-fire sends
const MAX_INPUT_LEN = 500;

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: 'assistant', content: GREETING }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sentCount, setSentCount] = useState(0);
  const lastSentRef = useRef(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  const limitReached = sentCount >= MAX_USER_MESSAGES;

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading, open]);

  // lock background scroll while the drawer is open (mobile-friendly)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const send = async (text: string) => {
    const content = text.trim().slice(0, MAX_INPUT_LEN);
    if (!content || loading) return;
    if (limitReached) return;
    const now = Date.now();
    if (now - lastSentRef.current < MIN_GAP_MS) return;
    lastSentRef.current = now;

    const next = [...messages, { role: 'user' as const, content }];
    setMessages(next);
    setInput('');
    setLoading(true);
    setSentCount((c) => c + 1);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessages((m) => [
          ...m,
          {
            role: 'assistant',
            content:
              data?.error ||
              'I’m offline right now. Meanwhile, you can reach Eshan at eshan.worke@gmail.com.',
          },
        ]);
      } else {
        setMessages((m) => [...m, { role: 'assistant', content: data.reply }]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            'I need the API running (deploy on Vercel with GROQ_API_KEY). Reach Eshan at eshan.worke@gmail.com.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className={`chat-fab ${open ? 'hidden' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="Chat with Eshan's AI"
      >
        <span className="fab-dot" />
        <span className="fab-ico" aria-hidden="true">
          💬
        </span>
        <span className="fab-label">Eshan’s AI</span>
      </button>

      <div className={`chat-scrim ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />

      <aside className={`chat-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="chat-header">
          <div className="chat-id">
            <span className="chat-avatar">E</span>
            <div>
              <strong>Eshan’s AI</strong>
              <span className="chat-status">Assisting on behalf of Eshan · Groq</span>
            </div>
          </div>
          <button className="chat-min" onClick={() => setOpen(false)} aria-label="Close chat">
            ✕
          </button>
        </div>

        <div className="chat-body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div key={i} className={`bubble ${m.role}`}>
              {m.content}
            </div>
          ))}
          {loading && (
            <div className="bubble assistant typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          {messages.length <= 1 && (
            <div className="chat-suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}
          {limitReached && (
            <div className="chat-limit">
              You’ve reached this demo’s message limit. For more, reach Eshan directly at{' '}
              <a href="mailto:eshan.worke@gmail.com">eshan.worke@gmail.com</a>.
            </div>
          )}
        </div>

        <form
          className="chat-input"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_LEN))}
            placeholder={limitReached ? 'Message limit reached' : 'Ask anything about Eshan…'}
            aria-label="Message"
            disabled={limitReached}
          />
          <button type="submit" disabled={loading || limitReached || !input.trim()} aria-label="Send">
            ➤
          </button>
        </form>
      </aside>
    </>
  );
};

export default Chatbot;
