import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const features = [
    {
      title: 'Voice Emotion Detection',
      description: 'Advanced AI algorithms analyze voice patterns to detect emotions with high accuracy.',
      icon: '🎭',
    },
    {
      title: 'Music Recommendations',
      description: 'Personalized music suggestions based on your emotional state.',
      icon: '🎵',
    },
    {
      title: 'Real-time Analysis',
      description: 'Instant emotion detection and feedback for immediate results.',
      icon: '⚡',
    },
    {
      title: 'Privacy Focused',
      description: 'Your voice data is processed securely and never stored without permission.',
      icon: '🔒',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
              Revolutionizing Emotion Through Voice
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              At VoiceMood, we're pioneering the future of emotional intelligence through advanced voice analysis technology.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-400 text-center mb-12">Our Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Ready to Experience VoiceMood?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in exploring the future of emotional intelligence and personalized music recommendations.
            </p>
            <div className="space-x-4">
              <Link
                to="/record"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;