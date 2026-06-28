import React from 'react';
import { useNavigate } from 'react-router-dom';
import blueImage from '../images/blue.png';
import './browse.css';

const PHOTO = '/profile-eshan.png';

const Browse: React.FC = () => {
  const navigate = useNavigate();
  const go = (name: string) => navigate(`/profile/${name}`);

  return (
    <div className="browse-simple">
      <h1 className="ws-title">Who's watching?</h1>
      <div className="ws-row">
        <button className="ws-tile" onClick={() => go('recruiter')}>
          <div className="ws-img">
            <img className="photo" src={PHOTO} alt="Recruiter" />
          </div>
          <span>Recruiter</span>
        </button>
        <button className="ws-tile" onClick={() => go('friend')}>
          <div className="ws-img">
            <img className="avatar" src={blueImage} alt="Friend" />
          </div>
          <span>Friend</span>
        </button>
      </div>
    </div>
  );
};

export default Browse;
