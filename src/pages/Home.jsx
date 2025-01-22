import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-[url('https://t4.ftcdn.net/jpg/04/86/18/57/360_F_486185798_yL4lwLEGEkIyDWdrUP7AXSvWxsYd28I2.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-gaming text-5xl md:text-6xl text-gaming-primary mb-6">
              Welcome to Customs4U
            </h1>
            <p className="text-xl text-gaming-light mb-8">
              Join the ultimate gaming tournaments and custom matches. Compete with the best players and win exciting prizes!
            </p>
            <div className="space-x-4">
              <Link
                to="/tournaments"
                className="inline-block bg-gaming-primary text-white px-8 py-3 rounded-lg font-gaming hover:bg-gaming-secondary transition-colors"
              >
                Join Tournament
              </Link>
              <Link
                to="/games"
                className="inline-block border-2 border-gaming-primary text-gaming-primary px-8 py-3 rounded-lg font-gaming hover:bg-gaming-primary hover:text-white transition-colors"
              >
                Explore Games
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="container mx-auto px-4">
        <h2 className="font-gaming text-3xl text-gaming-primary mb-8">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'BGMI',
              image: 'https://bgmi.in/wp-content/uploads/2023/10/bgmi-apk-update.webp',
              link: '/bgmi-customs',
            },
            {
              title: 'Free Fire',
              image: 'https://images.hindustantimes.com/tech/img/2022/03/28/960x540/Garena_FF_Max_1646187536940_1648429367594.jpg',
              link: '/games',
            },
            {
              title: 'Valorant',
              image: 'https://preview.redd.it/tuhfkqx6t6v51.png?width=5874&format=png&auto=webp&s=fcd0ab00b82d0b45c2ee76fc4c4bc2d8b1573c27',
              link: '/games',
            },
          ].map((game) => (
            <Link
              key={game.title}
              to={game.link}
              className="group relative h-64 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-gaming text-2xl text-white">{game.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4">
        <h2 className="font-gaming text-3xl text-gaming-primary mb-8">Ready to Compete?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <p className="text-gaming-light text-lg mb-4">
              Join our community of gamers and start competing in custom rooms and tournaments.
            </p>
            <Link
              to="/login"
              className="bg-gaming-primary text-white px-4 py-2 rounded font-gaming text-sm hover:bg-gaming-secondary transition-colors"
            >
              Login/Register
            </Link>
          </div>
          <img
            src="/images/gaming-setup.jpg"
            alt="Gaming Setup"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
