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

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Scientist',
      bio: 'Expert in voice recognition and emotional intelligence algorithms.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Mark Anderson',
      role: 'Head of Engineering',
      bio: 'Specialized in building scalable AI applications.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Research Director',
      bio: 'Leading research in emotional intelligence and music therapy.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
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

      {/* Team Section */}
      <section className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-400 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-900/80 p-6 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-blue-400/30"
                />
                <h3 className="text-xl font-semibold text-blue-300 text-center mb-2">{member.name}</h3>
                <p className="text-blue-200 text-center mb-2">{member.role}</p>
                <p className="text-gray-300 text-center">{member.bio}</p>
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
                to="/signup"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="inline-block border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-bold hover:bg-blue-400 hover:text-white transition-colors"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;