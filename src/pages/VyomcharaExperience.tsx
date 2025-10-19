import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiMessageCircle } from 'react-icons/fi';
import './ExperienceDetail.css';

const VyomcharaExperience: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="experience-detail experience-detail--vyomchara">
      <div className="experience-detail__wrapper">
        <div className="experience-detail__back">
          <button type="button" onClick={() => navigate('/work-experience')}>
            <FiArrowLeft /> Back to timeline
          </button>
        </div>

        <div className="experience-detail__grid">
          <header className="experience-detail__hero">
            <span className="experience-detail__eyebrow">Vyomchara – Conversational AI in Indian Sign Language</span>
            <h1 className="experience-detail__title">Vyomchara · AIML Intern</h1>
            <p className="experience-detail__meta">July 2025 – September 2025 · India (Remote)</p>
            <p className="experience-detail__stack">
              Python · MediaPipe · TensorFlow · Node.js · Amazon ASL Dataset
            </p>
            <p className="experience-detail__summary">
              I prototyped Vyomchara, an accessibility-first assistant that treats Indian Sign Language as its native output and bridges Deaf and hearing communities without forcing text captions.
            </p>
            <p className="experience-detail__narrative">
              My charter was to let Deaf users converse naturally: MediaPipe-based pose capture shaped a reusable motion library, while TensorFlow sequence models mapped chatbot intents into nuanced hand shapes, facial cues, and torso rhythm. I fused those gestures into a Unity/WebGL avatar that streams smoothly even on mid-range devices. On the backend a Python + Node pipeline translates text to ASL gloss, stitches motion clips, and guarantees cultural accuracy through advisor feedback loops so every response feels intentional, respectful, and real time.
            </p>
          </header>

          <article className="experience-detail__body">
            <h2 className="experience-detail__section-title">What I built</h2>
            <ul className="experience-detail__highlights">
              <li>
                Mapped chatbot responses to ASL gloss using a custom semantic interpreter, then generated gesture timelines that drive avatar rigs in Unity and WebGL.
              </li>
              <li>
                Leveraged MediaPipe pose estimation and TensorFlow sequence models to choreograph hand shapes, facial cues, and torso movement for natural sign delivery.
              </li>
              <li>
                Delivered a dual-channel UX where users can speak or type, while the bot responds exclusively through sign, with optional caption overlays for mixed-ability audiences.
              </li>
              <li>
                Wrapped the experience in a progressive web interface with real-time streaming, achieving smooth playback even on mid-range hardware.
              </li>
            </ul>

            <button
              type="button"
              className="experience-detail__cta"
              onClick={() => navigate('/projects', { state: { filter: 'accessibility' } })}
            >
              <FiMessageCircle /> Explore the accessibility stack
            </button>
          </article>

          <aside className="experience-detail__panel">
            <h3>Key outcomes</h3>
            <ul>
              <li><strong>100%</strong> sign-first dialogues thanks to automated text-to-ASL translation.</li>
              <li><strong>40+</strong> reusable gesture clips stitched dynamically at runtime.</li>
              <li><strong>Sub-150 ms</strong> frame latency for avatar playback on commodity devices.</li>
            </ul>
            <h3>Focus areas</h3>
            <ul>
              <li>Accessibility design research with Deaf community advisors.</li>
              <li>Multimodal NLP to bridge language and movement representations.</li>
              <li>Interactive avatar UX tuned for clarity and cultural accuracy.</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default VyomcharaExperience;
