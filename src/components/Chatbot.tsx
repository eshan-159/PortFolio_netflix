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
  'How do I contact him?',
];

const GREETING =
  'Hey! I’m E-Bot 🍿 — your guide to Eshan’s work. Ask me about his projects, internships, research, or how to hire him.';

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: 'assistant', content: GREETING }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading, open]);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;
    const next = [...messages, { role: 'user' as const, content }];
    setMessages(next);
    setInput('');
    setLoading(true);
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
              'E-Bot is offline right now. Meanwhile, reach Eshan at eshan.worke@gmail.com.',
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
            'E-Bot needs the API to be running (deploy on Vercel with GROQ_API_KEY). Reach Eshan at eshan.worke@gmail.com.',
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
        aria-label="Open chat"
      >
        <span className="fab-dot" />
        Ask E-Bot
      </button>

      <div className={`chat-panel ${open ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-id">
            <span className="chat-avatar">E</span>
            <div>
              <strong>E-Bot</strong>
              <span className="chat-status">Powered by Groq · knows Eshan</span>
            </div>
          </div>
          <button className="chat-min" onClick={() => setOpen(false)} aria-label="Close chat">
            ⌄
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
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Eshan…"
            aria-label="Message"
          />
          <button type="submit" disabled={loading || !input.trim()} aria-label="Send">
            ➤
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
