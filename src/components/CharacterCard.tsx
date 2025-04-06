import React, { useState } from 'react';
import { cn } from "@/lib/utils";

export interface Character {
  id: string;
  name: string;
  imageSrc: string;
}

interface CharacterCardProps {
  character: Character;
  isSelected: boolean;
  onClick: (character: Character) => void;
}

const CharacterCard = ({ character, isSelected, onClick }: CharacterCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden transition-all duration-500 transform hover:-translate-y-2 group",
        "rounded-xl cursor-pointer",
        isSelected ? "scale-105 ring-4 ring-purple-500 ring-offset-2 shadow-[0_10px_40px_-15px_rgba(79,70,229,0.9)]" : "shadow-lg hover:shadow-2xl",
      )}
      onClick={() => onClick(character)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <img 
          src={character.imageSrc} 
          alt={character.name}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-in-out",
            isHovering && "scale-110 rotate-1",
            isSelected && "scale-105 brightness-110"
          )}
        />
        
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80",
          "transition-all duration-300",
          isHovering || isSelected ? "opacity-70" : "opacity-90"
        )}></div>
        
        {isSelected && (
          <div className="absolute inset-0 bg-purple-500/10 animate-pulse"></div>
        )}
        
        <div className={cn(
          "absolute bottom-0 w-full p-4 text-white",
          "transform transition-all duration-500",
          isHovering && "translate-y-[-5px]"
        )}>
          <div className="relative overflow-hidden">
            <h3 className={cn(
              "text-xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500",
              "transform transition-all duration-500",
              isHovering && "translate-y-0"
            )}>
              {character.name}
            </h3>
            <div className={cn(
              "h-1 w-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full",
              "transform transition-all duration-700 ease-out",
              (isHovering || isSelected) && "w-full"
            )}></div>
          </div>
        </div>
      </div>
      
      {isSelected && (
        <div className="absolute top-2 right-2 bg-purple-500 text-white rounded-full p-1 shadow-lg z-10 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      )}
      
      <div className={cn(
        "absolute inset-0 opacity-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20",
        "transition-opacity duration-300",
        isHovering && "opacity-100"
      )}></div>
    </div>
  );
};

export default CharacterCard;
