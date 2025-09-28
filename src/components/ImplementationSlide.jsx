import React from 'react';
import { Calendar, Code, Users, Zap } from 'lucide-react';

const ImplementationSlide = () => {
  const phases = [
    {
      title: "Phase 1: MVP",
      duration: "2-3 months",
      icon: <Zap className="w-6 h-6 text-green-500" />,
      features: [
        "Basic pattern recognition for equity trades",
        "Simple backtesting integration", 
        "Paper trading mode",
        "Core UI/UX components"
      ],
      deliverables: [
        "Pattern detection algorithm",
        "Basic automation workflow",
        "User notification system"
      ]
    },
    {
      title: "Phase 2: Advanced",
      duration: "4-6 months",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      features: [
        "Options strategy recognition",
        "Advanced risk management",
        "Performance analytics dashboard",
        "Multiple asset class support"
      ],
      deliverables: [
        "ML-powered pattern recognition",
        "Advanced backtesting engine",
        "Risk assessment module"
      ]
    },
    {
      title: "Phase 3: Scale",
      duration: "6+ months", 
      icon: <Users className="w-6 h-6 text-purple-500" />,
      features: [
        "Machine learning optimization",
        "Community features",
        "Advanced customization",
        "API integration ecosystem"
      ],
      deliverables: [
        "Community strategy marketplace",
        "Advanced ML models",
        "Third-party integrations"
      ]
    }
  ];

  const techStack = {
    frontend: [
      { name: "React", description: "Component-based UI framework" },
      { name: "TypeScript", description: "Type-safe development" },
      { name: "Tailwind CSS", description: "Utility-first styling" },
      { name: "Chart.js/D3", description: "Data visualization" }
    ],
    backend: [
      { name: "Node.js", description: "JavaScript runtime" },
      { name: "Python", description: "ML and data processing" },
      { name: "PostgreSQL", description: "Primary database" },
      { name: "Redis", description: "Caching and sessions" }
    ],
    ml: [
      { name: "TensorFlow", description: "Pattern recognition models" },
      { name: "scikit-learn", description: "Traditional ML algorithms" },
      { name: "Pandas", description: "Data manipulation" },
      { name: "NumPy", description: "Numerical computing" }
    ],
    infrastructure: [
      { name: "AWS/Docker", description: "Cloud deployment" },
      { name: "Kubernetes", description: "Container orchestration" },
      { name: "GitHub Actions", description: "CI/CD pipeline" },
      { name: "Monitoring", description: "Performance tracking" }
    ]
  };

  return (
    <div className="max-w-6xl w-full animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Implementation Roadmap
        </h1>
        <p className="text-xl text-slate-400">
          Strategic development phases and technical architecture for the Smart Trading Assistant
        </p>
      </div>

      {/* Development Phases */}
      <div className="space-y-6 mb-8">
        {phases.map((phase, index) => (
          <div key={index} className={`${
            'bg-[#1a2332] border-[#2a3441]'
          } rounded-xl border p-6 hover:transform hover:scale-[1.02] transition-all duration-300`}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="p-3 rounded-lg bg-slate-700">
                  {phase.icon}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-semibold">{phase.title}</h3>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{phase.duration}</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {phase.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-400 mb-3">Deliverables</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Stack */}
      <div className={`${
        'bg-[#1a2332] border-[#2a3441]'
      } rounded-2xl border p-6 mb-8`}>
        <h3 className="text-2xl font-semibold mb-6">Technical Architecture</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div key={category} className={`${
              'bg-slate-700'
            } rounded-lg p-4`}>
              <h4 className="font-medium text-lg mb-4 capitalize text-center">{category}</h4>
              <div className="space-y-3">
                {technologies.map((tech, index) => (
                  <div key={index}>
                    <div className="font-medium text-sm text-blue-400">{tech.name}</div>
                    <div className="text-xs text-slate-400">{tech.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Requirements */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className={`${
          'bg-[#1a2332] border-[#2a3441]'
        } rounded-xl border p-6`}>
          <h4 className="text-xl font-semibold mb-4">Team Requirements</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400">Product Manager</span>
              <span className="text-green-400">1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Full-stack Developers</span>
              <span className="text-green-400">2-3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">ML Engineers</span>
              <span className="text-green-400">1-2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">UI/UX Designer</span>
              <span className="text-green-400">1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">QA Engineers</span>
              <span className="text-green-400">1</span>
            </div>
          </div>
        </div>

        <div className={`${
          'bg-[#1a2332] border-[#2a3441]'
        } rounded-xl border p-6`}>
          <h4 className="text-xl font-semibold mb-4">Risk Mitigation</h4>
          <ul className="space-y-2 text-slate-300">
            <li className="text-sm">• Start with paper trading only</li>
            <li className="text-sm">• Implement strict position sizing limits</li>
            <li className="text-sm">• Real-time monitoring and alerts</li>
            <li className="text-sm">• User education and clear disclaimers</li>
            <li className="text-sm">• Gradual feature rollout with A/B testing</li>
          </ul>
        </div>
      </div>

      {/* Success Criteria */}
      <div className={`${
        'bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-700'
      } rounded-xl border p-6`}>
        <h3 className="text-xl font-semibold mb-4">Success Criteria</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">25%</div>
            <div className="text-sm text-slate-400">Manual traders convert to automation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">80%</div>
            <div className="text-sm text-slate-400">Pattern recognition accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">3x</div>
            <div className="text-sm text-slate-400">Increase in user engagement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSlide;