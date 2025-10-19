import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Intro from './Intro';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import WorkPermit from './pages/WorkPermit';
import WorkExperience from './pages/WorkExperience';
import Recommendations from './pages/Recommendations';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
import Music from './pages/Music';
import Reading from './pages/Reading';
import Blogs from './pages/Blogs';
import Certifications from './pages/Certifications';
import TexminExperience from './pages/TexminExperience';
import VyomcharaExperience from './pages/VyomcharaExperience';
import ExperienceShowcase from './pages/ExperienceShowcase';
import DeepfakeProject from './pages/DeepfakeProject';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/work-permit" element={<Layout><WorkPermit /></Layout>} />
      <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
      <Route path="/recommendations" element={<Layout><Recommendations /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      <Route path="/music" element={<Layout><Music /></Layout>} />
      <Route path="/reading" element={<Layout><Reading /></Layout>} />
      <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
      <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
  <Route path="/experience/highlights" element={<Layout><ExperienceShowcase /></Layout>} />
  <Route path="/project/deepfake-detector" element={<Layout><DeepfakeProject /></Layout>} />
      <Route path="/experience/texmin" element={<Layout><TexminExperience /></Layout>} />
      <Route path="/experience/vyomchara" element={<Layout><VyomcharaExperience /></Layout>} />
    </Routes>
  );
};

export default App;
