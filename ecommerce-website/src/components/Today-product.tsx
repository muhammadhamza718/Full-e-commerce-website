import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import ProductCard from './ProductCard';

  const products = [
    {
      id: 1,
      image: '/gamepad.png',
      name: 'HAVIT HV-G92 Gamepad',
      discount: 40,
      price: 120,
      oldPrice: 160,
      rating: 5,
      reviews: 88,
    },
    {
      id: 2,
      image: '/keyboard.png',
      name: 'AK-900 Wired Keyboard',
      discount: 35,
      price: 960,
      oldPrice: 1160,
      rating: 4.8,
      reviews: 75,
    },
    {
      id: 3,
      image: '/monitor.png',
      name: 'IPS LCD Gaming Monitor',
      discount: 30,
      price: 370,
      oldPrice: 400,
      rating: 5,
      reviews: 99,
    },
    {
      id: 4,
      image: '/chair.png',
      name: 'S-Series Comfort Chair',
      discount: 25,
      price: 375,
      oldPrice: 400,
      rating: 4.5,
      reviews: 105,
    },
  ];

export default function TodayProduct() {
  return (
    <>
        <section className='flex items-center max-w-7xl mx-auto w-full h-[750px]'>
            <div className="bg-white flex flex-col w-full">
                <div className='flex items-center gap-4'>
                    <div className='w-5 h-10 bg-[#DB4444] rounded-md'></div>
                    <h2 className="Poppins text-[#DB4444] text-lg font-semibold">Today's</h2>
                </div>
                <div className='flex justify-between'>
                    <div className="flex space-x-4 mt-4 gap-8">
                        <h1 className="text-black text-4xl font-semibold flex justify-end items-end">Flash Sales</h1>
                        <div className='flex gap-6'>
                            <div className="flex flex-col-reverse">
                                <span className="text-black text-4xl font-bold">03</span>
                                <span className="text-black text-sm">Days</span>
                            </div>
                                <span className="flex justify-center items-center text-[#E07575] text-2xl font-bold">:</span>
                            <div className="flex flex-col-reverse items-center">
                                <span className="text-black text-4xl font-bold">23</span>
                                <span className="text-black text-sm">Hours</span>
                            </div>
                                <span className="flex justify-center items-center text-[#E07575] text-2xl font-bold">:</span>
                            <div className="flex flex-col-reverse items-center">
                                <span className="text-black text-4xl font-bold">19</span>
                                <span className="text-black text-sm">Minutes</span>
                            </div>
                                <span className="flex justify-center items-center text-[#E07575] text-2xl font-bold">:</span>
                            <div className="flex flex-col-reverse items-center">
                                <span className="text-black text-4xl font-bold">56</span>
                                <span className="text-black text-sm">Seconds</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-6 space-x-2">
                        <button className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
                            <span className="text-black">
                                <FaArrowLeft />
                            </span>
                        </button>
                        <button className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
                            <span className="text-black">
                                <FaArrowRight />
                            </span>
                        </button>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
                <div className='flex justify-center items-center mt-8'>
                    <button className='Poppins bg-[#DB4444] hover:bg-red-600 text-white px-10 py-4 rounded-md'>View All Products</button>
                </div>
            </div>
        </section>
        <div className="max-w-7xl mx-auto bg-gray-300 h-px"></div>
    </>
  )
}
