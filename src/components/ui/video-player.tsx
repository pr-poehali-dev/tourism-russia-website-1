import React from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  className = '',
  controls = true,
  autoplay = false,
  loop = false,
  muted = false,
}) => {
  return (
    <video
      src={src}
      poster={poster}
      controls={controls}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      className={`w-full h-full object-cover ${className}`}
      playsInline
    >
      <source src={src} type="video/mp4" />
      <source src={src} type="video/webm" />
      Ваш браузер не поддерживает видео.
    </video>
  );
};

export default VideoPlayer;
