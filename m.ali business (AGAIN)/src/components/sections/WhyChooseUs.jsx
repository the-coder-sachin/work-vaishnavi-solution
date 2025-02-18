import React from 'react'

const WhyChooseUs = () => {
    const height = {
      height: "calc(100vh - 104px)",
    };
  return (
    <section  className="bg-slate-300 w-full p-10 lg:h-screen">
      <h2 className="text-3xl font-bold uppercase">Why Choose Us?</h2>
      <div className="flex">
        <p className=" mt-7 sm:text-xl md:leading-loose">
          ✅ Premium Quality – We source only the best, ensuring high standards
          of purity and freshness.✅ Global Reach – Serving clients worldwide
          with efficient and timely deliveries.✅ Competitive Pricing – Get the
          best value for your business with cost-effective solutions.✅
          Customer-Centric Approach – Your satisfaction is our priority,
          ensuring seamless transactions and excellent support.✅ Sustainable
          Practices – Our business model is designed to promote eco-friendly and
          ethically sourced products.✅ Reliable Supply Chain – We ensure
          consistent availability and uninterrupted delivery of our products.
        </p>
      </div>
    </section>
  );
}

export default WhyChooseUs