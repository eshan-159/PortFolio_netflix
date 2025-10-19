import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import profilePic from '../images/avataar.png';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';
import { getContactMe } from '../queries/getContactMe';

const ContactMe: React.FC = () => {

  const [userData, setUserData] = useState<IContactMe>()

  useEffect(() => {
    async function fetchUserData() {
      const data = await getContactMe();
      setUserData(data);
    }

    fetchUserData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <section className="contact-container">
      <header className="contact-hero">
        <h1>Let&apos;s build the next intelligent experience.</h1>
        <p>
          Drop me a line if you&apos;re exploring avatar tech, accessibility-first interfaces, or production AI systems. I love collaborative deep-dives and rapid prototyping sessions.
        </p>
      </header>

      <div className="contact-grid">
        <article className="contact-card contact-card--profile">
          <img src={profilePic} alt={userData.name} className="contact-avatar" />
          <h2>{userData.name}</h2>
          <p className="contact-title">{userData.title}</p>
          <p className="contact-summary">{userData.summary}</p>
          <p className="contact-organization">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-linkedin"
          >
            <FaLinkedin /> Connect on LinkedIn
          </a>
        </article>

        <article className="contact-card contact-card--details">
          <div className="contact-detail">
            <FaEnvelope />
            <div>
              <span>Email</span>
              <a href={`mailto:${userData.email}`}>{userData.email}</a>
            </div>
          </div>
          <div className="contact-detail">
            <FaMapMarkerAlt />
            <div>
              <span>Studio</span>
              <p>{userData.address}</p>
            </div>
          </div>
          <div className="contact-detail contact-detail--cta">
            <button type="button" onClick={() => window.open('https://cal.com', '_blank')}>
              Book a discovery call
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ContactMe;
