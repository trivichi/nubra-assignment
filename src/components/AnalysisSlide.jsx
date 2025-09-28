import React from 'react';
import { CheckCircle, AlertTriangle, Lightbulb, Smartphone, Zap } from 'lucide-react';

const AnalysisSlide = ({ theme }) => {
  const improvements = [
    {
      icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
      title: "Enhanced Strategy Builder",
      current: "Strategy creation can be overwhelming for new users",
      solution: "Add drag-and-drop interface with pre-built strategy templates (Iron Condor, Butterfly, Straddle)"
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      title: "Interactive Backtesting",
      current: "Results presentation could be more intuitive",
      solution: "Real-time P&L graphs, benchmark comparison, and risk metrics visualization"
    },
    {
      icon: <Smartphone className="w-5 h-5 text-green-500" />,
      title: "Mobile Optimization",
      current: "Complex strategies difficult to manage on mobile",
      solution: "Touch-optimized controls with swipeable strategy cards and collapsible sections"
    }
  ];

  const observations = [
    { type: 'positive', text: 'Modern, responsive design with clear navigation' },
    { type: 'positive', text: 'Clean module separation (Watchlist, Options, Analyzer)' },
    { type: 'positive', text: 'Professional dark theme implementation' },
    { type: 'negative', text: 'Limited onboarding guidance for new users' },
    { type: 'negative', text: 'Missing beginner-friendly tooltips and explanations' },
    { type: 'negative', text: 'Could benefit from progressive disclosure of features' }
  ];

  return (
    <div className="max-w-6xl w-full animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          UI/UX Analysis: Options Strategies Module
        </h1>
        <p className="text-xl text-slate-400">
          Deep dive into nubra.io/dashboard/options/strategies with actionable improvement suggestions
        </p>
      </div>

      {/* Current State Observations */}
      <div className="nubra-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-500" />
          Current State Assessment
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-4 text-green-400">Strengths</h3>
            <ul className="space-y-3">
              {observations.filter(obs => obs.type === 'positive').map((obs, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{obs.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-yellow-400">Areas for Improvement</h3>
            <ul className="space-y-3">
              {observations.filter(obs => obs.type === 'negative').map((obs, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{obs.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Improvement Suggestions */}
      <div className="space-y-6">
        {improvements.map((improvement, index) => (
          <div key={index} className="nubra-card p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-slate-700">
                {improvement.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">{improvement.title}</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-red-400 mb-2">Current Issue</h4>
                    <p className="text-slate-400 text-sm">{improvement.current}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-green-400 mb-2">Proposed Solution</h4>
                    <p className="text-slate-300 text-sm">{improvement.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Impact Summary */}
      <div className="nubra-gradient p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3">Expected Impact</h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-500">+40%</div>
            <div className="text-sm text-slate-400">User Engagement</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-500">+25%</div>
            <div className="text-sm text-slate-400">Strategy Creation</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-500">-60%</div>
            <div className="text-sm text-slate-400">Support Queries</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisSlide;