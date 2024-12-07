import React from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Mock product data
const products = [
  { id: 1, image: '/dog-food.png', name: 'Breed Dry Dog Food', price: 100, rating: 4.3, reviews: 80, isNew: false, colorchange: false },
  { id: 2, image: '/camera2.png', name: 'CANON EOS DSLR Camera', price: 360, rating: 4.7, reviews: 95, isNew: false, colorchange: false },
  { id: 3, image: '/laptop.png', name: 'ASUS FHD Gaming Laptop', price: 700, rating: 4.9, reviews: 325, isNew: false, colorchange: false },
  { id: 4, image: '/skincare.png', name: 'Curology Product Set', price: 500, rating: 4.7, reviews: 145, isNew: false, colorchange: false },
  { id: 5, image: '/car.png', name: 'Kids Electric Car', price: 960, rating: 4.6, reviews: 50, isNew: true, colorchange: '/Colour-Change.png' },
  { id: 6, image: '/cleats.png', name: 'Jr. Zoom Soccer Cleats', price: 1160, rating: 4.8, reviews: 35, isNew: false, colorchange: '/Colour-Change1.png' },
  { id: 7, image: '/gamepad3.png', name: 'GP11 Shooter USB Gamepad', price: 660, rating: 4.5, reviews: 100, isNew: true, colorchange: '/Colour-Change2.png' },
  { id: 8, image: '/jacket.png', name: 'Quilted Satin Jacket', price: 550, rating: 4.6, reviews: 88, isNew: false, colorchange: '/Colour-Change3.png' },
];

const ProductSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
        <h2 className="Poppins text-[#DB4444] text-lg font-semibold">Our Products</h2>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-black text-4xl font-semibold mt-6 my-10">Explore Our Products</h1>
        </div>
        <div className="flex gap-6 items-center">
          <button className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
            <FaArrowLeft className="text-black" />
          </button>
          <button className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
            <FaArrowRight className="text-black" />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-md shadow hover:shadow-md relative flex flex-col transition"
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
                <Image src="/Fill-Heart.png" alt="heart" width={30} height={30} />
              </button>
              <button className="bg-white rounded-full shadow hover:shadow-lg">
                <Image src="/Fill-Eye.png" alt="eye" width={30} height={30} />
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

      {/* "View All Products" Button */}
      <div className="text-center mt-12">
        <button className="bg-[#DB4444] text-white py-4 px-12 rounded shadow hover:bg-red-700">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
