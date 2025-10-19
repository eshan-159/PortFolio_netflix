import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalProjectHighlight.css';

const PersonalProjectHighlight: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="personal-project-section">
      <h2 className="section-title">Personal Project Spotlight</h2>
      <div className="personal-project-wrapper">
        <div className="ranking-number">1</div>
        <button
          type="button"
          className="personal-project-card"
          onClick={() => navigate('/project/deepfake-detector')}
        >
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
            alt="DeepFake Detector"
          />
          <div className="card-content">
            <h3>DeepFake Detector</h3>
            <p className="role">AI Research Project</p>
            <p className="duration">Hybrid CNN · FastAPI · Docker · CI/CD</p>
            <p className="hover-description">
              Deep-learning powered authenticity checks with explainability and production tooling.
            </p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default PersonalProjectHighlight;
