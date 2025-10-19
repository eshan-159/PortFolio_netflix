import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import type { ProfileType } from '../types/profile';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig: Record<ProfileType, Array<{ title: string; imgSrc: string; route: string }>> = {
  recruiter: [
    { title: "Skills", imgSrc: "https://picsum.photos/seed/skills/250/200", route: "/skills" },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/workexperience/250/200", route: "/experience/highlights" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/projects/250/200", route: "/project/deepfake-detector" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/contact/250/200", route: "/contact-me" }
  ],
  friend: [
    { title: "Skills", imgSrc: "https://picsum.photos/seed/skills/250/200", route: "/skills" },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/workexperience/250/200", route: "/experience/highlights" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/projects/250/200", route: "/project/deepfake-detector" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/contact/250/200", route: "/contact-me" }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
