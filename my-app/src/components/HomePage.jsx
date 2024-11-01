import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Binary, Cpu, Shield, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const handleVideo = ()=>{
        navigate('/video');
    }
    const handleAudio = ()=>{
        navigate('/audio');
    }
    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };
  const teamMembers = [
    {
      name: "ABC",
      role: "XYZ",
      expertise: "abc",
      image: "placeholder",
      bio: "abc",
      github: "github",
      linkedin: "linkedin"
    },
    {
        name: "ABC",
        role: "XYZ",
        expertise: "abc",
        image: "placeholder",
        bio: "abc",
        github: "github",
        linkedin: "linkedin"
    },
    {
        name: "ABC",
        role: "XYZ",
        expertise: "abc",
        image: "placeholder",
        bio: "abc",
        github: "github",
        linkedin: "linkedin"
    },
    {
        name: "ABC",
        role: "XYZ",
        expertise: "abc",
        image: "placeholder",
        bio: "abc",
        github: "github",
        linkedin: "linkedin"
    },
  ];

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Advanced Protection",
      description: "State-of-the-art deepfake detection using multi-modal analysis"
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "AI-Powered",
      description: "Neural networks trained on vast datasets for accurate detection"
    },
    {
      icon: <Binary className="w-12 h-12 text-green-500" />,
      title: "Dual Analysis",
      description: "Comprehensive video and audio manipulation detection"
    },
    {
      icon: <Cpu className="w-12 h-12 text-red-500" />,
      title: "Real-time Processing",
      description: "Quick and efficient analysis with detailed reports"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30" />
        <div className="container mx-auto px-6 py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Deepfake Detection System
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Protect authenticity in the digital age with our advanced AI-powered detection system
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={handleVideo} className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all transform hover:scale-105">
                Analyze Video
              </button>
              <button onClick={handleAudio} className="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-all transform hover:scale-105">
                Analyze Audio
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          Meet Our <span className="text-blue-400">Expert</span> Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-102 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-40 h-40 rounded-full border-4 border-blue-500/30 group-hover:border-purple-500/30 transition-colors duration-300 object-cover"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-blue-400 text-lg mb-3">{member.role}</p>
                  <p className="text-gray-400 mb-6 text-center">{member.bio}</p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={`https://${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-700/50 hover:bg-gray-600 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href={`https://${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-700/50 hover:bg-gray-600 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      <div className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Detect Deepfakes?</h2>
            <p className="text-gray-300 mb-8">
              Start analyzing your content with our advanced detection system
            </p>
            <button onClick={handleClick} className="px-8 py-3 rounded-lg bg-white text-blue-600 hover:bg-gray-100 transition-colors font-semibold">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;