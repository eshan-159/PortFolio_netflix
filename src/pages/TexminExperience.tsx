import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import './ExperienceDetail.css';

const TexminExperience: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="experience-detail experience-detail--texmin">
      <div className="experience-detail__wrapper">
        <div className="experience-detail__back">
          <button type="button" onClick={() => navigate('/work-experience')}>
            <FiArrowLeft /> Back to timeline
          </button>
        </div>

        <div className="experience-detail__grid">
          <header className="experience-detail__hero">
            <span className="experience-detail__eyebrow">AvatarGPT – Intelligent 3D AI Avatar System</span>
            <h1 className="experience-detail__title">TEXMiN · AIML Intern</h1>
            <p className="experience-detail__meta">June 2025 – July 2025 · Dhanbad, India</p>
            <p className="experience-detail__stack">
              Python · Unity · PyTorch · Node.js · Rhubarb · Whisper · Servam AI · OpenCV
            </p>
            <p className="experience-detail__summary">
              I architected AvatarGPT end to end—an intelligent 3D avatar that hears you, thinks in custom-tuned LLMs, and answers back with human-grade timing, intonation, and emotion.
            </p>
            <p className="experience-detail__narrative">
              From day one I owned the conversation loop: rapid voice intake with Whisper, bespoke dialogue orchestration in Python, and rhythmic playback driven by Servam AI&apos;s TTS. Inside Unity I rebuilt the rig with blendshapes, inverse kinematics, and emotion graphs so every response paired speech with eye blinks, head tilts, and body language. The Node.js gateway I wrote keeps audio and animation streams synced under a 1.02&nbsp;s round trip, so the avatar feels present—not canned—and stayed live through stakeholder demos with a hardened 99.5% uptime service mesh.
            </p>
          </header>

          <article className="experience-detail__body">
            <h2 className="experience-detail__section-title">What I delivered</h2>
            <ul className="experience-detail__highlights">
              <li>
                Engineered a low-latency voice-to-LLM-to-speech pipeline powered by custom prompting and streaming inference, keeping end-to-end interactions at <strong>1.02&nbsp;seconds</strong>.
              </li>
              <li>
                Built emotion-aware animation graphs in Unity that blend facial micro-expressions, phoneme-based lip-sync, and full-body gestures across more than six expressive states.
              </li>
              <li>
                Integrated Servam AI&apos;s WAV-based TTS with Whisper and Rhubarb to orchestrate flawless speech alignment, hitting <strong>95%+ lip-sync accuracy</strong> in user tests.
              </li>
              <li>
                Designed resilient Node.js and Python microservices to orchestrate chat, audio, and animation queues, sustaining <strong>99.5% uptime</strong> during live stakeholder demos.
              </li>
            </ul>

            <button
              type="button"
              className="experience-detail__cta"
              onClick={() => navigate('/contact-me')}
            >
              <FiExternalLink /> Request a live walkthrough
            </button>
          </article>

          <aside className="experience-detail__panel">
            <h3>Key metrics</h3>
            <ul>
              <li><strong>1.02 s</strong> conversational round trip across ASR, LLM, and TTS stages.</li>
              <li><strong>95%+</strong> lip-sync fidelity verified across scripted and unscripted dialogue sets.</li>
              <li><strong>6+</strong> emotion profiles blended through adaptive animation state machines.</li>
              <li><strong>99.5%</strong> uptime across production-like demo environments.</li>
            </ul>
            <h3>Systems I owned</h3>
            <ul>
              <li>Unity animation rig with live blendshape and IK controls.</li>
              <li>Python orchestration layer for LLM reasoning and emotion tagging.</li>
              <li>Node.js gateway coordinating chat flow, audio synthesis, and avatar triggers.</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default TexminExperience;
