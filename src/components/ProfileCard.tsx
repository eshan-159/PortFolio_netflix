import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  image: string;
  fallback?: string;
  variant?: 'mono' | 'duo';
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, image, fallback, variant, onClick }) => {
  return (
    <div className="profile-card" onClick={onClick}>
      <div className="image-container">
        <img
          src={image}
          alt={`${name} profile`}
          className={`profile-image ${variant || ''}`}
          onError={(e) => {
            if (fallback && !e.currentTarget.src.endsWith(fallback)) {
              e.currentTarget.src = fallback;
              e.currentTarget.classList.remove('mono', 'duo');
            }
          }}
        />
      </div>
      <h3 className="profile-name">{name}</h3>
    </div>
  );
};

export default ProfileCard;
