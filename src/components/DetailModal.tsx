import React, { useEffect } from 'react';
import './DetailModal.css';
import type { CardItem } from '../data/portfolio';

interface DetailModalProps {
  item: CardItem | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  const accent = item.accent || 'var(--nf-red)';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        style={{ ['--accent' as any]: accent }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-hero">
          <img src={item.image} alt={item.title} />
          <div className="modal-hero-shade" />
          <div className="modal-hero-text">
            {item.logo && <img className="modal-logo" src={item.logo} alt="" />}
            <span className="modal-kicker">{item.meta}</span>
            <h2>{item.title}</h2>
            <p className="modal-subtitle">{item.subtitle}</p>
            <div className="modal-actions">
              {item.github && (
                <a className="modal-btn primary" href={item.github} target="_blank" rel="noreferrer">
                  ▶ View Code
                </a>
              )}
              {item.link && item.link.url && (
                <a className="modal-btn ghost" href={item.link.url} target="_blank" rel="noreferrer">
                  ⓘ {item.link.label}
                </a>
              )}
              {item.link && !item.link.url && (
                <span className="modal-btn ghost disabled">ⓘ {item.link.label}</span>
              )}
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-main">
            {item.match && (
              <div className="modal-stats-line">
                <span className="green">{item.match}% match</span>
                {item.maturity && <span className="badge">{item.maturity}</span>}
                <span className="hd">HD</span>
              </div>
            )}
            <p className="modal-summary">{item.summary}</p>
            <ul className="modal-bullets">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>

          <aside className="modal-aside">
            {item.metrics && item.metrics.length > 0 && (
              <div className="metric-grid">
                {item.metrics.map((m) => (
                  <div className="metric" key={m.label}>
                    <div className="metric-value">{m.value}</div>
                    <div className="metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="aside-block">
              <span className="aside-label">Tech</span>
              <div className="aside-tags">
                {item.tags.map((t) => (
                  <span key={t} className="aside-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
