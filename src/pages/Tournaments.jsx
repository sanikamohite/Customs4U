import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Tournaments = () => {
  const [activeGame, setActiveGame] = useState('all');

  const whatsappGroups = {
    bgmi: [
      {
        name: 'BGMI Daily Customs',
        description: 'Daily custom rooms with cash prizes',
        link: 'https://chat.whatsapp.com/example1',
        prizePool: '₹500-1000 daily',
        timing: '6 PM - 10 PM IST',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqaZm4pLUk9IvQ7L5bfxZ27FI1osKIc4I8A&s',
      },
      {
        name: 'BGMI Pro Scrims',
        description: 'Professional scrims for competitive players',
        link: 'https://chat.whatsapp.com/example2',
        prizePool: '₹2000-5000 weekly',
        timing: 'Weekend tournaments',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dD6jbHESHZeyT0aHyKrL7-pGY5EjgkJ0og&s',
      },
    ],
    freefire: [
      {
        name: 'Free Fire Tournaments',
        description: 'Regular tournaments and custom rooms',
        link: 'https://chat.whatsapp.com/example3',
        prizePool: '₹1000-2000 weekly',
        timing: '7 PM - 11 PM IST',
        poster: 'https://images.hindustantimes.com/tech/img/2022/03/28/960x540/Garena_FF_Max_1646187536940_1648429367594.jpg',
      },
    ],
    valorant: [
      {
        name: 'Valorant India Scrims',
        description: 'Daily practice scrims and weekly tournaments',
        link: 'https://chat.whatsapp.com/example4',
        prizePool: '₹5000+ monthly',
        timing: '8 PM onwards',
        poster: 'https://imageio.forbes.com/specials-images/imageserve/60b76f475e37680367ba0f45/The-key-are-for-Valorant-year-one-/960x0.jpg?format=jpg&width=960',
      },
    ],
  };

  const games = [
    { 
      id: 'bgmi', 
      name: 'BGMI',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6Fmr-JIU-CwBryZMU9sQFSZJCOZH8u531w&s',
    },
    { 
      id: 'freefire', 
      name: 'Free Fire',
      poster: 'https://www.pulsartstudio.com/cdn/shop/products/cloudtifa_web_db5719ac-b44d-471e-be5b-9d54fea2deba_720x.png?v=1597281170',
    },
    { 
      id: 'valorant', 
      name: 'Valorant',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEul_6aheIZfECCpFjxeVaK8thoTwFUvR_xuV6WSPFgKsnofwi6URKoLdTlNg6KiRggOk&usqp=CAU',
    },
  ];

  const getFilteredGroups = () => {
    if (activeGame === 'all') {
      return Object.entries(whatsappGroups).flatMap(([game, groups]) =>
        groups.map(group => ({ ...group, game }))
      );
    }
    return whatsappGroups[activeGame]?.map(group => ({ ...group, game: activeGame })) || [];
  };

  // Default image for fallback
  const handleImageError = (e) => {
    e.target.src = '/images/games/placeholder.jpg';
  };

  return (
    <div className="min-h-screen bg-gaming-darker p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-gaming text-gaming-primary">Tournament Communities</h1>
        <p className="text-gaming-light max-w-2xl mx-auto">
          Join our WhatsApp groups to participate in daily customs, scrims, and tournaments.
          Connect with fellow gamers and compete for exciting prizes!
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-6">
        {games.map((game) => (
          <button
            key={game.id}
            className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
              activeGame === game.id ? 'ring-4 ring-gaming-primary scale-105' : ''
            }`}
            onClick={() => setActiveGame(game.id)}
          >
            <div className="relative w-48 h-28">
              <img
                src={game.poster}
                alt={game.name}
                onError={handleImageError}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                activeGame === game.id ? 'opacity-0' : 'group-hover:opacity-0'
              }`}>
                <span className="text-white font-gaming text-lg">{game.name}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredGroups().map((group, index) => (
          <div
            key={index}
            className="bg-gaming-dark border border-gaming-primary rounded-xl overflow-hidden hover:border-gaming-secondary transition-all duration-300"
          >
            <div className="relative h-48">
              <img
                src={group.poster}
                alt={group.name}
                onError={handleImageError}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm bg-gaming-primary text-white uppercase backdrop-blur-sm bg-opacity-90">
                {group.game}
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-gaming text-gaming-secondary">
                {group.name}
              </h3>
              <div className="space-y-2 text-gaming-light">
                <p>{group.description}</p>
                <p>
                  <span className="font-semibold">Prize Pool:</span> {group.prizePool}
                </p>
                <p>
                  <span className="font-semibold">Timing:</span> {group.timing}
                </p>
              </div>
              <a
                href={group.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-gaming transition-colors"
              >
                <FaWhatsapp className="text-xl" />
                Join WhatsApp Group
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
