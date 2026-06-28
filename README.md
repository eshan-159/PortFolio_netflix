# Eshan — Netflix-style Portfolio 🍿

A Netflix-inspired developer portfolio with an Apple-glass (translucent / backdrop-blur) twist,
built with React + TypeScript (Create React App). Features an animated intro, a cinematic hero,
Top-10-style numbered project & experience rows, a Netflix-style detail modal, a featured research
billboard, and **E-Bot** — a Groq-powered chatbot that knows Eshan's résumé and projects.

## Highlights
- 🎬 Animated intro video → "Who's watching?" → profile home
- 🃏 Numbered project / experience rows with smooth GPU hover and a detail modal
- 🧪 Featured research spotlight (I-State, under review at ICLR)
- 🤖 E-Bot chatbot grounded in Eshan's résumé (Groq, `llama-3.3-70b-versatile`)
- 🪟 Apple-glass surfaces: navbar, cards, modal, chatbot
- 📄 Résumé download, full contact + watermark footer

## Run locally
```bash
npm install
npm start          # http://localhost:3000  (chatbot shows an "offline" note without the API)
```

To run the chatbot locally you need the serverless function, so use the Vercel CLI:
```bash
npm i -g vercel
cp .env.example .env      # then put your Groq key in .env
vercel dev
```

## The chatbot (Groq)
- Frontend: `src/components/Chatbot.tsx`
- Backend: `api/chat.js` (Vercel serverless function). It injects a knowledge prompt built from
  the résumé and calls Groq. The API key is read from the `GROQ_API_KEY` environment variable and
  is **never** exposed to the browser.

## Deploy (Vercel)
1. Push this repo to GitHub.
2. Import it on https://vercel.com (framework auto-detects as Create React App).
3. Add an Environment Variable: `GROQ_API_KEY = <your Groq key>` (get one at
   https://console.groq.com/keys).
4. Deploy. `vercel.json` already routes `/api/*` to the function and everything else to the SPA.

## Content
All résumé content lives in a single source of truth: `src/data/portfolio.ts`
(experiences, projects, research, skills, contact). Update that file to change the site.

---
Designed & built by **Eshan** · AI & Distributed-Systems Engineer · Bhubaneswar, India
