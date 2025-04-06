import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Character } from './CharacterCard';

interface CharacterAnalysisProps {
  character: Character;
  onClose: () => void;
}

// Function to get analysis text for each character choice
const getCharacterAnalysis = (character: Character): string => {
  switch (character.id) {
    case '1':
      return "Bombardiro Crocodilo - The choice of conformists and ordinary normies. \"Haha, he defeats everyone because he can fly and drop bombs\" - well, yeah, very funny. In reality - not a drop of originality. Better find yourself a more interesting hobby and don't spoil the fandom with your presence.";
    case '2':
      return "Tralalelo Tralala - The choice of punks and those who know their worth. Yes, his lines are sometimes controversial, but they have a real rebellious spirit. If you respect yourself, the choice between Tralalelo and Bombardiro is obvious - and it's not in favor of the latter.";
    case '3':
      return "Lirili Larila - Our dark horse and hidden favorite. Will still show himself, we are sure of that. For now remains in the shadow of the first two, but everything in its time. We advise keeping an eye on him - there's something there, it's too early to underestimate.";
    case '4':
      return "Chimpanzini Bananiini - The choice of creative eccentrics who refuse to follow conventional paths. Your selection reveals a playful spirit that embraces absurdity while maintaining a deep philosophical outlook. You likely have a unique fashion sense and enjoy surprising others with unexpected insights and humor.";
    case '5':
      return "Trippi Troppi - You've chosen the psychedelic visionary, indicating your attraction to altered states of consciousness and boundary-pushing experiences. People like you tend to be the most interesting at parties, always with a story that begins with 'You won't believe what happened...' Your imagination is your greatest asset and most dangerous liability.";
    case '6':
      return "Tuc Tuc Tuc - Selecting this unsettling sausage creature suggests you have a darkly ironic sense of humor and enjoy making others slightly uncomfortable. You're drawn to the uncanny and find beauty in the bizarre. While some might not 'get' your taste, those who do become lifelong allies in your quest for the perfectly inappropriate joke.";
    case '7':
      return "Crocodildo Penisini - Those who choose this hybrid monstrosity are practical dreamers - people who balance wild imagination with surprising functionality. You approach problems from unexpected angles and often create solutions that others overlook. Your ability to combine seemingly incompatible elements makes you an invaluable teammate and a confusing competitor.";
    case '8':
      return "La Vacca Saturno Saturnita - The cosmic cow enthusiasts represent the true intellectual elite of the fandom. Your selection demonstrates sophisticated taste and an appreciation for surrealist metaphysics. You likely have an extensive collection of obscure media and enjoy explaining complex theories to confused friends who secretly wish they understood your wavelength.";
    default:
      return "Your character choice reveals an enigmatic personality that defies easy categorization. Perhaps you're still discovering your true preferences, or perhaps you're several steps ahead of everyone else. Either way, your journey through this fandom will be uniquely your own.";
  }
};

const CharacterAnalysis = ({ character, onClose }: CharacterAnalysisProps) => {
  const analysisText = getCharacterAnalysis(character);
  const [animationClass, setAnimationClass] = React.useState('opacity-0 scale-95');

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => {
      setAnimationClass('opacity-100 scale-100');
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-6" onClick={handleBackdropClick}>
      <div className={cn(
        "relative w-full max-w-6xl h-auto max-h-[90vh] bg-gradient-to-b from-gray-900 via-purple-900/80 to-blue-900/80 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border border-purple-500/30",
        "transition-all duration-700 ease-out transform",
        animationClass
      )}>
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-20 bg-black/30 text-white hover:bg-black/50 hover:text-white rounded-full"
        >
          <X size={20} />
        </Button>
        
        {/* Animated cosmic effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[90vh] overflow-auto">
          {/* Left side - Character Image */}
          <div className="relative h-full flex items-center justify-center p-6">
            <div className={cn(
              "relative overflow-hidden rounded-xl w-full h-full flex items-center justify-center",
              "transition-all duration-1000 ease-out transform",
              animationClass
            )}>
              <img 
                src={character.imageSrc} 
                alt={character.name}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-lg border-2 border-purple-500/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-[-5%] right-[-5%] w-32 h-32 bg-indigo-600/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-[-5%] left-[-5%] w-32 h-32 bg-purple-600/20 rounded-full blur-xl"></div>
            </div>
          </div>
          
          {/* Right side - Analysis */}
          <div className="flex flex-col h-full overflow-y-auto p-6">
            <div className={cn(
              "text-center mb-8 transition-all duration-1000 delay-300 transform",
              animationClass === 'opacity-0 scale-95' ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'
            )}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                You chose {character.name}
              </h2>
            </div>
            
            <div className={cn(
              "bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 flex-1",
              "transition-all duration-1000 delay-500 transform",
              animationClass === 'opacity-0 scale-95' ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'
            )}>
              <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                What this says about you
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                {analysisText}
              </p>
            </div>
            
            <div className={cn(
              "mt-6 flex justify-center",
              "transition-all duration-1000 delay-700 transform",
              animationClass === 'opacity-0 scale-95' ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'
            )}>
              <Button
                onClick={onClose}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 border-2 border-blue-400/30"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterAnalysis; 