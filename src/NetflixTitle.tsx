// src/NetflixTitle.tsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import netflixSound from "./netflix-sound.mp3"; // keep this path relative to src
// Video should be at: public/intro/E.mp4

const NetflixTitle: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  const [started, setStarted] = useState(false); // user pressed play (or autoplay succeeded)
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onEnded = () => {
      // start fade out, then navigate
      setFading(true);
      setTimeout(() => navigate("/browse"), 500); // 500ms fade
    };

    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, [navigate]);

  // Play handler: plays audio (user gesture) and ensures video is playing
  const handleStart = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      // try to play video (video may already autoplay muted)
      video.muted = true; // allow autoplay if browser allows it
      await video.play();
    } catch (e) {
      // ignore
    }

    // create audio and play it (user gesture allows sound)
    if (!audioRef.current) {
      const audio = new Audio(netflixSound);
      audioRef.current = audio;
      audio.play().catch((err) => {
        // if play fails, ignore — sound may be blocked unless it's a user gesture
        console.warn("Audio play failed:", err);
      });
    } else {
      audioRef.current.play().catch(() => {});
    }

    setStarted(true);
  };

  const handleSkip = () => {
    // stop media and navigate now
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (videoRef.current) {
      videoRef.current.pause();
    }
    navigate("/browse");
  };

  // Inline styles — no external CSS
  const containerStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
    zIndex: 9999,
    transition: "opacity 500ms ease",
    opacity: fading ? 0 : 1,
  };

  const videoStyle: React.CSSProperties = {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    objectPosition: "center center",
    display: "block",
  };

  const overlayButtonStyle: React.CSSProperties = {
    position: "absolute",
    background: "rgba(0,0,0,0.65)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "10px 16px",
    borderRadius: 6,
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {/* Video (served from public/intro/E.mp4) */}
      <video
        ref={videoRef}
        src="/intro/E.mp4"
        autoPlay
        muted
        playsInline
        style={videoStyle}
      />

      {/* Play overlay (only visible before user starts audio) */}
      {!started && (
        <button
          onClick={handleStart}
          style={{ ...overlayButtonStyle, bottom: 40, left: "50%", transform: "translateX(-50%)" }}
          aria-label="Play intro"
        >
          Play Intro
        </button>
      )}

      {/* Skip button (always visible) */}
      <button
        onClick={handleSkip}
        style={{ ...overlayButtonStyle, top: 20, right: 20 }}
        aria-label="Skip intro"
      >
        Skip Intro
      </button>
    </div>
  );
};

export default NetflixTitle;
