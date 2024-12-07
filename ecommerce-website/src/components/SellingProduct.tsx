import React from 'react';
import Image from 'next/image';

const bestSellingProducts = [
  {
    id: 1,
    image: '/north-coat.png',
    name: 'The north coat',
    price: 260,
    oldPrice: 360,
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 2,
    image: '/gucci-bag.png',
    name: 'Gucci duffle bag',
    price: 960,
    oldPrice: 1160,
    rating: 4.8,
    reviews: 65,
  },
  {
    id: 3,
    image: '/cpu-cooler.png',
    name: 'RGB liquid CPU Cooler',
    price: 160,
    oldPrice: 170,
    rating: 4.7,
    reviews: 65,
  },
  {
    id: 4,
    image: '/bookshelf.png',
    name: 'Small BookShelf',
    price: 360,
    oldPrice: null,
    rating: 4.6,
    reviews: 65,
  },
];

export default function BestSellingProducts() {
  return (
    <section className="flex items-center max-w-7xl mx-auto w-full py-12">
      <div className="bg-white flex flex-col w-full">
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
          <h2 className="Poppins text-[#DB4444] text-lg font-semibold">This Month</h2>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-black text-4xl font-semibold">Best Selling Products</h1>
          <button className="bg-[#DB4444] hover:bg-red-600 text-white px-12 py-4 rounded-md text-base">
            View All
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {bestSellingProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white rounded-md shadow-sm hover:shadow-md p-4"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover bg-gray-100 rounded-md"
                />
                {/* Hover Icons */}
                <div className="absolute top-2 right-0 px-2 flex flex-col gap-2">
                  <button className="bg-white rounded-full shadow hover:bg-gray-100">
                    <Image src="/Fill-Heart.png" alt="heart" width={30} height={30} />
                  </button>
                  <button className="bg-white rounded-full shadow hover:bg-gray-100">
                    <Image src="/Fill-Eye.png" alt="eye" width={30} height={30} />
                  </button>
                </div>
              </div>
              {/* Product Details */}
              <div className="mt-4">
                <h3 className="text-black text-base font-medium Poppins">{product.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="Poppins text-[#DB4444] text-lg font-medium">${product.price}</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 text-sm line-through">${product.oldPrice}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {/* Rating */}
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
