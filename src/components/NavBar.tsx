import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaBriefcase, FaFlask, FaTools, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import './Navbar.css';
import netflixLogo from '../images/logo-eshan.svg';
import blueImage from '../images/blue.png';
import { contact } from '../data/portfolio';

const links = [
  { label: 'Home', id: 'top', icon: <FaHome /> },
  { label: 'Projects', id: 'projects', icon: <FaProjectDiagram /> },
  { label: 'Experience', id: 'experience', icon: <FaBriefcase /> },
  { label: 'Research', id: 'research', icon: <FaFlask /> },
  { label: 'Skills', id: 'skills', icon: <FaTools /> },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (id: string) => {
    setIsSidebarOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/profile/recruiter');
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/browse" className="navbar-logo">
            <img src={netflixLogo} alt="Eshan" />
          </Link>
          <ul className="navbar-links">
            {links.map((l) => (
              <li key={l.id}>
                <button type="button" onClick={() => goTo(l.id)}>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-right">
          <a className="nav-resume" href={contact.resumeUrl} target="_blank" rel="noreferrer">
            Résumé
          </a>
          <a className="nav-hire" href={`mailto:${contact.email}`}>
            Hire Me
          </a>
          <div className="hamburger" onClick={() => setIsSidebarOpen((o) => !o)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img
            src={blueImage}
            alt="Profile"
            className="profile-icon"
            onClick={() => navigate('/browse')}
          />
        </div>
      </nav>

      {/* mobile-only category pills (Netflix-app style) */}
      <div className={`navbar-pills ${isScrolled ? 'scrolled' : ''}`}>
        {links
          .filter((l) => l.id !== 'top')
          .map((l) => (
            <button key={l.id} type="button" onClick={() => goTo(l.id)}>
              {l.label}
            </button>
          ))}
        <a href={contact.resumeUrl} target="_blank" rel="noreferrer">
          Résumé
        </a>
      </div>

      <div
        className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <img src={netflixLogo} alt="Eshan" />
        </div>
        <ul>
          {links.map((l) => (
            <li key={l.id}>
              <button type="button" onClick={() => goTo(l.id)}>
                {l.icon} {l.label}
              </button>
            </li>
          ))}
          <li>
            <a href={contact.resumeUrl} target="_blank" rel="noreferrer">
              <FaFilePdf /> Résumé
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`}>
              <FaEnvelope /> Hire Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
