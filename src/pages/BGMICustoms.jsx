import { useState } from 'react';

const BGMICustoms = () => {
  const [activeTab, setActiveTab] = useState('free');

  const customRooms = {
    free: [
      {
        title: 'Daily Free Custom Room #1',
        time: '4:00 PM IST',
        map: 'Erangel',
        slots: '100',
        prizePool: 'Free Entry',
        link: 'https://t.me/freecustoms1',
      },
      {
        title: 'Daily Free Custom Room #2',
        time: '8:00 PM IST',
        map: 'Miramar',
        slots: '100',
        prizePool: 'Free Entry',
        link: 'https://t.me/freecustoms2',
      },
    ],
    paid: [
      {
        title: 'Premium Custom Room #1',
        time: '6:00 PM IST',
        map: 'Erangel',
        slots: '100',
        prizePool: '1000',
        entryFee: '50',
        link: 'https://t.me/paidcustoms1',
      },
      {
        title: 'Premium Custom Room #2',
        time: '9:00 PM IST',
        map: 'Sanhok',
        slots: '100',
        prizePool: '2000',
        entryFee: '100',
        link: 'https://t.me/paidcustoms2',
      },
    ],
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-gaming text-gaming-primary">BGMI Custom Rooms</h1>
        <p className="text-gaming-light">Join our daily custom rooms and compete with the best players!</p>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          className={`px-6 py-2 rounded-lg font-gaming ${
            activeTab === 'free'
              ? 'bg-gaming-primary text-white'
              : 'border border-gaming-primary text-gaming-primary hover:bg-gaming-primary hover:text-white'
          }`}
          onClick={() => setActiveTab('free')}
        >
          Free Customs
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-gaming ${
            activeTab === 'paid'
              ? 'bg-gaming-primary text-white'
              : 'border border-gaming-primary text-gaming-primary hover:bg-gaming-primary hover:text-white'
          }`}
          onClick={() => setActiveTab('paid')}
        >
          Paid Customs
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {customRooms[activeTab].map((room, index) => (
          <div
            key={index}
            className="bg-gaming-dark border border-gaming-primary rounded-lg p-6 space-y-4 hover:border-gaming-secondary transition-colors"
          >
            <h3 className="text-xl font-gaming text-gaming-secondary">{room.title}</h3>
            <div className="space-y-2 text-gaming-light">
              <p>
                <span className="font-semibold">Time:</span> {room.time}
              </p>
              <p>
                <span className="font-semibold">Map:</span> {room.map}
              </p>
              <p>
                <span className="font-semibold">Slots:</span> {room.slots}
              </p>
              <p>
                <span className="font-semibold">Prize Pool:</span> ₹{room.prizePool}
              </p>
              {room.entryFee && (
                <p>
                  <span className="font-semibold">Entry Fee:</span> ₹{room.entryFee}
                </p>
              )}
            </div>
            <a
              href={room.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gaming-primary text-white px-6 py-2 rounded-lg font-gaming hover:bg-gaming-secondary transition-colors"
            >
              Join Group
            </a>
          </div>
        ))}
      </div>

      <div className="bg-gaming-dark border border-gaming-primary rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-gaming text-gaming-primary mb-4">Rules & Guidelines</h2>
        <ul className="list-disc list-inside space-y-2 text-gaming-light">
          <li>Join the Telegram group for room ID and password</li>
          <li>Be online 15 minutes before the match starts</li>
          <li>Follow fair play guidelines</li>
          <li>No teaming allowed</li>
          <li>Hackers will be permanently banned</li>
          <li>For paid customs, payment details will be shared in the group</li>
        </ul>
      </div>
    </div>
  );
};

export default BGMICustoms;
