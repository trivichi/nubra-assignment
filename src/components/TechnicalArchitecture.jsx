import React from 'react';

const TechnicalArchitecture = () => {
  const techStack = [
    {
      layer: "Frontend",
      technologies: ["React", "TypeScript", "TailwindCSS", "WebSocket"],
      responsibilities: ["Real-time trading interface", "Strategy builder", "Performance analytics"]
    },
    {
      layer: "Backend",
      technologies: ["Node.js", "Python", "Redis", "PostgreSQL"],
      responsibilities: ["Pattern recognition", "Trade execution", "Data processing"]
    },
    {
      layer: "ML Pipeline",
      technologies: ["TensorFlow", "Scikit-learn", "NumPy", "Pandas"],
      responsibilities: ["Strategy optimization", "Risk assessment", "Pattern identification"]
    }
  ];

  return (
    <div className="slide-animate-in">
      <h2 className="text-2xl font-bold mb-6">Technical Architecture</h2>
      
      <div className="space-y-6">
        {techStack.map((stack, index) => (
          <div key={index} className="feature-card">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">{stack.layer}</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#0f1419] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Responsibilities</h4>
                <ul className="space-y-2 text-gray-300">
                  {stack.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalArchitecture;