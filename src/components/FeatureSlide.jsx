import React from 'react';
import { Brain, TrendingUp, Shield, Users, Zap, Target, CheckCircle } from 'lucide-react';

const FeatureSlide = () => {
  const phases = [
    {
      title: "Learning Mode",
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      description: "AI tracks manual trading patterns and identifies recurring strategies",
      features: [
        "Pattern recognition after 3-5 similar trades",
        "Entry/exit criteria analysis", 
        "Success rate calculation",
        "Risk assessment"
      ]
    },
    {
      title: "Suggestion Mode", 
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      description: "System suggests automation opportunities based on learned patterns",
      features: [
        "Automated strategy suggestions",
        "Backtesting preview",
        "Performance comparison", 
        "Risk-reward analysis"
      ]
    },
    {
      title: "Guided Automation",
      icon: <Target className="w-6 h-6 text-green-500" />,
      description: "Smooth transition to automated trading with safety measures",
      features: [
        "Paper trading first",
        "Gradual capital allocation",
        "Real-time monitoring",
        "Easy override controls"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Reduces Fear",
      description: "Gradual introduction builds confidence through familiar patterns"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />, 
      title: "Personalized",
      description: "Based on individual trading style and preferences"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Educational", 
      description: "Shows improvement potential through data-driven insights"
    }
  ];

  return (
    <div className="max-w-6xl w-full animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Smart Trading Assistant
        </h1>
        <p className="text-xl text-slate-400">
          AI-powered feature that bridges manual trading and automation through intelligent pattern recognition
        </p>
      </div>

      {/* Feature Overview */}
      <div className="bg-[#1a2332] border-[#2a3441] rounded-2xl border p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform translate-x-3 -translate-y-1/2 z-10"></div>
              )}
              
              <div className="bg-[#0f1419] border-[#2a3441] rounded-xl border p-6 h-full relative z-20">
                <div className="flex items-center gap-3 mb-4">
                  {phase.icon}
                  <h3 className="text-lg font-semibold">{phase.title}</h3>
                </div>
                <p className="text-slate-400 mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-[#1a2332] border-[#2a3441] rounded-xl border p-6 hover:transform hover:scale-105 transition-all duration-300 text-center">
            <div className="flex justify-center mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
            <p className="text-slate-400">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Technical Implementation Preview */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-700 rounded-xl border p-6">
        <h3 className="text-2xl font-semibold mb-4">Technical Architecture</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-blue-400 mb-3">Backend Components</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Pattern Recognition ML Pipeline</li>
              <li>• Real-time Trade Monitoring Service</li>
              <li>• Backtesting Engine Integration</li>
              <li>• Risk Assessment Module</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-green-400 mb-3">User Experience</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Non-intrusive suggestion notifications</li>
              <li>• Interactive pattern visualization</li>
              <li>• One-click automation setup</li>
              <li>• Real-time performance tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSlide;