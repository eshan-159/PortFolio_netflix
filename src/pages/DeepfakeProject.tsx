import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiGithub, FiPlayCircle } from 'react-icons/fi';
import './ExperienceDetail.css';

const DeepfakeProject: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="experience-detail experience-detail--project">
      <div className="experience-detail__wrapper">
        <div className="experience-detail__back">
          <button type="button" onClick={() => navigate('/projects')}>
            <FiArrowLeft /> Back to projects shelf
          </button>
        </div>

        <div className="experience-detail__grid">
          <header className="experience-detail__hero">
            <span className="experience-detail__eyebrow">DeepFake Detector</span>
            <h1 className="experience-detail__title">Personal Research Project</h1>
            <p className="experience-detail__meta">Real vs. synthetic media classification · Ongoing</p>
            <p className="experience-detail__stack">
              PyTorch · Hybrid CNN + Attention · Grad-CAM · FastAPI · React · Docker · GitHub Actions
            </p>
            <p className="experience-detail__summary">
              I built a complete deepfake defence pipeline that spots generated faces with high recall, explains its verdicts, and ships through a production-ready MLOps stack.
            </p>
            <p className="experience-detail__narrative">
              The model blends ResNet and ConvNeXt backbones with attention heads to isolate subtle artefacts. I generated balanced training data with Stable Diffusion—wrapped in consent-first guardrails—and performed aggressive augmentation so the classifier generalises across compression levels and lighting. The output isn&apos;t just a label: Grad-CAM overlays highlight the exact facial regions that look suspicious, giving journalists and moderators trust in every prediction.
            </p>
          </header>

          <article className="experience-detail__body">
            <h2 className="experience-detail__section-title">How it works</h2>
            <ul className="experience-detail__highlights">
              <li>
                Built a hybrid-CNN architecture with channel attention and Grad-CAM visualisation, landing <strong>86% validation accuracy</strong> on held-out benchmark sets.
              </li>
              <li>
                Delivered an end-to-end stack: FastAPI inference microservice, React/Tailwind dashboard, Docker-compose orchestration, and GitHub Actions for CI/CD deployments.
              </li>
              <li>
                Automated synthetic data generation via Stable Diffusion with consent filters, augmenting <strong>10k+</strong> samples using ColorJitter, Gaussian blur, JPEG compression, and temporal noise.
              </li>
              <li>
                Authored a configurable training framework with AMP mixed precision, weighted sampling for class balance, and modular backbones (ResNet18/34, ConvNeXt).
              </li>
            </ul>

            <button
              type="button"
              className="experience-detail__cta"
              onClick={() => window.open('https://github.com/eshan-159/DeepFake_Detector', '_blank')}
            >
              <FiGithub /> View source on GitHub
            </button>
          </article>

          <aside className="experience-detail__panel">
            <h3>Launch the demo</h3>
            <ul>
              <li>FastAPI endpoint exposes `/predict` for batched or streaming inference.</li>
              <li>React/Tailwind frontend supports drag-and-drop uploads and Grad-CAM overlays.</li>
              <li>Docker images published through GitHub Container Registry for one-command deploys.</li>
            </ul>
            <button
              type="button"
              className="experience-detail__cta"
              onClick={() => window.open('https://github.com/eshan-159/DeepFake_Detector', '_blank')}
            >
              <FiPlayCircle /> Launch documentation
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default DeepfakeProject;
