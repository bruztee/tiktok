import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Character } from './CharacterCard';

interface CharacterResultProps {
  character: Character;
  onClose: () => void;
}

// Function to get personality assessment for each character
const getPersonalityAssessment = (character: Character): string => {
  switch (character.id) {
    case '1':
      return `Bombardiro Crocodilo - a choice of conformists and ordinary normies. "Haha, he defeats everyone because he can fly and drop bombs" - very funny, right? In reality - not a drop of originality. Better find yourself a more interesting hobby and don't spoil the fandom with your presence.`;
    case '2':
      return `Tralalelo Tralala - a choice of punks and those who know their worth. Yes, his lines are sometimes controversial, but they exude a genuine rebellious spirit. If you respect yourself, the choice between Tralalelo and Bombardiro is obvious - and it's not in favor of the latter.`;
    case '3':
      return `Lirili Larila - our dark horse and hidden favorite. Will still show what they're made of, we're sure of it. Currently remains in the shadow of the first two, but all in good time. We advise keeping an eye on this one - there's something special here, too early to underestimate.`;
    case '4':
      return `Chimpanzini Bananini - chosen by creative souls and free thinkers. While others chase the obvious, you appreciate the absurd fusion of primate and fruit. Your sense of humor operates on multiple levels, and conventional boundaries mean nothing to you. The banana hat represents your ability to transform the ordinary into extraordinary.`;
    case '5':
      return `Trippi Troppi - the favorite of psychonauts, dreamers, and modern artists. You're drawn to vibrant experiences and frequently question reality. Conventional thinking bores you, and you're always searching for new perspectives. People might call you weird, but that's just because they haven't expanded their minds like you have.`;
    case '6':
      return `Tuctuctuc Sahur - preferred by those with a twisted sense of humor and an appreciation for the uncanny. You delight in making others uncomfortable and find beauty in the bizarre. Your friends never know what to expect from you, and that's exactly how you like it. Your ability to embrace the unsettling speaks to your fearless approach to life.`;
    case '7':
      return `Crocodildo Penisini - selected by provocateurs and those who reject social norms. You love pushing boundaries and challenging taboos just to see reactions. Conventional wisdom means nothing to you, and you take pleasure in subverting expectations. Your friends both admire and fear your unpredictable nature and unwillingness to conform.`;
    case '8':
      return `La Vacca Saturno Saturnita - chosen by philosophers and cosmic thinkers. You see connections others miss and often contemplate your place in the universe. While grounded in everyday reality, part of you always floats in higher realms of thought. Friends value your unique perspective but sometimes wish you'd stop talking about the mysteries of existence at casual gatherings.`;
    default:
      return `This character reveals your unique personality that defies conventional categorization. Your choices tend to surprise others, and you follow your own internal compass rather than external expectations. Whether this makes you visionary or just stubborn is for history to decide.`;
  }
};

const CharacterResult = ({ character, onClose }: CharacterResultProps) => {
  // Get personality assessment
  const assessment = getPersonalityAssessment(character);

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
          {/* Left side - Character Image */}
          <div className="relative h-full flex items-center justify-center p-6">
            <div className="relative w-full max-w-md">
              <img 
                src={character.imageSrc} 
                alt={character.name}
                className="w-full h-auto rounded-xl shadow-2xl border-2 border-purple-500/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 left-10 w-full h-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-xl blur-xl transform -rotate-6"></div>
              <div className="absolute -z-10 -bottom-5 -right-5 w-3/4 h-3/4 bg-gradient-to-tr from-blue-500/30 to-indigo-500/20 rounded-xl blur-xl transform rotate-12"></div>
            </div>
          </div>
          
          {/* Right side - Personality Assessment */}
          <div className="flex flex-col h-full overflow-y-auto p-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                You chose {character.name}
              </h2>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                What this says about you:
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                {assessment}
              </p>
            </div>
            
            <div className="mt-auto pt-6 flex justify-center">
              <Button
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-2 px-8 rounded-full shadow-lg shadow-purple-500/30 transition-all duration-300 border-2 border-indigo-400/30"
                onClick={onClose}
              >
                Back to Characters
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterResult; 