import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-blue-400/30">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl text-blue-400 font-bold">VoiceMood</h3>
            <p className="text-gray-300 text-sm">
              Advanced emotion detection through voice analysis, powering personalized music recommendations.
            </p>
          </div>
          <div>
            <h4 className="text-blue-300 font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/analyze" className="text-gray-300 hover:text-blue-400 text-sm">
                  Voice Analysis
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-blue-400 text-sm">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-300 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/docs" className="text-gray-300 hover:text-blue-400 text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-blue-400 text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-300 font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@voicemood.com" className="text-gray-300 hover:text-blue-400 text-sm">
                  sanikamohite2905@gmail.com
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 text-sm">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-400/30 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} The Power Of Voice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
