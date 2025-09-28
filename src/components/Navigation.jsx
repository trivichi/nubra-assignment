import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Navigation = ({ currentSlide, setCurrentSlide, totalSlides }) => {
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="bg-[#1a2332] border-t border-[#2a3441] px-6 py-4 flex justify-between items-center">
      
      {/* Previous Button */}
      <button
        onClick={prevSlide}
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
            className={`w-3 h-3 rounded-full transition-all ${
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
        onClick={nextSlide}
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

      {/* Navigation Links */}
      <nav className="flex items-center gap-6">
        <a href="#" className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          currentSlide === 0 ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-[#2a3441]'
        }`}>
          Presentation
        </a>
        <button
          onClick={() => setCurrentSlide(7)} // This ensures the About slide is shown
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            currentSlide === 1 ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-[#2a3441]'
          }`}
        >
          About Me
        </button>
        {/* ...rest of navigation items... */}
      </nav>
    </div>
  );
};

export default Navigation;