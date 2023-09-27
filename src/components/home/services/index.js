import Image from 'next/image';

import Appetizer from '../../../images/services/appetizer.jpg';
import Pho from '../../../images/services/pho.jpg';
import Vermicelli from '../../../images/services/vermicelli.jpeg';
import RicePlace from '../../../images/services/ricePlate.png';
import FriedRice from '../../../images/services/FriedRice.jpeg';
import LowMein from '../../../images/services/LoMein.jpeg';
import StirFried from '../../../images/services/stirFried.jpeg';
import Sandwiches from '../../../images/services/banhMi.jpeg';

function Services() {
  const services = [
    { name: 'Appetizer', serviceImg: Appetizer },
    { name: 'Beef Noodle Soup / Pho', serviceImg: Pho },
    { name: 'Vermicelli Bowl / Bun', serviceImg: Vermicelli },
    { name: 'Rice Plate / Com Dia', serviceImg: RicePlace },
    { name: 'Fried Rice', serviceImg: FriedRice },
    { name: "Low Mein", serviceImg: LowMein },
    { name: 'Stir Fried', serviceImg: StirFried },
    { name: 'Vietnamese Sandwiches', serviceImg: Sandwiches },
    // { name: 'Vietnamese Sandwiches', serviceImg: Sandwiches },

  ];
  return (
    <div className="py-32">
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        <div className="text-center text-white mb-12">
          <p className="text-4xl font-bold  mb-3">
            Our Dishes
          </p>
          <p className="">
            You are ensured to enjoy the best meals
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
            {services.map((item, index) => (
              <div key={index} className="relative overflow-hidden shadow-md hover:shadow-lg">
                <Image
                  src={item.serviceImg}
                  alt=""
                  className="rounded w-full h-full object-cover shadow"
                />
                <div className="bg-gradient-to-t from-zinc-900 via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/services"
          >
            <button className="bg-transparent border-2 border-solid border-white p-3 text-white rounded-lg lg:py-2.5 px-4 lg:px-6 bg-hover ">
              View Menu
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
