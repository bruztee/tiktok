import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play, Pause, RotateCcw, X } from "lucide-react";
import { Character } from './CharacterCard';

interface VideoPlayerProps {
  videoSrc: string;
  character: Character;
  onClose: () => void;
}

const VideoPlayer = ({ videoSrc, character, onClose }: VideoPlayerProps) => {
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

    // Auto-play video when loaded
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

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-6" onClick={handleBackdropClick}>
      <div className="relative w-full max-w-6xl h-auto max-h-[90vh] bg-gradient-to-b from-gray-900 via-purple-900/80 to-blue-900/80 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border border-purple-500/30 animate-fade-in">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-20 bg-black/30 text-white hover:bg-black/50 hover:text-white rounded-full"
        >
          <X size={20} />
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[90vh] overflow-auto">
          {/* Left side - Video */}
          <div className="relative bg-blue-900/30 h-full flex items-center justify-center">
            <div className="w-full h-full relative flex items-center">
              <video 
                ref={videoRef}
                className="w-full h-auto max-h-[80vh] object-cover"
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
              
              {/* Lighting effect over video */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent mix-blend-overlay"></div>
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/40 to-transparent"></div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">              
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
          </div>
          
          {/* Right side - Character Info */}
          <div className="flex flex-col h-full overflow-y-auto p-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              {character.name}
            </h2>
            
            <div className="mb-6">
              <div className="relative overflow-hidden rounded-xl mb-4 max-w-xs mx-auto md:mx-0">
                <img 
                  src={character.imageSrc} 
                  alt={character.name}
                  className="w-full h-auto rounded-xl shadow-lg border-2 border-purple-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">О персонаже</h3>
              <p className="text-white/80 mb-4">
                {character.name} — уникальный персонаж с особой энергией и неповторимым стилем.
                Откройте для себя мир видео с участием {character.name} и погрузитесь в увлекательное приключение!
              </p>
              
              <div className="flex gap-2 flex-wrap">
                <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">#tiktok</span>
                <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">#viral</span>
                <span className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full text-sm">#{character.name.toLowerCase().replace(/\s+/g, '')}</span>
              </div>
            </div>
            
            <div className="mt-auto pt-4">
              <div className="text-center">
                <p className="text-white/60 text-sm">
                  Нажмите в любом месте за пределами окна, чтобы закрыть
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
