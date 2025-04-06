import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import VideoPlayer from '@/components/VideoPlayer';
import CharacterCard, { Character } from '@/components/CharacterCard';
import Header from '@/components/Header';
import characters from '@/data/characters';

const Index = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoKey, setVideoKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleCharacterSelect = (character: Character) => {
    // Если выбираем того же персонажа, который уже выбран, то переключаем видео
    if (selectedCharacter?.id === character.id) {
      if (showVideo) {
        setShowVideo(false);
      } else {
        setIsLoading(true);
        setVideoKey(prev => prev + 1);
        setShowVideo(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    } else {
      // Если выбираем нового персонажа
      setSelectedCharacter(character);
      setIsLoading(true);
      setVideoKey(prev => prev + 1);
      setShowVideo(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  // Auto-select first character on first load
  useEffect(() => {
    if (characters.length > 0 && !selectedCharacter) {
      setSelectedCharacter(characters[0]);
    }
  }, []);

  const getVideoSrc = (characterId: string) => {
    return `/videos/${characterId}.mp4`;
  };

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
      
      <main className="container mx-auto p-4 pt-12 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          {!selectedCharacter 
            ? "Выберите персонажа!"
            : `${selectedCharacter.name}`}
        </h2>
        
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

        {selectedCharacter && showVideo && !isLoading && (
          <div className="mt-8 w-full max-w-lg mx-auto animate-fade-in">
            <VideoPlayer 
              key={videoKey}
              videoSrc={getVideoSrc(selectedCharacter.id)}
              characterName={selectedCharacter.name}
            />
          </div>
        )}
      </main>
      
      <footer className="mt-16 py-8 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/90 -z-10"></div>
        <div className="container mx-auto px-4 text-center text-white/80">
          <p className="text-sm">
            © 2025 Choose your character. Все персонажи и видео принадлежат их законным владельцам.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
