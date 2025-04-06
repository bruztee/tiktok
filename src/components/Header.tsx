import React from 'react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 py-10 px-6 shadow-xl overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="absolute inset-0 mix-blend-overlay">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(67,26,107,0.7)_0%,rgba(16,16,36,0.7)_100%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzdGFyc1BhdHRlcm4iIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjgpIiAvPjxjaXJjbGUgY3g9IjI1IiBjeT0iNDUiIHI9IjAuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjQpIiAvPjxjaXJjbGUgY3g9IjY1IiBjeT0iMTUiIHI9IjAuNyIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjYpIiAvPjxjaXJjbGUgY3g9IjEyNSIgY3k9Ijc1IiByPSIxLjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC43KSIgLz48Y2lyY2xlIGN4PSIxNzUiIGN5PSIxNSIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNSkiIC8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0YXJzUGF0dGVybikiIC8+PC9zdmc+')]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center relative">
            <div className="relative inline-block animate-pulse">
              <div className="absolute -inset-6 bg-indigo-600 blur-md opacity-50 animate-ping rounded-full"></div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter pb-2 drop-shadow-[0_2px_20px_rgba(138,43,226,0.5)] relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                Who Am I TikTok
              </h1>
            </div>
          </div>
          
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-700/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-700/20 rounded-full blur-2xl"></div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[10%] w-12 h-12 bg-blue-400/30 rounded-full animate-float" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute top-20 right-[15%] w-8 h-8 bg-indigo-400/30 rounded-full animate-float" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute bottom-10 left-[30%] w-10 h-10 bg-violet-400/30 rounded-full animate-float" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-15 right-[25%] w-6 h-6 bg-cyan-400/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
    </header>
  );
};

export default Header;
