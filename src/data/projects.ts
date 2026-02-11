import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Dazza - DeepFake Detector',
    description: 'AI-powered deepfake detection with hybrid CNN, attention-augmented ResNet, and Grad-CAM explainability. Achieves ~92% validation accuracy with real-time inference (<100ms). Features FastAPI backend, React frontend with glass-morphism design, and Vercel deployment.',
    techUsed: 'PyTorch, FastAPI, React, TensorFlow, Grad-CAM, Docker, Vercel, GitHub Actions',
    image: { url: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80' },
    github: 'https://github.com/eshan-159/DeepFake_Detector',
  },
  {
    title: 'CompanyLens',
    description: 'Enterprise-grade AI-powered automation platform that transforms company names into comprehensive business intelligence. Leverages Groq\'s Llama 3.1-8B-Instant for ultra-fast processing (100x faster than traditional methods). Features intelligent web discovery, AI summarization, and industry classification.',
    techUsed: 'Python, Groq API, Playwright, BeautifulSoup, React, FastAPI, Express.js, NLP',
    image: { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80' },
    github: 'https://github.com/eshan-159/CompanyLens-',
  },
  {
    title: 'AI Resume Analyzer',
    description: 'Intelligent resume analysis platform with NLP-based skill extraction and role-specific insights. Features smart PDF/DOCX parsing, visual scoring dashboard, and actionable improvement suggestions for 5 tech roles. Built with privacy-first architecture - no data storage.',
    techUsed: 'React, Node.js, Express.js, Natural NLP, Tailwind CSS, Vite, pdf-parse',
    image: { url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80' },
    github: 'https://github.com/eshan-159/RESUME_CHECKER',
  },
  {
    title: 'AvatarGPT',
    description: 'Real-time conversational 3D avatar system with sub-2-second response times. Integrates Unity metahuman avatars with AI-powered conversational intelligence for immersive human-computer interaction experiences.',
    techUsed: 'Unity, JavaScript, TypeScript, React, AI/ML, 3D Graphics, Real-time Systems',
    image: { url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80' },
    github: 'https://github.com/eshan-159/avatargpt',
  },
];

export default projects;


