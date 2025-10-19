import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExperienceShowcase.css';

const experienceHighlights = [
  {
    id: 1,
    name: 'TEXMiN · AvatarGPT',
    role: 'AIML Intern',
    period: 'June 2025 – July 2025 · Dhanbad, India',
    summary:
      'Engineered AvatarGPT, a metahuman-style assistant with 1.02 s response loops, Servam AI speech, and emotion-aware animation authored in Unity.',
    image: '/imagesss/YV4g3Qoe_400x400.jpg',
    route: '/experience/texmin',
    cta: 'Read the TEXMiN case study',
  },
  {
    id: 2,
    name: 'Vyomchara · Sign-Language Bot',
    role: 'AIML Intern',
    period: 'July 2025 – September 2025 · India (Remote)',
    summary:
      'Built Vyomchara, an Indian Sign Language native chatbot that replies through expressive avatar animation, powered by MediaPipe, TensorFlow, and Unity.',
    image: '/imagesss/1729878470252.jpg',
    route: '/experience/vyomchara',
    cta: 'Explore the Vyomchara story',
  },
];

const ExperienceShowcase: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="experience-showcase">
      <div className="experience-showcase__hero">
        <h1>Experience Spotlight</h1>
        <p>
          Two immersive internships where I fused conversational AI, realtime graphics, and production-quality systems. Dive deeper into each story to see the engineering and design decisions in detail.
        </p>
      </div>

      <div className="experience-showcase__grid">
        {experienceHighlights.map((item) => (
          <article key={item.id} className="experience-showcase__card">
            <img src={item.image} alt={item.name} />
            <div className="experience-showcase__content">
              <span className="experience-showcase__pill">{item.role}</span>
              <h2>{item.name}</h2>
              <p className="experience-showcase__period">{item.period}</p>
              <p className="experience-showcase__summary">{item.summary}</p>
              <button
                type="button"
                className="experience-showcase__cta"
                onClick={() => navigate(item.route)}
              >
                {item.cta}
              </button>
            </div>
            <div className="experience-showcase__number">{item.id}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceShowcase;
