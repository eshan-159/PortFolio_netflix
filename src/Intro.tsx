

import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video plays from the start
      video.currentTime = 0;
      
      // When video ends → redirect to /browse
      video.onended = () => {
        navigate("/browse");
      };
    }
  }, [navigate]);

  return (
    <div className="intro-container">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          src="/intro/E.mp4"
          autoPlay
          muted
          playsInline
          className="intro-video"
        />
      </div>
    </div>
  );
};

export default Intro;
