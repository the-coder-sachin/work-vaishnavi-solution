import React from 'react'
import { asset } from '../../assets/assets';

const Category = () => {
  const height = {
    height : 'calc(100vh - 104px)',
  }
  return (
    <section style={height} className="bg-slate-200 w-full p-10">
      <h2 className="text-3xl font-bold uppercase">Our Product Categories</h2>
      <div className="flex">
        <p className="w-[40%] mt-7 text-xl leading-loose">
          Agricultural & Organic Products – Jaggery, Mustard Oil, Mentha Oil,
          Honey, Tea, Coffee, Turmeric, Cumin, Cardamom, Black Pepper, Ginger,
          Onion, Sugar, Aloe Vera.✔ Eco-friendly & Sustainable – Jute Bags,
          Bamboo.✔ Handcrafted & Leather Goods – Handicraft Products, Leather
          Bags, Belts, Wallets.
        </p>
        <div className="img w-[60%] p-16">
          <img src={asset.agriculture} alt="photo" className='rounded-lg cursor-pointer hover:scale-110 transition-all duration-200 ' />
        </div>
      </div>
    </section>
  );
}

export default Category