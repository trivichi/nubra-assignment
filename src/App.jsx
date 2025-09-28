import React, { useState } from 'react';
import Header from './components/Header.jsx';
import IntroSlide from './components/IntroSlide.jsx';
import AboutSlide from './components/AboutSlide.jsx';
import AnalysisSlide from './components/AnalysisSlide.jsx';
import CompetitorSlide from './components/CompetitorSlide.jsx';
import FeatureSlide from './components/FeatureSlide.jsx';
import WireframeSlide from './components/WireFrameSlide.jsx';
import ImplementationSlide from './components/ImplementationSlide.jsx';
import MetricsSlide from './components/MetricsSlide.jsx';
import Navigation from './components/Navigation.jsx';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { component: IntroSlide, title: 'Introduction' },
    { component: AnalysisSlide, title: 'UI/UX Analysis' },
    { component: CompetitorSlide, title: 'Competitor Analysis' },
    { component: FeatureSlide, title: 'Smart Trading Assistant' },
    { component: WireframeSlide, title: 'Wireframes' },
    { component: ImplementationSlide, title: 'Implementation' },
    { component: MetricsSlide, title: 'Success Metrics' },
    { component: AboutSlide, title: 'About Chirayu' }
  ];

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-[#0f1419] text-white">
      <Header 
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        totalSlides={slides.length}
        slideTitle={slides[currentSlide].title}
      />
      <main className="flex-1 p-6 flex justify-center items-center min-h-[calc(100vh-140px)]">
        <CurrentSlideComponent />
      </main>
      <Navigation 
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        totalSlides={slides.length}
      />
    </div>
  );
};

export default App;