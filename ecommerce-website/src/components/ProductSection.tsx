import React from 'react';
import Image from 'next/image';

const products = [
  { 
    id: 1,
    image: '/ps5.png', 
    name: 'PlayStation 5', 
    description: 'Black and White version of the PS5 coming out on sale', 
    category: 'Gaming',
  },
  { 
    id: 2, 
    image: '/woman-wearing.png', 
    name: 'Women\'s Collections', 
    description: 'Featured women collections that give you another vibe.', 
    category: 'Fashion' 
  },
  { 
    id: 3, 
    image: '/speakers.png', 
    name: 'Speakers', 
    description: 'Amazon wireless speakers.', 
    category: 'Electronics' 
  },
  { 
    id: 4, 
    image: '/perfume.png', 
    name: 'Perfume', 
    description: 'GUCCI INTENSE OUD EDP.', 
    category: 'Fragrance' 
  },
];

const ProductSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
        <h2 className="Poppins text-[#DB4444] text-lg font-semibold">Featured</h2>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-black text-4xl font-semibold mt-6 my-10">New Arrival</h1>
        </div>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {/* PlayStation 5 */}
        <div className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-lg">
          <Image
            src={products[0].image}
            alt={products[0].name}
            className="w-full h-full object-contain bg-black pt-8"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t to-transparent p-6 flex flex-col justify-end w-[55%] text-white mb-4">
            <h3 className="Poppins text-2xl font-medium">{products[0].name}</h3>
            <p className="Poppins text-base font-light mt-2">{products[0].description}</p>
            <button className="Poppins flex justify-start mt-4 hover:underline hover:underline-offset-4">Shop Now</button>
          </div>
        </div>

        {/* Women's Collection */}
        <div className="lg:col-span-2 lg:row-span-1 relative overflow-hidden rounded-lg bg-black place-items-end">
          <Image
            src={products[1].image}
            alt={products[1].name}
            className="w-9/12 h-full object-contain bg-black"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t to-transparent p-6 flex w-[55%] flex-col justify-end text-white mb-4">
            <h3 className="Poppins text-2xl font-medium">{products[1].name}</h3>
            <p className="Poppins text-base font-light mt-2">{products[1].description}</p>
            <button className="Poppins flex justify-start mt-4 hover:underline hover:underline-offset-4">Shop Now</button>
          </div>
        </div>

        {/* Speakers */}
        <div className="relative overflow-hidden rounded-lg bg-black">
            <div className='bg-[#D9D9D9] absolute -inset-1 rounded-full blur-3xl opacity-30'></div>
            <Image
              src={products[2].image}
              alt={products[2].name}
              className="w-full h-full object-contain p-8 relative"
              width={500}
              height={500}
            />
          <div className="absolute inset-0 bg-gradient-to-t to-transparent p-6 flex flex-col justify-end text-white mb-4">
            <h3 className="Poppins text-2xl font-medium">{products[2].name}</h3>
            <p className="Poppins text-base font-light mt-2">{products[2].description}</p>
            <button className="Poppins flex justify-start mt-4 hover:underline hover:underline-offset-4">Shop Now</button>
          </div>
        </div>

        {/* Perfume */}
        <div className="relative overflow-hidden rounded-lg bg-black">
        <div className='bg-[#D9D9D9] absolute -inset-7 rounded-full blur-3xl opacity-30'></div>
          <Image
            src={products[3].image}
            alt={products[3].name}
            className="w-full h-full object-contain p-8 relative"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t to-transparent p-6 flex flex-col justify-end text-white mb-4">
            <h3 className="Poppins text-2xl font-medium">{products[3].name}</h3>
            <p className="Poppins text-base font-light mt-2">{products[3].description}</p>
            <button className="Poppins flex justify-start mt-4 hover:underline hover:underline-offset-4">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
