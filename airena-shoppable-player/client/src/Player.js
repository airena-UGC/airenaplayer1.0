import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

function Player() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        autoplay: false,
        controls: true,
        sources: [{ src: '/sample.mp4', type: 'video/mp4' }]
      });
    }
  }, []);

  return (
    <div>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
}

export default Player;
