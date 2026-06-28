import React from 'react';
import './Hero.css';
import { hero } from '../data/portfolio';

interface HeroProps {
  onMoreInfo: () => void;
}

const HERO_POSTER =
  'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1000&q=80';

const Hero: React.FC<HeroProps> = ({ onMoreInfo }) => {
  return (
    <header className="hero">
      <div className="hero-bg" />
      <div className="hero-grain" />

      {/* desktop layout */}
      <div className="hero-content">
        <span className="hero-badge">{hero.badge}</span>
        <h1 className="hero-title">{hero.title}</h1>
        <p className="hero-tagline">{hero.tagline}</p>
        <div className="hero-chips">
          {hero.highlights.map((h) => (
            <span key={h} className="hero-chip">
              {h}
            </span>
          ))}
        </div>
        <p className="hero-desc">{hero.description}</p>
        <div className="hero-actions">
          <a className="hero-btn play" href={hero.resumeUrl} target="_blank" rel="noreferrer">
            ▶ Resume
          </a>
          <button className="hero-btn info" onClick={onMoreInfo}>
            ⓘ More Info
          </button>
        </div>
      </div>

      {/* mobile layout — Netflix portrait-poster hero */}
      <div className="hero-mobile">
        <div className="hero-poster">
          <img src={HERO_POSTER} alt="Eshan" />
          <div className="hero-poster-grad" />
          <div className="hero-poster-meta">
            <h1>{hero.title}</h1>
            <p className="hero-poster-tag">
              {hero.highlights.slice(0, 3).join('  •  ')}
            </p>
          </div>
        </div>
        <div className="hero-mobile-cta">
          <a className="hero-btn play" href={hero.resumeUrl} target="_blank" rel="noreferrer">
            ▶ Resume
          </a>
          <button className="hero-btn info" onClick={onMoreInfo}>
            ＋ More Info
          </button>
        </div>
      </div>

      <div className="hero-rating">{hero.rating}</div>
      <div className="hero-fade" />
    </header>
  );
};

export default Hero;
