import React from 'react';
import { Star, TrendingUp, AlertCircle, Target } from 'lucide-react';

const CompetitorSlide = () => {
  const competitors = [
    {
      name: "Zerodha Streak",
      rating: 5,
      easeOfUse: 5,
      backtest: 3,
      automation: 4,
      pricing: "₹299/month",
      strength: "Excellent UI, beginner-friendly",
      weakness: "Limited advanced features",
      color: "green"
    },
    {
      name: "Tradetron",
      rating: 3,
      easeOfUse: 3,
      backtest: 5,
      automation: 5,
      pricing: "₹999-2499/month",
      strength: "Strategy marketplace",
      weakness: "Complex for beginners",
      color: "blue"
    },
    {
      name: "AlgoTest",
      rating: 4,
      easeOfUse: 4,
      backtest: 5,
      automation: 2,
      pricing: "₹499/month",
      strength: "Best-in-class options testing",
      weakness: "No full automation",
      color: "purple"
    },
    {
      name: "Upstox Pro",
      rating: 3,
      easeOfUse: 3,
      backtest: 2,
      automation: 3,
      pricing: "₹300/month + API",
      strength: "Strong API ecosystem",
      weakness: "Requires coding knowledge",
      color: "orange"
    },
    {
      name: "TradingView",
      rating: 4,
      easeOfUse: 4,
      backtest: 4,
      automation: 1,
      pricing: "$14.95-59.95/month",
      strength: "Excellent charting",
      weakness: "No direct Indian execution",
      color: "pink"
    }
  ];

  const insights = [
    {
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      title: "Market Gap Identified",
      description: "Most platforms cater to either complete beginners or advanced algo traders"
    },
    {
      icon: <Target className="w-5 h-5 text-blue-500" />,
      title: "Nubra's Opportunity",
      description: "Bridge the gap between manual trading and full automation"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
      title: "Market Need",
      description: "Simplified transition path from manual to automated trading"
    }
  ];

  const StarRating = ({ rating, color }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            className={`w-4 h-4 ${
              star <= rating 
                ? `text-${color}-500 fill-current` 
                : 'text-slate-600'
            }`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl w-full animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Competitor Analysis
        </h1>
        <p className="text-xl text-slate-400">
          Comprehensive analysis of backtesting and algo-trading platforms in the Indian market
        </p>
      </div>

      {/* Competitor Comparison Table */}
      <div className='bg-[#1a2332] border border-[#2a3441] rounded-2xl p-6 mb-8 overflow-x-auto'>
        <div className="min-w-[800px]">
          <div className="grid grid-cols-7 gap-4 mb-4 pb-4 border-b border-slate-600 text-sm font-medium text-slate-400">
            <div>Platform</div>
            <div>Ease of Use</div>
            <div>Backtesting</div>
            <div>Automation</div>
            <div>Pricing</div>
            <div>Strength</div>
            <div>Weakness</div>
          </div>
          
          {competitors.map((competitor, index) => (
            <div key={index} className="grid grid-cols-7 gap-4 py-4 border-b border-slate-700 last:border-b-0 hover:bg-slate-700/30 rounded-lg transition-colors">
              <div className="font-medium text-white">{competitor.name}</div>
              <div><StarRating rating={competitor.easeOfUse} color={competitor.color} /></div>
              <div><StarRating rating={competitor.backtest} color={competitor.color} /></div>
              <div><StarRating rating={competitor.automation} color={competitor.color} /></div>
              <div className="text-sm text-slate-300">{competitor.pricing}</div>
              <div className="text-sm text-green-400">{competitor.strength}</div>
              <div className="text-sm text-red-400">{competitor.weakness}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Insights */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {insights.map((insight, index) => (
          <div key={index} className={`${
            'bg-[#1a2332] border-[#2a3441]'
          } rounded-xl border p-6 hover:transform hover:scale-105 transition-all duration-300`}>
            <div className="flex items-center gap-3 mb-4">
              {insight.icon}
              <h3 className="text-lg font-semibold">{insight.title}</h3>
            </div>
            <p className="text-slate-400">{insight.description}</p>
          </div>
        ))}
      </div>

      {/* Nubra's Positioning */}
      <div className='bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-700 rounded-xl border p-6'>
        <h3 className="text-2xl font-semibold mb-4">Nubra's Competitive Advantage</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-green-400 mb-2">Unique Value Proposition</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Gradual transition from manual to automated trading</li>
              <li>• Personalized learning from user's trading patterns</li>
              <li>• Built-in risk management and educational components</li>
              <li>• Lower barrier to entry than advanced platforms</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-blue-400 mb-2">Market Opportunity</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Target segment: 60% of retail traders</li>
              <li>• Underserved by existing solutions</li>
              <li>• High willingness to pay for the right solution</li>
              <li>• Strong potential for user retention</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitorSlide;