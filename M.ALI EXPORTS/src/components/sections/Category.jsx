import React from 'react'
import { asset } from '../../assets/assets';

const Category = () => {
  const height = {
    height : 'calc(100vh - 104px)',
  }
  return (
    <section className="bg-slate-200 w-full p-10 lg:h-screen">
      <h2 className="text-3xl font-bold uppercase">Our Product Categories</h2>
      <div className="flex flex-col lg:flex-row ">
        <p className="mt-7 sm:text-lg md:text-xl leading-loose lg:w-[65%]">
          Agricultural & Organic Products – Jaggery, Mustard Oil, Mentha Oil,
          Honey, Tea, Coffee, Turmeric, Cumin, Cardamom, Black Pepper, Ginger,
          Onion, Sugar, Aloe Vera.✔ Eco-friendly & Sustainable – Jute Bags,
          Bamboo.✔ Handcrafted & Leather Goods – Handicraft Products, Leather
          Bags, Belts, Wallets.
        </p>
        <div className="img py-5 lg:p-5 w-full">
          <img
            src={asset.agriculture}
            alt="photo"
            className="rounded-lg cursor-pointer hover:scale-105 transition-all duration-200 w-full "
          />
        </div>
      </div>
    </section>
  );
}

export default Category