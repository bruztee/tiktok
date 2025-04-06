import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import VideoPlayer from '@/components/VideoPlayer';
import CharacterResult from '@/components/CharacterResult';
import CharacterCard, { Character } from '@/components/CharacterCard';
import Header from '@/components/Header';
import characters from '@/data/characters';

// Telegram icon component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="url(#paint0_linear_telegram)" />
    <path d="M17.4399 8.62965C17.2916 8.50703 17.1152 8.42644 16.9282 8.39439C16.7413 8.36234 16.5491 8.37985 16.3722 8.44545C16.3722 8.44545 8.63963 11.4577 7.39146 12.0729C7.22864 12.1592 7.08998 12.2815 6.98781 12.43C6.88564 12.5785 6.82311 12.7486 6.80582 12.9253C6.79553 13.0365 6.81422 13.1485 6.86047 13.2509C6.90672 13.3532 6.97913 13.4428 7.07138 13.5114C7.55442 13.8261 8.16134 14.0254 8.4894 14.1154C8.97909 14.2484 9.90496 14.5491 9.90496 14.5491C9.90496 14.5491 10.2638 15.5993 10.4535 16.1582C10.5151 16.3326 10.6105 16.492 10.7343 16.6272C10.8581 16.7624 11.0076 16.87 11.1737 16.9428C11.2803 16.9926 11.3963 17.018 11.513 17.0174C11.6236 17.0094 11.7308 16.9767 11.8266 16.9218C11.9224 16.8669 12.0043 16.7914 12.0663 16.7007C12.0663 16.7007 12.409 16.2805 12.9434 15.6519C13.7139 16.0361 14.5282 16.4481 15.0134 16.7143C15.1724 16.7963 15.3474 16.8433 15.5257 16.8524C15.704 16.8615 15.8826 16.8326 16.0496 16.7673C16.2166 16.7021 16.3681 16.6022 16.4939 16.4743C16.6197 16.3463 16.7171 16.1933 16.7795 16.0254C16.8418 15.8574 16.8678 15.6783 16.8555 15.5C16.8789 15.1937 17.4399 8.62965 17.4399 8.62965Z" fill="white" />
    <path d="M13.1961 15.4173L11.3289 17.0097L11.3294 14.9345L13.1961 15.4173Z" fill="#D2E4F0" />
    <path d="M11.3289 14.9344L13.9252 12.8375L11.3289 13.9309V14.9344Z" fill="#B5CFE4" />
    <defs>
      <linearGradient id="paint0_linear_telegram" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#37AEE2" />
        <stop offset="1" stopColor="#1E96C8" />
      </linearGradient>
    </defs>
  </svg>
);

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path d="M17.1761 4H20.3037L13.8713 11.3616L21.5 20H15.2416L10.5868 14.6178L5.31634 20H2.18112L9.0304 12.1178L1.73657 4H8.14865L12.3399 8.89589L17.1761 4ZM16.1521 18.28H17.8288L7.14359 5.64H5.34857L16.1521 18.28Z" fill="currentColor" />
  </svg>
);

const Index = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [videoKey, setVideoKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
    setVideoKey(prev => prev + 1);
    setShowVideo(true);
    setShowResult(false);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  const handleContinueToResult = () => {
    setShowVideo(false);
    setShowResult(true);
  };

  const handleCloseResult = () => {
    setShowResult(false);
  };

  const getVideoSrc = (characterId: string) => {
    // Map character IDs to their respective video files
    switch (characterId) {
      case '1':
        return '/videos/bombardiro.mp4';
      case '2':
        return '/videos/tralalelo.mp4';
      case '3':
        return '/videos/lirili.mp4';
      case '4':
        return '/videos/chimpanzini.mp4';
      case '5':
        return '/videos/trippitroppi.mp4';
      case '6':
        return '/videos/tuctuctuc.mp4';
      case '7':
        return '/videos/crocodildo.mp4';
      case '8':
        return '/videos/lavacca.mp4';
      default:
        // For characters without specific videos, use bombardiro as fallback
        return '/videos/bombardiro.mp4';
    }
  };

  // Example Solana contract address
  const contractAddress = "BxDq6VaAixnQni9V4S2jUkAZ7C2HmWQXgwyKLy7rPJtM";

  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900 -z-10"></div>
      
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="absolute inset-0 mix-blend-overlay -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(67,26,107,0.7)_0%,rgba(16,16,36,0.7)_100%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzdGFyc1BhdHRlcm4iIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjgpIiAvPjxjaXJjbGUgY3g9IjI1IiBjeT0iNDUiIHI9IjAuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjQpIiAvPjxjaXJjbGUgY3g9IjY1IiBjeT0iMTUiIHI9IjAuNyIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjYpIiAvPjxjaXJjbGUgY3g9IjEyNSIgY3k9Ijc1IiByPSIxLjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC43KSIgLz48Y2lyY2xlIGN4PSIxNzUiIGN5PSIxNSIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNSkiIC8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0YXJzUGF0dGVybikiIC8+PC9zdmc+')]"></div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none -z-5">
        <div className="absolute top-[30%] left-[10%] w-24 h-24 bg-blue-400/20 rounded-full animate-float" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute top-[40%] right-[15%] w-16 h-16 bg-indigo-400/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-[20%] left-[30%] w-20 h-20 bg-violet-400/20 rounded-full animate-float" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-[40%] right-[25%] w-12 h-12 bg-cyan-400/20 rounded-full animate-float" style={{animationDelay: '2.2s'}}></div>
        <div className="absolute top-[60%] left-[40%] w-32 h-32 bg-purple-400/10 rounded-full animate-float" style={{animationDelay: '1.8s'}}></div>
      </div>
      
      <Header />
      
      <main className="container mx-auto p-4 pt-12 pb-20 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          Choose your TikTok animal
        </h2>
        
        <p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 text-lg font-medium max-w-3xl mx-auto mb-8">
          Select the character that resonates with you the most to reveal insights about your personality!
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          {characters.map(character => (
            <CharacterCard
              key={character.id}
              character={character}
              isSelected={selectedCharacter?.id === character.id}
              onClick={handleCharacterSelect}
            />
          ))}
        </div>

        {selectedCharacter && showVideo && (
          <VideoPlayer 
            key={videoKey}
            videoSrc={getVideoSrc(selectedCharacter.id)}
            character={selectedCharacter}
            onClose={handleCloseVideo}
            onContinue={handleContinueToResult}
          />
        )}

        {selectedCharacter && showResult && (
          <CharacterResult
            character={selectedCharacter}
            onClose={handleCloseResult}
          />
        )}
        
        {/* Solana Contract and Social Media Links Footer */}
        <div className="mt-16 mb-8 w-full">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 max-w-3xl mx-auto transition-all duration-300 hover:bg-black/40 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 font-semibold">CA:</span>
                <div className="flex items-center bg-black/50 rounded-md px-3 py-1.5 border border-blue-500/20 group transition-all duration-300 hover:bg-black/70 hover:border-blue-500/40">
                  <span className="text-sm text-gray-300 font-mono transition-all duration-300 group-hover:text-white">
                    {contractAddress}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://t.me/your_telegram_channel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <TelegramIcon className="w-8 h-8" />
                </a>
                
                <a 
                  href="https://x.com/your_twitter_handle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 transition-transform duration-300 hover:scale-110 hover:text-blue-300"
                >
                  <XIcon className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
