import React, { useState } from 'react';

const cakes = [
  {
    title: 'Chocolate Cake',
    description: 'Best cake for birthday parties and chocolate lovers.',
    imageUrl: '/images/cake1.webp',
    price: '$25',
    contactInfo: 'Contact us at: example@example.com',
  },
  {
    title: 'Velvet Cake',
    description: 'Best cake for special occasions and parties.',
    imageUrl: '/images/cake2.webp',
    price: '$30',
    contactInfo: 'Contact us at: example@example.com',
  },
  {
    title: 'Fruit Cake',
    description: 'Best cake for special occasions, parties, and Fruit lovers.',
    imageUrl: '/images/cake3.webp',
    price: '$35',
    contactInfo: 'Contact us at: example@example.com',
  },
];

function Index(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCake, setSelectedCake] = useState(null);

  const handleBuyClick = (cake) => {
    setShowDetails(true);
    setSelectedCake(cake);
  };

  return (
    <section className="w-full lg:p-16 p-10">
      <h2 className="heading text-center font-medium lg:text-7xl text-3xl mt-24">
        Choose Your Flavor
      </h2>
      <p className="subheading text-center font-light lg:text-3xl text-xl mt-2">
        Try our best custom-designed cakes
      </p>
      <div className="products">
        <div className="mt-12 max-w-7xl mx-auto grid gap-5 lg:grid-cols-3">
          {cakes.map((cake, index) => (
            <div key={index} className="flex flex-col rounded-3xl shadow-lg overflow-hidden bg-white">
              <div className="flex-shrink-0">
                <img className="h-56 w-full object-cover" src={cake.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{cake.title}</p>
                    <p className="mt-3 text-base text-gray-500">{cake.description}</p>
                  </div>
                </div>
              </div>
              <div className="m-5 bg-white">
                {showDetails && selectedCake === cake ? (
                  <div>
                    <p className="text-lg font-medium text-green-400">{cake.price}</p>
                    <p>{cake.contactInfo}</p>
                  </div>
                ) : (
                  <p
                    className="text-center cursor-pointer hover:scale-110 text-lg font-medium text-green-400"
                    onClick={() => handleBuyClick(cake)}
                  >
                    Buy Me →
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Index;

                               
