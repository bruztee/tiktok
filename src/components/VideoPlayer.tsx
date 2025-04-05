
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play, Pause, RotateCcw } from "lucide-react";

interface VideoPlayerProps {
  videoSrc: string;
  characterName: string;
}

const VideoPlayer = ({ videoSrc, characterName }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const updateProgress = () => {
      if (videoElement.duration) {
        setProgress((videoElement.currentTime / videoElement.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    videoElement.addEventListener('timeupdate', updateProgress);
    videoElement.addEventListener('ended', handleEnded);

    // Автоматически запускаем видео при загрузке
    try {
      videoElement.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Autoplay prevented:', error);
        setIsPlaying(false);
      });
    } catch (error) {
      console.log('Autoplay error:', error);
    }

    return () => {
      videoElement.removeEventListener('timeupdate', updateProgress);
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      try {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log('Autoplay prevented on source change:', error);
        });
      } catch (error) {
        console.log('Autoplay error on source change:', error);
      }
      setProgress(0);
    }
  }, [videoSrc]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full mx-auto rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transform transition-all hover:scale-[1.02]">
      <div className="relative bg-black">
        <video 
          ref={videoRef}
          className="w-full"
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
          <h3 className="text-white font-bold text-xl mb-3 drop-shadow-md">{characterName}</h3>
          
          <div className="flex items-center gap-2">
            <Button
              onClick={togglePlay}
              variant="outline"
              size="icon"
              className="bg-purple-500/20 hover:bg-purple-500/40 text-white border-white/20 backdrop-blur-sm rounded-full"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Button>
            
            <Button
              onClick={restartVideo}
              variant="outline"
              size="icon"
              className="bg-purple-500/20 hover:bg-purple-500/40 text-white border-white/20 backdrop-blur-sm rounded-full"
            >
              <RotateCcw size={20} />
            </Button>
            
            <div className="relative flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
        
        {/* Световой эффект поверх видео */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent mix-blend-overlay"></div>
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/40 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
