"use client";
import Image from 'next/image'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
}

export default function FullService() {
  return (
    <>
        <section className="max-w-7xl flex justify-center items-center mx-auto py-32 px-4">
            <div className='flex justify-between gap-24 h-[250px]'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <Image src="/Services.png" alt="service" width={75} height={75} />
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='Poppins text-black text-2xl font-semibold uppercase'>Free And Fast Delivery</h1>
                        <p className='Poppins text-black'>Free delivery for all orders over $140</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <Image src="/Services1.png" alt="service" width={75} height={75} />
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='Poppins text-black text-2xl font-semibold uppercase'>24/7 CUSTOMER SERVICE</h1>
                        <p className='Poppins text-black'>Friendly 24/7 customer support</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <Image src="/Services.png" alt="service" width={75} height={75} />
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='Poppins text-black text-2xl font-semibold uppercase'>MONEY BACK GUARANTEE</h1>
                        <p className='Poppins text-black'>We reurn money within 30 days</p>
                    </div>
                </div>
            </div>
            <div className='relative w-px top-44 left-28'>
                <button 
                    className='flex justify-center items-center bg-gray-100 h-14 w-14 rounded-full'
                    onClick={handleScrollToTop}
                >
                    <FaArrowUp />
                </button>
            </div>
        </section>
    </>
  )
}
