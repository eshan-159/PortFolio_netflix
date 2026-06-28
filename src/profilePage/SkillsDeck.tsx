import React from 'react';
import './SkillsDeck.css';
import { skillGroups, problemSolving, education } from '../data/portfolio';
import { FaCode, FaMicrochip, FaCloud, FaBrain } from 'react-icons/fa';

const iconMap: Record<string, React.ReactNode> = {
  FaCode: <FaCode />,
  FaMicrochip: <FaMicrochip />,
  FaCloud: <FaCloud />,
  FaBrain: <FaBrain />,
};

const SkillsDeck: React.FC = () => {
  return (
    <section className="skills-deck">
      <div className="row-head">
        <h2 className="row-heading">Skills & Toolbox</h2>
      </div>

      <div className="sd-grid">
        {skillGroups.map((g) => (
          <div className="sd-card" key={g.category}>
            <div className="skill-icon">{iconMap[g.icon]}</div>
            <h3>{g.category}</h3>
            <div className="skill-chips">
              {g.skills.map((s) => (
                <span key={s} className="skill-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="extra-grid">
        <div className="extra-card">
          <span className="extra-label">Problem Solving</span>
          {problemSolving.map((p) => (
            <a className="ps-row" key={p.label} href={p.url} target="_blank" rel="noreferrer">
              <strong>{p.label}</strong>
              <span>{p.value}</span>
              <em>↗</em>
            </a>
          ))}
        </div>
        <div className="extra-card">
          <span className="extra-label">Education</span>
          <h3 className="edu-degree">{education.degree}</h3>
          <p className="edu-inst">{education.institute}</p>
          <div className="edu-meta">
            <span>{education.period}</span>
            <span>·</span>
            <span>{education.location}</span>
            <span className="edu-cgpa">CGPA {education.cgpa}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsDeck;
