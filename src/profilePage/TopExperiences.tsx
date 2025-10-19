import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopExperiences.css';

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  isCurrent?: boolean;
  image?: string;
  route: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "TEXMiN",
    role: "AIML Intern",
    period: "June 2025 – July 2025",
    description: "Built AvatarGPT, a metahuman-calibre 3D assistant.",
    image: "/imagesss/YV4g3Qoe_400x400.jpg",
    route: "/experience/texmin"
  },
  {
    id: 2,
    company: "Vyomchara",
    role: "AIML Intern",
    period: "July 2025 – September 2025",
    description: "Designed an Indian Sign Language-first chatbot.",
    image: "/imagesss/1729878470252.jpg",
    route: "/experience/vyomchara"
  }
];

const TopExperiences: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="top-experiences-section">
      <h2 className="section-title">Top Experiences</h2>
      <div className="experiences-container">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="ranking-number">{exp.id}</div>
            <button
              type="button"
              className="experience-card"
              onClick={() => navigate(exp.route)}
            >
              {exp.image ? (
                <img src={exp.image} alt={exp.company} />
              ) : (
                <div className="card-image-placeholder"></div>
              )}
              <div className="card-content">
                <h3>{exp.company}</h3>
                <p className="role">{exp.role}</p>
                <p className="duration">{exp.period}</p>
                <p className="hover-description">{exp.description}</p>
              </div>
              {exp.isCurrent && (
                <div className="current-role-badge">Current Role</div>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopExperiences;
