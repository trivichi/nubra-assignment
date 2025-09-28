import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Header = ({ currentSlide, totalSlides, slideTitle, setCurrentSlide }) => {
  const slideNames = [
    'Introduction',
    'UI/UX Analysis', 
    'Competitor Analysis',
    'Smart Trading Assistant',
    'Wireframes',
    'Implementation',
    'Success Metrics',
    'About Chirayu'
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0f1419] border-b border-[#2a3441]">
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img 
                src="https://pbs.twimg.com/profile_images/1879770823848017920/ET56LXBP_400x400.jpg" 
                alt="Nubra Logo" 
                className="h-8 w-auto"
              />
              <span className="font-semibold text-lg">Nubra</span>
            </div>

            {/* Main Nav Buttons */}
            <nav className="flex items-center gap-4">
              <button
                onClick={() => setCurrentSlide(0)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSlide === 0 ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-[#2a3441]'
                }`}
              >
                Presentation
              </button>
              <button
                onClick={() => setCurrentSlide(7)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSlide === 7 ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-[#2a3441]'
                }`}
              >
                About Me
              </button>
            </nav>
          </div>

          {/* Slide Nav */}
          <div className="flex items-center gap-4">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                currentSlide === 0
                  ? 'opacity-50 cursor-not-allowed text-gray-500'
                  : 'text-gray-300 hover:text-white hover:bg-[#2a3441]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            {/* Slide Indicators */}
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-400 mr-4">
                {currentSlide + 1} / {totalSlides}
              </div>
              {slideNames.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-blue-500 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  title={slideNames[index]}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentSlide(Math.min(totalSlides - 1, currentSlide + 1))}
              disabled={currentSlide === totalSlides - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                currentSlide === totalSlides - 1
                  ? 'opacity-50 cursor-not-allowed text-gray-500'
                  : 'text-gray-300 hover:text-white hover:bg-[#2a3441]'
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slide Title */}
          <div className="text-sm text-gray-400 min-w-[200px] text-right">
            {slideTitle}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;