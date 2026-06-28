import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaPencilAlt } from 'react-icons/fa';
import './browse.css';

const PHOTO = '/profile-eshan.png';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const go = (name: string) => navigate(`/profile/${name}`);

  return (
    <div className="browse-v2">
      {/* cinematic hero (Netflix billboard style) */}
      <div className="browse-hero">
        <img src={PHOTO} alt="Eshan" className="browse-hero-img" />
        <div className="browse-hero-fade" />
        <div className="browse-hero-text">
          <h1 className="browse-hero-title">ESHAN</h1>
          <p className="browse-hero-sub">AI &amp; Distributed-Systems Engineer</p>
          <div className="browse-badge">
            <span className="top10">
              TOP
              <br />
              10
            </span>
            <span>#1 in Engineers You Should Hire Today</span>
          </div>
        </div>
      </div>

      <p className="browse-pick">Choose your profile</p>

      <div className="browse-grid">
        <button className="ptile" onClick={() => go('recruiter')}>
          <div className="ptile-img">
            <img src={PHOTO} alt="Recruiter" className="mono" />
          </div>
          <span>Recruiter</span>
        </button>

        <button className="ptile" onClick={() => go('friend')}>
          <div className="ptile-img">
            <img src={PHOTO} alt="Friend" className="duo" />
            <span className="tint" />
          </div>
          <span>Friend</span>
        </button>

        <button className="ptile decorative" onClick={() => go('recruiter')}>
          <div className="ptile-img ghost">
            <FaPlus />
          </div>
          <span>Add</span>
        </button>

        <button className="ptile decorative" onClick={() => go('recruiter')}>
          <div className="ptile-img ghost">
            <FaPencilAlt />
          </div>
          <span>Edit</span>
        </button>
      </div>
    </div>
  );
};

export default Browse;
