import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import './browse.css';

const BG_GIF =
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  // Eshan's portrait (drop a file at public/profile-eshan.jpg). Falls back to the
  // abstract avatars if the file isn't present yet.
  const profiles = [
    {
      name: 'recruiter',
      label: 'Recruiter',
      image: '/profile-eshan.jpg',
      fallback: blueImage,
      variant: 'mono' as const,
      backgroundGif: BG_GIF,
    },
    {
      name: 'friend',
      label: 'Friend',
      image: '/profile-eshan.jpg',
      fallback: greyImage,
      variant: 'duo' as const,
      backgroundGif: BG_GIF,
    },
  ];

  const handleProfileClick = (p: { name: string; backgroundGif: string }) => {
    navigate(`/profile/${p.name}`, { state: { backgroundGif: p.backgroundGif } });
  };

  return (
    <div className="browse-container">
      <p className="who-is-watching">Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.name}
            name={profile.label}
            image={profile.image}
            fallback={profile.fallback}
            variant={profile.variant}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
