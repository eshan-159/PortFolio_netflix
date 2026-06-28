import React from 'react';
import './MediaCard.css';
import type { CardItem } from '../data/portfolio';

interface MediaCardProps {
  item: CardItem;
  numbered?: boolean;
  onOpen: (item: CardItem) => void;
}

const MediaCard: React.FC<MediaCardProps> = ({ item, numbered, onOpen }) => {
  return (
    <div className={`media-cell ${numbered ? 'numbered' : ''}`}>
      {numbered && item.rank && (
        <span className="rank-digit" aria-hidden="true">
          {item.rank}
        </span>
      )}
      <button
        type="button"
        className="media-card"
        style={{ ['--accent' as any]: item.accent || 'var(--nf-red)' }}
        onClick={() => onOpen(item)}
        aria-label={`Open ${item.title}`}
      >
        <div className="media-poster">
          <img src={item.image} alt={item.title} loading="lazy" />
          <div className="poster-shade" />
          {item.logo && <img className="poster-logo" src={item.logo} alt="" />}
          <div className="poster-top">
            {item.maturity && <span className="pill maturity">{item.maturity}</span>}
            {item.match && <span className="pill match">{item.match}% match</span>}
          </div>
        </div>

        <div className="media-info">
          <div className="media-info-head">
            <h3>{item.title}</h3>
            <span className="play-dot" aria-hidden="true">
              ▶
            </span>
          </div>
          <p className="media-sub">{item.subtitle}</p>
          <div className="media-tags">
            {item.tags.slice(0, 3).map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
            {item.tags.length > 3 && <span className="tag more">+{item.tags.length - 3}</span>}
          </div>
        </div>
      </button>
    </div>
  );
};

export default MediaCard;
