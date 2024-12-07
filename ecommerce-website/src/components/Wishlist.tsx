import React from 'react';
import Image from 'next/image';

// Mock product data
const products = [
  { id: 2, image: '/gucci-bag.png', name: 'Gucci duffle bag', discount: 35, price: 960, oldPrice: 1160, rating: 4.8, reviews: 65},
  { id: 3, image: '/cpu-cooler.png', name: 'RGB liquid CPU Cooler', price: 1960, oldPrice: 170, rating: 4.7, reviews: 65},
  { id: 7, image: '/gamepad3.png', name: 'GP11 Shooter USB Gamepad', price: 550, rating: 4.5, reviews: 100, colorchange: '/Colour-Change2.png'},
  { id: 8, image: '/jacket.png', name: 'Quilted Satin Jacket', price: 750, rating: 4.6, reviews: 88, isNew: false, colorchange: '/Colour-Change3.png'},
];

const product1 = [
    { id: 3, image: '/laptop.png', name: 'ASUS FHD Gaming Laptop', discount : 35 ,discount1: 1160, price: 960, rating: 4.9, reviews: 325, isNew: false, colorchange: false},
    { id: 3, image: '/monitor.png', name: 'IPS LCD Gaming Monitor', price: 1160, oldPrice: 400, rating: 5, reviews: 99},
    { id: 1, image: '/gamepad.png', name: 'HAVIT HV-G92 Gamepad', price: 560, oldPrice: 160, rating: 5, reviews: 88, isNew: true},
    { id: 2, image: '/keyboard.png', name: 'AK-900 Wired Keyboard', price: 200, oldPrice: 1160, rating: 4.8, reviews: 75},
]

const Wishlist = () => {
  return (
    <section className="max-w-7xl mx-auto py-24 px-4 min-h-screen">
      {/* Section Header */}
      <div className="flex justify-between items-center gap-4 mb-24">
        <h2 className="Poppins text-xl font-medium">Wishlist (4)</h2>
        <button className='Poppins text-lg font-medium px-8 py-4 rounded-md border  hover:shadow-lg border-black'>
          Move All To Bag
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-md relative flex flex-col transition"
          >
            {product.isNew && (
              <div className="Poppins absolute top-2 left-2 z-10 flex justify-center items-center w-14 bg-[#00FF66] text-white text-xs font-light px-2 py-1 rounded">
                New
              </div>
            )}

            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-56 pb-14 object-contain bg-gray-100 rounded-md p-4"
                width={500}
                height={500}
              />
              {/* Hover "Add to Cart" Button */}
              <button className="absolute bottom-0 inset-x-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition">
                Add to Cart
              </button>
            </div>

            {/* Wishlist and Quick View Buttons */}
            <div className="absolute top-6 right-6 flex flex-col space-y-2">
              <button className="bg-white rounded-full shadow hover:shadow-lg">
                <Image src="/Dustbin.png" alt="eye" width={30} height={30} />
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <h3 className="text-black text-base font-medium">{product.name}</h3>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#DB4444] text-lg font-semibold">${product.price}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {/* Rating Stars */}
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>
              </div>

              {product.discount ? (
                    <div>
                      <div className="Poppins absolute top-5 left-5 z-10 flex justify-center items-center w-14 bg-[#DB4444] text-white text-xs font-light px-2 py-1 rounded">
                        -{product.discount}%
                      </div>
                    </div>
                  ) : null}

              {/* Color Change */}
              <div>
              {product.colorchange && typeof product.colorchange === 'string' ? (
                <div className="mt-2">
                    <Image
                    src={product.colorchange}
                    alt={`Color Change - ${product.name}`}
                    width={50}
                    height={50}
                    className="object-contain"
                    />  
                </div>
              ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ______________________________________________________________________________________________________________________________________________________________________ */}
        
      <div className="flex justify-between items-center gap-4 mt-24 mb-24">
        <div className='flex items-center gap-4'>
        <div className="w-5 h-12 bg-[#DB4444] rounded-md"></div>
        <h2 className="Poppins text-black text-xl font-normal">Just For You</h2>
        </div>
        <button className=" text-black px-12 py-4 border border-black hover:shadow-lg rounded-md text-lg font-medium">
          See All
        </button>
      </div>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {product1.map((product1) => (
          <div
            key={product1.id}
            className="group bg-white rounded-md relative flex flex-col transition"
          >

            {product1.isNew && (
              <div className="Poppins absolute top-2 left-2 z-10 flex justify-center items-center w-14 bg-[#00FF66] text-white text-xs font-light px-2 py-1 rounded">
                New
              </div>
            )}

            <div className="relative">
              <Image
                src={product1.image}
                alt={product1.name}
                className="w-full h-56 pb-14 object-contain bg-gray-100 rounded-md p-4"
                width={500}
                height={500}
              />
              {/* Hover "Add to Cart" Button */}
              <button className="absolute bottom-0 inset-x-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition">
                Add to Cart
              </button>
            </div>

            {/* Wishlist and Quick View Buttons */}
            <div className="absolute top-6 right-6 flex flex-col space-y-2">
              <button className="bg-white rounded-full shadow hover:shadow-lg">
                <Image src="/Fill-Eye.png" alt="eye" width={30} height={30} />
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <h3 className="text-black text-base font-medium">{product1.name}</h3>
              <div className="flex flex-col mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#DB4444] text-lg font-semibold">${product1.price}</span>
                  {product1.discount ? (
                    <div>
                    <div className="Poppins absolute top-5 left-5 z-10 flex justify-center items-center w-14 bg-[#DB4444] text-white text-xs font-light px-2 py-1 rounded">
                      -{product1.discount}%
                    </div>
                      <span className="text-gray-500 text-lg font-medium line-through">${product1.discount1}</span>
                    </div>
                  ) : null}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {/* Rating Stars */}
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(product1.rating))}
                    {'☆'.repeat(5 - Math.floor(product1.rating))}
                  </div>
                  <span className="text-gray-500 text-sm">({product1.reviews})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
