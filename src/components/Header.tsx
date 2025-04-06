import React from 'react';

// Custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path d="M19.589 6.686C19.5202 6.65532 19.453 6.62195 19.388 6.587C18.8659 6.33231 18.4058 5.95823 18.044 5.495C17.3736 4.60576 17.0224 3.52816 17.037 2.427V2.287H13.104V15.503C13.1039 15.942 12.9787 16.3695 12.7444 16.7346C12.5101 17.0998 12.1775 17.3863 11.7898 17.5608C11.4022 17.7353 10.9759 17.7898 10.559 17.718C10.1421 17.6462 9.75282 17.4508 9.43682 17.1588C9.12083 16.8668 8.89421 16.4908 8.78691 16.0797C8.67962 15.6686 8.69552 15.2373 8.8326 14.8364C8.96968 14.4355 9.22292 14.0831 9.56225 13.8245C9.90159 13.5659 10.3107 13.4132 10.735 13.385C11.0323 13.366 11.3294 13.405 11.61 13.5V9.65C11.3255 9.61652 11.0375 9.60534 10.75 9.617C9.73671 9.64367 8.75991 9.97023 7.9332 10.5582C7.10649 11.1462 6.46795 11.9725 6.09662 12.9291C5.72529 13.8857 5.63871 14.9307 5.84998 15.9398C6.06125 16.9489 6.56193 17.877 7.28928 18.6043C8.01663 19.3317 8.94468 19.8323 9.9538 20.0436C10.9629 20.2548 12.0079 20.1683 12.9645 19.797C13.9211 19.4257 14.7474 18.7871 15.3354 17.9604C15.9234 17.1337 16.25 16.1569 16.2766 15.1436C16.283 15.0995 16.287 15.055 16.287 15.01V8.802C17.9508 9.9223 19.902 10.5703 21.896 10.679V6.8C21.1498 6.80315 20.4138 6.65404 19.731 6.363L19.589 6.686Z" fill="url(#paint0_linear_tiktok)" />
    <defs>
      <linearGradient id="paint0_linear_tiktok" x1="5.83754" y1="2.287" x2="21.896" y2="2.287" gradientUnits="userSpaceOnUse">
        <stop stopColor="#08FFF9" />
        <stop offset="1" stopColor="#4579FF" />
      </linearGradient>
    </defs>
  </svg>
);

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
              <div className="flex items-center gap-3">
                <TikTokIcon className="w-10 h-10 md:w-12 md:h-12 animate-float" />
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter pb-2 drop-shadow-[0_2px_20px_rgba(138,43,226,0.5)] relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                  Who Am I TikTok
                </h1>
              </div>
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
