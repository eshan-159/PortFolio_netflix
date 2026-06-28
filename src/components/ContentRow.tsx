import React, { useRef } from 'react';
import './ContentRow.css';
import MediaCard from './MediaCard';
import type { CardItem } from '../data/portfolio';

interface ContentRowProps {
  title: string;
  items: CardItem[];
  numbered?: boolean;
  id?: string;
  onOpen: (item: CardItem) => void;
}

const ContentRow: React.FC<ContentRowProps> = ({ title, items, numbered, id, onOpen }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section className="content-row" id={id}>
      <div className="row-head">
        <h2 className="row-heading">{title}</h2>
        <span className="row-explore">Explore all ›</span>
      </div>
      <div className="row-viewport">
        <button className="row-arrow left" onClick={() => scrollBy(-1)} aria-label="Scroll left">
          ‹
        </button>
        <div className="row-track" ref={trackRef}>
          {items.map((item) => (
            <MediaCard key={item.id} item={item} numbered={numbered} onOpen={onOpen} />
          ))}
        </div>
        <button className="row-arrow right" onClick={() => scrollBy(1)} aria-label="Scroll right">
          ›
        </button>
      </div>
    </section>
  );
};

export default ContentRow;
