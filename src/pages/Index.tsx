
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white">
      <Header />
      
      <main className="container mx-auto p-4 pt-12">
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
      
      <footer className="mt-16 py-8 bg-gradient-to-r from-indigo-900/90 to-blue-900/90">
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
