import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gaming-dark border-t border-gaming-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-gaming text-2xl text-gaming-primary">Customs4U</h3>
            <p className="text-gaming-light text-sm">
              Your ultimate destination for gaming tournaments and custom matches.
            </p>
          </div>
          <div>
            <h4 className="text-gaming-secondary font-gaming mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/games" className="text-gaming-light hover:text-gaming-secondary text-sm">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/tournaments" className="text-gaming-light hover:text-gaming-secondary text-sm">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link to="/bgmi-customs" className="text-gaming-light hover:text-gaming-secondary text-sm">
                  BGMI Customs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gaming-secondary font-gaming mb-4">Games</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gaming-light text-sm">BGMI</span>
              </li>
              <li>
                <span className="text-gaming-light text-sm">Free Fire</span>
              </li>
              <li>
                <span className="text-gaming-light text-sm">Valorant</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gaming-secondary font-gaming mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gaming-light hover:text-gaming-secondary text-sm">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gaming-light hover:text-gaming-secondary text-sm">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-gaming-light hover:text-gaming-secondary text-sm">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gaming-primary text-center">
          <p className="text-gaming-light text-sm">
            © {new Date().getFullYear()} Customs4U. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
