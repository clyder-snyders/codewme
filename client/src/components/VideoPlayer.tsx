import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

/**
 * Design: Warm Editorial + Kinetic Editorial Animations
 * - Custom video player with smooth controls
 * - Animated play/pause button
 * - Progress bar with hover effects
 * - Responsive design for all screen sizes
 */

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  description?: string;
}

export default function VideoPlayer({ src, poster, title, description }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Play failed:", error);
        }
      }
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = percent * videoRef.current.duration;
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const formatTime = (time: number) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* Video Container */}
        <div
          className="relative w-full bg-black rounded-2xl overflow-hidden group"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Video */}
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="w-full h-auto block"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
          />

          {/* Play Button Overlay */}
          {!isPlaying && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={handlePlayPause}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="flex items-center justify-center w-20 h-20 rounded-full bg-brand text-white shadow-2xl"
              >
                <Play className="h-8 w-8 ml-1" fill="currentColor" />
              </motion.div>
            </motion.button>
          )}

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showControls ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 space-y-3"
          >
            {/* Progress Bar */}
            <div
              onClick={handleProgressClick}
              className="w-full h-1 bg-white/20 rounded-full cursor-pointer group/progress hover:h-2 transition-all"
            >
              <motion.div
                className="h-full bg-brand rounded-full"
                style={{ width: `${progress}%` }}
                layoutId="progress"
              >
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-brand rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100"
                  layoutId="thumb"
                />
              </motion.div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                {/* Play/Pause */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlayPause}
                  className="hover:text-brand transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" fill="currentColor" />
                  ) : (
                    <Play className="h-5 w-5" fill="currentColor" />
                  )}
                </motion.button>

                {/* Mute */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleMute}
                  className="hover:text-brand transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </motion.button>

                {/* Time */}
                <span className="text-xs font-mono">
                  {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                </span>
              </div>

              {/* Fullscreen */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFullscreen}
                className="hover:text-brand transition-colors"
              >
                <Maximize2 className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Video Info */}
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            {title && <h3 className="text-display text-2xl font-bold text-ink">{title}</h3>}
            {description && <p className="text-ink-soft text-lg leading-relaxed">{description}</p>}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
