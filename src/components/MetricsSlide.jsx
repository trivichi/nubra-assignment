import React from 'react';
import { TrendingUp, Users, Target, DollarSign, Clock, Shield } from 'lucide-react';

const MetricsSlide = () => {
  const kpis = [
    {
      category: "User Adoption",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      metrics: [
        { name: "Manual Trader Conversion Rate", target: "25%", current: "0%", description: "% of manual traders who try automation" },
        { name: "Feature Adoption Rate", target: "60%", current: "0%", description: "% of users who enable Smart Assistant" },
        { name: "Retention Rate (30-day)", target: "80%", current: "0%", description: "Users active after automation adoption" }
      ]
    },
    {
      category: "Product Performance", 
      icon: <Target className="w-8 h-8 text-green-500" />,
      metrics: [
        { name: "Pattern Recognition Accuracy", target: "85%", current: "0%", description: "Accuracy of identified trading patterns" },
        { name: "Automation Success Rate", target: "75%", current: "0%", description: "% of automated trades that meet expectations" },
        { name: "User Satisfaction Score", target: "4.5/5", current: "0", description: "Average user rating for the feature" }
      ]
    },
    {
      category: "Business Impact",
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      metrics: [
        { name: "Revenue Per User Growth", target: "+40%", current: "0%", description: "Increase in ARPU from automation users" },
        { name: "Platform Engagement", target: "+3x", current: "0x", description: "Daily active time increase" },
        { name: "Customer Acquisition Cost", target: "-30%", current: "0%", description: "Reduction due to word-of-mouth" }
      ]
    }
  ];

  const milestones = [
    { month: "Month 1", goal: "MVP Release", kpi: "100 beta users", status: "upcoming" },
    { month: "Month 3", goal: "Pattern Recognition", kpi: "75% accuracy", status: "upcoming" },
    { month: "Month 6", goal: "User Adoption", kpi: "1000+ active automations", status: "upcoming" },
    { month: "Month 9", goal: "Advanced Features", kpi: "Options strategy support", status: "upcoming" },
    { month: "Month 12", goal: "Scale Achievement", kpi: "10% of user base automated", status: "upcoming" }
  ];

  const riskMetrics = [
    {
      risk: "Low Adoption",
      probability: "Medium",
      impact: "High", 
      mitigation: "Enhanced onboarding, user education, gamification",
      indicator: "Weekly signups < 100"
    },
    {
      risk: "Technical Failures",
      probability: "Low",
      impact: "High",
      mitigation: "Extensive testing, gradual rollout, monitoring",
      indicator: "System uptime < 99.5%"
    },
    {
      risk: "Regulatory Issues",
      probability: "Medium",
      impact: "Medium",
      mitigation: "Legal review, compliance checks, clear disclaimers",
      indicator: "User complaints > 5%"
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'text-green-500 bg-green-500/20';
      case 'in-progress': return 'text-yellow-500 bg-yellow-500/20';
      case 'upcoming': return 'text-slate-500 bg-slate-500/20';
      default: return 'text-slate-500 bg-slate-500/20';
    }
  };

  return (
    <div className="max-w-6xl w-full animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Success Metrics & KPIs
        </h1>
        <p className="text-xl text-slate-400">
          Comprehensive measurement framework for the Smart Trading Assistant feature
        </p>
      </div>

      {/* Key Performance Indicators */}
      <div className="space-y-8 mb-8">
        {kpis.map((category, index) => (
          <div key={index} className={`${
            'bg-[#1a2332] border-[#2a3441]'
          } rounded-xl border p-6`}>
            <div className="flex items-center gap-3 mb-6">
              {category.icon}
              <h3 className="text-2xl font-semibold">{category.category}</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {category.metrics.map((metric, idx) => (
                <div key={idx} className={`${
                  'bg-[#0f1419] border-[#2a3441]'
                } rounded-lg p-4`}>
                  <div className="text-lg font-semibold mb-2">{metric.name}</div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-2xl font-bold text-green-500">{metric.target}</div>
                    <div className="text-sm text-slate-400">Target</div>
                  </div>
                  <div className="text-sm text-slate-400">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline & Milestones */}
      <div className={`${
        'bg-[#1a2332] border-[#2a3441]'
      } rounded-xl border p-6 mb-8`}>
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-6 h-6 text-blue-500" />
          <h3 className="text-2xl font-semibold">Milestone Timeline</h3>
        </div>
        
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-slate-700/30">
              <div className={`px-3 py-1 rounded-full text-sm ${getStatusColor(milestone.status)}`}>
                {milestone.month}
              </div>
              <div className="flex-1">
                <div className="font-medium">{milestone.goal}</div>
                <div className="text-sm text-slate-400">{milestone.kpi}</div>
              </div>
              <div className={`w-3 h-3 rounded-full ${
                milestone.status === 'completed' ? 'bg-green-500' :
                milestone.status === 'in-progress' ? 'bg-yellow-500' : 'bg-slate-500'
              }`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Assessment */}
      <div className={`${
        'bg-[#1a2332] border-[#2a3441]'
      } rounded-xl border p-6 mb-8`}>
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-red-500" />
          <h3 className="text-2xl font-semibold">Risk Assessment Matrix</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="text-left py-3 px-2 font-medium text-slate-400">Risk</th>
                <th className="text-left py-3 px-2 font-medium text-slate-400">Probability</th>
                <th className="text-left py-3 px-2 font-medium text-slate-400">Impact</th>
                <th className="text-left py-3 px-2 font-medium text-slate-400">Mitigation</th>
                <th className="text-left py-3 px-2 font-medium text-slate-400">Early Indicator</th>
              </tr>
            </thead>
            <tbody>
              {riskMetrics.map((risk, index) => (
                <tr key={index} className="border-b border-slate-700">
                  <td className="py-3 px-2 font-medium">{risk.risk}</td>
                  <td className="py-3 px-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      risk.probability === 'High' ? 'bg-red-500/20 text-red-400' :
                      risk.probability === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {risk.probability}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      risk.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                      risk.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {risk.impact}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-sm text-slate-300">{risk.mitigation}</td>
                  <td className="py-3 px-2 text-sm text-slate-400">{risk.indicator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Success Dashboard Preview */}
      <div className={`${
        'bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-700'
      } rounded-xl border p-6`}>
        <h3 className="text-xl font-semibold mb-4">Success Dashboard (Year 1 Projection)</h3>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-green-500 mb-2">2,500</div>
            <div className="text-sm text-slate-400">Active Automations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-500 mb-2">85%</div>
            <div className="text-sm text-slate-400">User Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-500 mb-2">₹2.5Cr</div>
            <div className="text-sm text-slate-400">Additional Revenue</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-500 mb-2">40%</div>
            <div className="text-sm text-slate-400">ARPU Increase</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsSlide;