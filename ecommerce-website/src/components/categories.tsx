import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const categories = [
  { id: 1, name: 'Phones', icon: '/CellPhone.png', active: false },
  { id: 2, name: 'Computers', icon: '/Computer.png', active: false },
  { id: 3, name: 'SmartWatch', icon: '/SmartWatch.png', active: false },
  { id: 4, name: 'Camera', icon: '/camera.png', active: true }, // Active category
  { id: 5, name: 'HeadPhones', icon: '/Headphone.png', active: false },
  { id: 6, name: 'Gaming', icon: '/Gamepad2.png', active: false },
];

export default function Category() {
  return (
    <>
      <section className="flex items-center max-w-7xl mx-auto w-full py-12 h-[400px]">
        <div className="bg-white flex flex-col w-full">
          {/* Section Header */}
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
            <h2 className="Poppins text-[#DB4444] text-lg font-semibold">Categories</h2>
          </div>
          <div className='flex justify-between'>
            <div>
              <h1 className="text-black text-4xl font-semibold mt-6">Browse By Category</h1>
            </div>
            <div className='flex gap-6 items-center'>
              <button className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
                <FaArrowLeft className="text-black" />
              </button>
              <button className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
                <FaArrowRight className="text-black" />
              </button>
            </div>
          </div>

          {/* Categories Section */}
          <div className="flex justify-between items-center mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`flex flex-col items-center justify-center border border-gray-300 ${
                    category.active ? 'bg-[#DB4444] text-white' : 'bg-white'
                  } rounded-md p-4 hover:shadow-lg`}
                >
                  <img
                    src={category.icon}
                    alt={`${category.name} Icon`}
                    className="w-16 h-16 mb-4"
                  />
                  <span
                    className={`text-lg font-normal Poppins ${
                      category.active ? 'text-white' : 'text-black font-normal Poppins'
                    }`}
                  >
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto bg-gray-300 h-px my-4"></div>
    </>
  );
}
