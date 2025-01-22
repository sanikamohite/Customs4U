import { Link } from 'react-router-dom';

const Games = () => {
  const games = [
    {
      title: 'BGMI',
      description: 'Battlegrounds Mobile India - The ultimate battle royale experience',
      image: 'https://bgmi.in/wp-content/uploads/2023/10/bgmi-apk-update.webp',
      link: '/bgmi-customs',
      features: ['Daily Custom Rooms', 'Free & Paid Tournaments', 'Cash Prizes'],
    },
    {
      title: 'Free Fire',
      description: 'Fast-paced battle royale with unique character abilities',
      image: 'https://images.hindustantimes.com/tech/img/2022/03/28/960x540/Garena_FF_Max_1646187536940_1648429367594.jpg',
      link: '/games',
      features: ['Coming Soon', 'Weekly Tournaments', 'Exclusive Rewards'],
    },
    {
      title: 'Valorant',
      description: 'Tactical 5v5 character-based shooter',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqbTL_zPLlW6vq4zySLP1_ZVdaf3By54EQZMFLQeYAd0NhgxRGfdLxsszyulcQRWnWqU&usqp=CAU',
      link: '/games',
      features: ['Coming Soon', 'Competitive Matches', 'Team Tournaments'],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-gaming text-gaming-primary">Our Games</h1>
        <p className="text-gaming-light">Choose your game and start competing!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <div
            key={game.title}
            className="bg-gaming-dark border border-gaming-primary rounded-lg overflow-hidden hover:border-gaming-secondary transition-colors"
          >
            <div className="relative h-48">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <h3 className="absolute bottom-4 left-4 font-gaming text-2xl text-white">
                {game.title}
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gaming-light">{game.description}</p>
              <ul className="space-y-2">
                {game.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gaming-light">
                    <svg
                      className="w-5 h-5 text-gaming-secondary mr-2"
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
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={game.link}
                className="inline-block w-full text-center bg-gaming-primary text-white px-6 py-2 rounded-lg font-gaming hover:bg-gaming-secondary transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gaming-dark border border-gaming-primary rounded-lg p-6">
        <h2 className="text-2xl font-gaming text-gaming-primary mb-4">
          Want to see more games?
        </h2>
        <p className="text-gaming-light mb-4">
          We're constantly adding new games to our platform. Follow us on social media to stay updated!
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gaming-secondary hover:text-gaming-primary transition-colors"
          >
            Discord
          </a>
          <a
            href="#"
            className="text-gaming-secondary hover:text-gaming-primary transition-colors"
          >
            Telegram
          </a>
          <a
            href="#"
            className="text-gaming-secondary hover:text-gaming-primary transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Games;
