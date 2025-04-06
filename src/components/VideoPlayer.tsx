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

// Function to get custom description for each character
const getCharacterDescription = (character: Character): string => {
  switch (character.id) {
    case '1':
      return `${character.name} is a ferocious crocodile that merged with an aircraft. This iconic bomber patrols the skies with deadly precision, dropping explosive surprises on unsuspecting targets below. Its metallic skin and powerful propellers make it an unstoppable force in both air and water.`;
    case '2':
      return `${character.name} is a shark with style! Sporting the latest blue sneakers, this fashionable predator walks on land as confidently as it swims in the ocean. Fast, trendy, and always ready to race - don't be fooled by the athletic appearance, those teeth are still razor-sharp!`;
    case '3':
      return `${character.name} is a time-traveling desert elephant wearing sandals and surrounded by floating clocks. This philosophical pachyderm manipulates time and space while wandering through surreal landscapes. The cactus companion is just one of many strange phenomena that follow this mystical creature.`;
    case '4':
      return `${character.name} is the ultimate fusion of primate and fruit! This monkey has evolved to wear its banana as both fashion statement and protective shell. With vibrant green fur and striking red features, it's become a jungle celebrity and a symbol of the unexpected harmony between animals and their food.`;
    case '5':
      return `${character.name} is a psychedelic feline with vibrant fur that radiates hypnotic energy. This cosmic cat appears to exist between dimensions, with colors that shift and pulse according to its mood. Those who stare too long into its eyes often report strange visions and an inexplicable craving for tuna.`;
    case '6':
      return `${character.name} is a disturbingly cheerful anthropomorphic sausage that lurks in urban environments. With its unsettling grin and humanoid form, this hotdog horror has become an internet sensation. Despite its creepy appearance, it's actually quite friendly - though people rarely stick around long enough to discover this.`;
    case '7':
      return `${character.name} is a bizarre hybrid of crocodile and pineapple, combining reptilian ferocity with tropical sweetness. This fruit-reptile monstrosity prowls beaches and fruit stands with equal comfort. Its pineapple scales provide natural armor, while its snapping jaws can bite through coconuts and unwary tourists alike.`;
    case '8':
      return `${character.name} is a cosmic bovine entity that has merged with the rings of Saturn. This celestial cow floats above city streets, observing humanity with otherworldly wisdom. Neither fully cow nor planet, this galactic guardian protects the universe's dairy supply and occasionally abducts farmers for mysterious "milk meetings."`;
    default:
      return `${character.name} is a unique character with special energy and distinctive style. Discover the world of videos featuring ${character.name} and immerse yourself in an exciting adventure!`;
  }
};

// Function to get TikTok URL for each character
const getTikTokUrl = (character: Character): string => {
  const baseUrl = "https://www.tiktok.com/discover/";
  
  switch (character.id) {
    case '1':
      return `${baseUrl}crocodilo-bombardiro`;
    case '2':
      return `${baseUrl}tralalelo-tralala`;
    case '3':
      return `${baseUrl}lirili-larila`;
    case '4':
      return `${baseUrl}chimpazini-bananini`;
    case '5':
      return `${baseUrl}trippi-troppi`;
    case '6':
      return `${baseUrl}tuc-tuc-tuc-tuc-sahur`;
    case '7':
      return `${baseUrl}crocodilo-penicillin`;
    case '8':
      return `${baseUrl}la-vaca-saturno-saturnita`;
    default:
      // Default case for any future characters
      return `${baseUrl}${character.name.toLowerCase().replace(/\s+/g, '-')}`;
  }
};

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

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    togglePlay();
  };

  // Get character-specific description and TikTok URL
  const characterDescription = getCharacterDescription(character);
  const tiktokUrl = getTikTokUrl(character);

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
          <div className="relative h-full flex items-center justify-center">
            <div className="w-full h-full relative flex items-center">
              <video 
                ref={videoRef}
                className="w-full h-auto max-h-[80vh] object-cover cursor-pointer"
                playsInline
                onClick={handleVideoClick}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support video playback.
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
          <div className="flex flex-col h-full overflow-y-auto p-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                {character.name}
              </h2>
            </div>
            
            <div className="flex items-center justify-center mb-8">
              <div className="relative overflow-hidden rounded-xl w-3/4 mx-auto">
                <img 
                  src={character.imageSrc} 
                  alt={character.name}
                  className="w-full h-auto rounded-xl shadow-lg border-2 border-purple-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                About character
              </h3>
              <p className="text-white/80 mb-4">
                {characterDescription}
              </p>
            </div>
            
            <div className="mt-auto pt-6 flex justify-center gap-4">
              <a 
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg shadow-purple-500/30 transition-all duration-300 border-2 border-pink-400/30"
                >
                  TikTok
                </Button>
              </a>
              <Button
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 border-2 border-blue-400/30"
                onClick={onClose}
              >
                Continue
              </Button>
            </div>
            
            <div className="mt-4">
              <div className="text-center">
                <p className="text-white/60 text-sm">
                  Click anywhere outside the window to close
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
