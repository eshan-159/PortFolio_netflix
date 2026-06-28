import React, { useState } from 'react';
import './ProfilePage.css';

import Hero from './Hero';
import ContentRow from '../components/ContentRow';
import ResearchSpotlight from './ResearchSpotlight';
import SkillsDeck from './SkillsDeck';
import DetailModal from '../components/DetailModal';
import Footer from '../components/Footer';
import { experiences, projects, research, allWork } from '../data/portfolio';
import type { CardItem } from '../data/portfolio';

const ProfilePage: React.FC = () => {
  const [active, setActive] = useState<CardItem | null>(null);

  return (
    <div className="profile-page-v2">
      <Hero onMoreInfo={() => setActive(research)} />

      <div className="rows-wrap">
        <ContentRow id="projects" title="Top Picks · Projects" items={projects} numbered onOpen={setActive} />
        <ContentRow id="experience" title="Experience · Internships" items={experiences} numbered onOpen={setActive} />
        <div id="research"><ResearchSpotlight onOpen={() => setActive(research)} /></div>
        <div id="skills"><SkillsDeck /></div>
        <ContentRow title="Browse Everything" items={allWork} onOpen={setActive} />
      </div>

      <Footer />
      <DetailModal item={active} onClose={() => setActive(null)} />
    </div>
  );
};

export default ProfilePage;
