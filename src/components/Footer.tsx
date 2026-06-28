import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFilePdf } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import { contact } from '../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <h2>Let’s build something that scales.</h2>
        <p>Open to AI / distributed-systems roles & research collaborations.</p>
        <div className="footer-cta-actions">
          <a className="f-btn primary" href={`mailto:${contact.email}`}>
            <FaEnvelope /> Hire Me
          </a>
          <a className="f-btn ghost" href={contact.resumeUrl} target="_blank" rel="noreferrer">
            <FaFilePdf /> Download Résumé
          </a>
        </div>
      </div>

      <div className="footer-socials">
        <a href={contact.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href={contact.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href={contact.socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
          <SiLeetcode />
        </a>
        <a href={contact.socials.codeforces} target="_blank" rel="noreferrer" aria-label="Codeforces">
          <SiCodeforces />
        </a>
      </div>

      <div className="footer-contacts">
        <a href={`mailto:${contact.email}`}>
          <FaEnvelope /> {contact.email}
        </a>
        <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
          <FaPhone /> {contact.phone}
        </a>
        <span>
          <FaMapMarkerAlt /> {contact.location}
        </span>
      </div>

      <div className="footer-watermark">
        <span className="wm-logo">ESHAN</span>
        <p>
          © {new Date().getFullYear()} {contact.name} · {contact.title}. Designed & built by Eshan —
          a Netflix-inspired portfolio with an Apple-glass twist.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
