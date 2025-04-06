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
      return `Lirili Larila - the choice of people who can't make up their damn minds. "Ooh, I'm not picking the popular ones, I'm so special!" Get over yourself. You probably stand in line at Starbucks for 10 minutes and then order a plain black coffee. Not brave enough to pick something weird, not basic enough to embrace the mainstream. Just stuck in mediocrity purgatory.`;
    case '4':
      return `Chimpanzini Bananini - seriously? The banana monkey? Congratulations on having the sense of humor of a sleep-deprived 5-year-old. "Look mom, he's wearing fruit as a hat!" You probably laugh at fart jokes and think putting pineapple on pizza is the height of culinary rebellion. Your friends tolerate your jokes the same way they tolerate a persistent cough - by hoping it eventually goes away.`;
    case '5':
      return `Trippi Troppi - ah yes, the "I do drugs" personality. Let me guess, you've got a tapestry on your wall, own at least three items with mushrooms on them, and think having a dream about flying means you're spiritually enlightened. You've definitely cornered someone at a party to explain why crystals have healing properties. The cat isn't even that psychedelic - you're just too easily impressed.`;
    case '6':
      return `Tuctuctuc Sahur - picking the creepy sausage monster, huh? You're the kind of person who thinks being weird is a substitute for having an actual personality. "I'm so random and dark!" No, you're just desperate for attention. You probably wear mismatched socks on purpose and think liking horror movies makes you deep. Even the sausage is embarrassed to be associated with you.`;
    case '7':
      return `Crocodildo Penisini - wow, real mature. You picked the one with the suggestive name because deep down, you're still a 13-year-old giggling at anatomy textbooks. You think you're edgy, but you're about as edgy as a sphere. Your sense of humor hasn't evolved since middle school, and it shows. Even your friends cringe when you start telling jokes - they're just too polite to say anything.`;
    case '8':
      return `La Vacca Saturno Saturnita - the pretentious pseudo-intellectual's choice. You definitely use words like "juxtaposition" and "paradigm" in casual conversation just to sound smart. You've started at least three philosophy books and finished none of them, but still quote them anyway. You think being confused is the same as being profound. It's a cow with planetary rings, not a dissertation on existentialism. Get over yourself.`;
    default:
      return `You couldn't even pick one of the main characters? What are you, too special for our silly little test? You probably order off-menu at restaurants and then complain when it's not exactly what you wanted. Being contrarian isn't a personality trait, it's just annoying. Next time just pick a damn animal like everyone else.`;
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
            <div className="relative w-full max-w-md group transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(79,70,229,0.5)]">
              <img 
                src={character.imageSrc} 
                alt={character.name}
                className="w-full h-auto rounded-xl shadow-2xl border-2 border-purple-500/30 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl transition-opacity duration-300 group-hover:opacity-50"></div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 left-10 w-full h-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-xl blur-xl transform -rotate-6 transition-all duration-500 group-hover:scale-110 group-hover:blur-lg group-hover:from-blue-500/40 group-hover:to-indigo-500/30"></div>
              <div className="absolute -z-10 -bottom-5 -right-5 w-3/4 h-3/4 bg-gradient-to-tr from-blue-500/30 to-indigo-500/20 rounded-xl blur-xl transform rotate-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"></div>
              
              <div className="absolute inset-0 opacity-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 transition-all duration-500 group-hover:from-blue-500/10 group-hover:to-indigo-500/20 rounded-xl"></div>
            </div>
          </div>
          
          {/* Right side - Personality Assessment */}
          <div className="flex flex-col h-full overflow-y-auto p-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 transition-all duration-300 hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300">
                {character.name}
              </h2>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transition-all duration-300 hover:bg-black/40 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 hover:from-blue-300 hover:to-indigo-400">
                What this says about you:
              </h3>
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400 text-lg leading-relaxed mb-4 transition-all duration-300 hover:from-blue-300 hover:via-indigo-200 hover:to-blue-300">
                {assessment}
              </p>
            </div>
            
            <div className="mt-auto pt-6 flex justify-center">
              <Button
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 font-bold py-2 px-8 rounded-full shadow-lg shadow-purple-500/30 transition-all duration-300 border-2 border-indigo-400/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:scale-105"
                onClick={onClose}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                  Back to Characters
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterResult; 