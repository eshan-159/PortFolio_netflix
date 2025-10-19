import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'DeepFake Detector',
    description: 'Hybrid CNN with attention and Grad-CAM explainability, backed by a FastAPI + React production stack for authenticity reviews.',
    techUsed: 'PyTorch, FastAPI, React, Docker, GitHub Actions',
    image: { url: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80' },
  },
];

export default projects;


