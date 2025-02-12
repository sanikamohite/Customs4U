import { Link } from 'react-router-dom';
import { useState } from 'react';
import template from '../assets/template.webp';
import template2 from '../assets/template2.png';

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl text-blue-400 font-bold mb-6">
              The Power Of Voice
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover the emotional intelligence of AI through voice analysis. Our advanced system detects emotions in real-time, creating a personalized experience through mood-based music recommendations.
            </p>
            <div className="space-x-4">
              <Link
                to="/record"
                onClick={scrollToTop}
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
              >
                Analyze Voice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Capabilities */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl text-blue-400 font-bold mb-8 leading-tight">
              Voice Emotion Analysis
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Experience the power of AI-driven emotion detection
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {[
              {
                title: 'Advanced Mood Analysis',
                image: template,
                description: 'Advanced emotion detection system that can accurately identify Happy, Sad, Angry, and Neutral emotions from voice recordings. Using state-of-the-art AI technology, our system provides instant analysis of emotional states.',
                features: [
                  'Real-time emotion detection',
                  'High accuracy analysis',
                  'Support for multiple languages',
                  'Instant feedback and results'
                ]
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group bg-gray-900/70 backdrop-blur-md rounded-2xl overflow-hidden border border-blue-400/30 hover:border-blue-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-400/10"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="h-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 z-10 md:bg-gradient-to-t"></div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-12 relative flex flex-col justify-center">
                    <div className="relative z-10">
                      <h3 className="text-4xl text-blue-400 font-bold mb-6 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {feature.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {feature.features.map((item, index) => (
                          <div 
                            key={index}
                            className="flex items-center space-x-3 text-gray-300 group/item"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 group-hover/item:bg-blue-500/20 flex items-center justify-center transition-colors duration-300">
                              <svg 
                                className="w-5 h-5 text-blue-400" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth="2" 
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="text-lg group-hover/item:text-blue-400 transition-colors duration-300">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900/10 to-gray-900 rounded-3xl">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-12 md:p-16">
            <div className="text-center md:text-left space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full mb-4">
                <span className="text-blue-400 font-semibold">Ready to Get Started?</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-blue-400 font-bold leading-tight">
                Experience the Future of Voice Analysis
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Join our platform to unlock the power of emotion detection through voice analysis. Perfect for personal use, research, and development.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  to="/record"
                  onClick={scrollToTop}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-blue-500 rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <svg 
                      className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl group-hover:bg-blue-500/30 transition-colors duration-300"></div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden border border-blue-400/30 backdrop-blur-sm">
                <img
                  src={template2}
                  alt="AI Voice Analysis"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
