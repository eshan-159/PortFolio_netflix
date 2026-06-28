import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaFlask, FaCommentDots } from 'react-icons/fa';
import './MobileTabBar.css';

const MobileTabBar: React.FC = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else navigate('/profile/recruiter');
  };

  const openChat = () => {
    const fab = document.querySelector('.chat-fab') as HTMLButtonElement | null;
    fab?.click();
  };

  return (
    <nav className="mobile-tabbar">
      <button onClick={() => scrollTo('top')}>
        <FaHome />
        <span>Home</span>
      </button>
      <button onClick={() => scrollTo('projects')}>
        <FaProjectDiagram />
        <span>Projects</span>
      </button>
      <button onClick={() => scrollTo('research')}>
        <FaFlask />
        <span>Research</span>
      </button>
      <button onClick={openChat}>
        <FaCommentDots />
        <span>Eshan’s AI</span>
      </button>
    </nav>
  );
};

export default MobileTabBar;
