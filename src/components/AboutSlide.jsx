import React from 'react';
import { Mail, Github, Linkedin, Phone, GraduationCap, Code, Trophy, Camera, Star } from 'lucide-react';

const AboutSlide = () => {
  const skills = [
    { category: "Programming", items: ["C/C++", "Java", "Python", "JavaScript", "HTML/CSS", "SQL", "R"], color: "blue" },
    { category: "Frameworks", items: ["React", "Three.js", "Framer Motion", "Tailwind CSS"], color: "green" },
    { category: "Soft Skills", items: ["Adaptability", "Critical Thinking", "Attention to Detail", "Team Collaboration"], color: "purple" }
  ];

  const projects = [
    {
      title: "Foundry - Lost & Found Platform",
      tech: "JavaScript, HTML/CSS, REST APIs",
      description: "Spearheaded front-end development with user authentication, file uploads, and geolocation services."
    },
    {
      title: "IEEE Communications Society Website", 
      tech: "React, Three.js, Framer Motion",
      description: "Developed responsive React SPA with interactive 3D satellite and smooth page transitions."
    },
    {
      title: "Sorting Visualizer",
      tech: "React, Tailwind CSS, JavaScript", 
      description: "Interactive app visualizing 6 sorting algorithms with adjustable speed and size controls."
    },
    {
      title: "E-Commerce Website Front-end",
      tech: "React, JavaScript, CSS", 
      description: "Built front-end with sorting, searching, filtering, and cart features for optimized UX."
    }
  ];

  const achievements = [
    { text: "JEE Mains — 95.2 percentile & JEE Advanced AIR 21827 (2022)", icon: Trophy },
    { text: "3+ crore views on Unsplash photography", icon: Camera },
    { text: "Featured on Amazon app homepage", icon: Star },
    { text: "Qualified NTSE Stage-1, Pre-RMO, NMTC (2019)", icon: Trophy },
    { text: "IEEE Senior Core Member", icon: Code }
  ];

  return (
    <div className="max-w-6xl w-full animate-fade-in">
      {/* Profile Header */}
      <div className="bg-[#1a2332] border border-[#2a3441] rounded-lg p-8 mb-8">
        <div className="flex items-center gap-8 mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
            CT
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Chirayu Trivedi</h1>
            <p className="text-lg text-blue-400 mb-1">B.Tech Computer Science & Engineering</p>
            <div className="flex items-center gap-2 text-gray-400">
              <GraduationCap className="w-4 h-4" />
              <span>VIT Vellore | CGPA: 8.92</span>
            </div>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="flex gap-6 flex-wrap mb-4">
          <a href="mailto:trivedichirayu19@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
            <Mail className="w-4 h-4" />
            <span className="text-sm">trivedichirayu19@gmail.com</span>
          </a>
          <a href="tel:8319097826" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-sm">+91 8319097826</span>
          </a>
          <a href="https://linkedin.com/in/trivedichirayu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin className="w-4 h-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href="https://github.com/trivichi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
            <Github className="w-4 h-4" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>

        {/* Resume Button */}
        <a 
          href="https://drive.google.com/file/d/1RDvB3Iw9y9a3IMI4cNAztvrEkT0IGkgl/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
        >
          View My Resume
        </a>
      </div>

      {/* Skills Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-[#1a2332] border border-[#2a3441] rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Code className={`w-5 h-5 text-${skillGroup.color}-400`} />
              <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#0f1419] border border-[#2a3441] rounded-full text-xs text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Projects & Achievements Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Projects */}
        <div className="bg-[#1a2332] border border-[#2a3441] rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-400" />
            Key Projects
          </h3>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#0f1419] border border-[#2a3441] rounded p-4">
                <h4 className="font-medium text-white text-sm mb-1">{project.title}</h4>
                <div className="text-xs text-blue-400 mb-2">{project.tech}</div>
                <p className="text-gray-400 text-xs">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-[#1a2332] border border-[#2a3441] rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            Achievements & Leadership
          </h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-3 bg-[#0f1419] border border-[#2a3441] rounded">
                  <IconComponent className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{achievement.text}</span>
                </div>
              );
            })}
            
            {/* Experience */}
            <div className="mt-4 p-3 bg-[#0f1419] border border-[#2a3441] rounded">
              <h4 className="font-medium text-green-400 text-sm mb-1">Senior Core Member</h4>
              <p className="text-xs text-gray-400 mb-1">IEEE Communications Society VIT | Sept 2023 - Present</p>
              <ul className="text-gray-400 text-xs space-y-1 ml-4">
                <li>• Led front-end development of club website</li>
                <li>• Mentored 15+ junior members</li>
                <li>• Organized technical events (300+ participants)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSlide;
