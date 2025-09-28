import React from 'react';
import { TrendingUp, Users, Zap } from 'lucide-react';

const IntroSlide = () => {
  return (
    <div className="max-w-6xl w-full animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Product Intern Assignment
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-400">
          Smart Trading Assistant
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Bridging the gap between manual trading and algorithmic automation through intelligent pattern recognition and personalized transition pathways.
        </p>
      </div>

      {/* Key Insights Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1a2332] border border-[#2a3441] rounded-lg p-6 hover:border-blue-500 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Market Gap</h3>
          </div>
          <p className="text-gray-400 text-sm">
            No platform effectively bridges manual and algorithmic trading with personalized transition paths.
          </p>
        </div>

        <div className="bg-[#1a2332] border border-[#2a3441] rounded-lg p-6 hover:border-blue-500 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">User Pain Point</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Traders want automation but fear losing control and don't know where to start safely.
          </p>
        </div>

        <div className="bg-[#1a2332] border border-[#2a3441] rounded-lg p-6 hover:border-blue-500 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Solution</h3>
          </div>
          <p className="text-gray-400 text-sm">
            AI-powered pattern recognition that learns from user behavior and suggests gradual automation.
          </p>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">Why This Matters for Nubra</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">+40%</div>
            <div className="text-sm text-gray-400">User Engagement Increase</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
            <div className="text-sm text-gray-400">Target Market Underserved</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
            <div className="text-sm text-gray-400">Expected Conversion Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;
