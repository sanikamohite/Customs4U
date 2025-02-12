import { Link } from 'react-router-dom';

const Home = () => {
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
                to="/analyze"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
              >
                Analyze Voice
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

      {/* Featured Capabilities */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl text-blue-400 font-bold mb-8">Emotion Detection Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Mood Analysis',
              image: 'https://img.freepik.com/free-vector/gradient-emotion-rating-concept_23-2148946168.jpg',
              description: 'Detect Happy, Sad, Angry, and Neutral emotions',
            },
            {
              title: 'Music Matching',
              image: 'https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg',
              description: 'AI-powered music recommendations based on mood',
            },
            {
              title: 'Voice Processing',
              image: 'https://img.freepik.com/free-vector/voice-recognition-concept-illustration_114360-7861.jpg',
              description: 'Advanced NLP for accurate emotion detection',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group relative h-80 rounded-xl overflow-hidden bg-gray-900 p-6 border border-blue-400/30"
            >
              <div className="h-40 mb-4 overflow-hidden rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl text-blue-400 font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 bg-gray-900 rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl text-blue-400 font-bold mb-4">Experience the Future of Voice Analysis</h2>
            <p className="text-gray-300 text-lg mb-6">
              Join our platform to unlock the power of emotion detection through voice analysis. Perfect for personal use, research, and development.
            </p>
            <Link
              to="/register"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="relative h-64">
            <img
              src="https://img.freepik.com/free-vector/voice-recognition-concept-landing-page_23-2148289011.jpg"
              alt="AI Voice Analysis"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
