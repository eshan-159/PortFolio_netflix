import React from 'react';
import './ResearchSpotlight.css';
import { research } from '../data/portfolio';

interface Props {
  onOpen: () => void;
}

const ResearchSpotlight: React.FC<Props> = ({ onOpen }) => {
  return (
    <section className="research-spotlight">
      <div className="row-head">
        <h2 className="row-heading">Now in Review · Research</h2>
      </div>
      <div className="research-billboard" style={{ ['--accent' as any]: research.accent }}>
        <img className="research-bg" src={research.image} alt="" />
        <div className="research-shade" />
        <div className="research-inner">
          <span className="research-flag">★ Featured Paper · ICLR (under review)</span>
          <h3 className="research-title">{research.title}</h3>
          <p className="research-authors">Eshan, Saurav Kumar, Trushna Parida, Subhangi · SOA University</p>
          <p className="research-summary">{research.summary}</p>
          <div className="research-metrics">
            {research.metrics?.map((m) => (
              <div className="r-metric" key={m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
          <div className="research-actions">
            <button className="research-btn" onClick={onOpen}>
              ⓘ Read the abstract
            </button>
            <span className="research-note">Full paper under non-disclosure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSpotlight;
