import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';


const categories = [
    { name: "Woman’s Fashion", href: "#", hasArrow: true },
    { name: "Men’s Fashion", href: "#", hasArrow: true },
    { name: "Electronics", href: "#" },
    { name: "Home & Lifestyle", href: "#" },
    { name: "Medicine", href: "#" },
    { name: "Sports & Outdoor", href: "#" },
    { name: "Baby’s & Toys", href: "#" },
    { name: "Groceries & Pets", href: "#" },
    { name: "Health & Beauty", href: "#" },
];

export default function HeroSection(): React.ReactElement {
    return (
      <section id='hero-section' className='flex justify-center items-center max-w-7xl mx-auto w-full h-[435px]'>
        <div className='flex justify-between items-end w-full gap-4 h-full'>
            <div className="flex flex-col gap-4 w-72">
                <ul className="space-y-1">
                    {categories.map((category, index) => (
                    <button
                        key={index}
                        className="flex justify-between items-center w-full text-base font-medium text-black py-2 pr-4 pl-1 bg-gray-100 hover:bg-gray-200 rounded-md"
                        // onClick={() => alert(`${category.name} clicked!`)} 
                    >
                        {category.name}
                        {category.hasArrow && <span className="text-gray-400 font-extrabold text-lg">&gt;</span>}
                    </button>
                    ))}
                </ul>
            </div>
            <div className="w-px bg-gray-300 h-full"></div>
            <div className='flex flex-col justify-between items-center w-full'>
                <div className='w-full min-h-full bg-black flex flex-col pt-4'>
                    <div className='flex'>
                        <div className='flex flex-col flex-1 justify-center gap-6 pl-16'>
                            <div className='flex items-center gap-8 font-light text-white'>
                                <Image src='/Apple_logo.png' alt='hero' width={40} height={49} />
                                <h1 className='Poppins text-lg'>iPhone 14 Series</h1>
                            </div>
                            <div className='Poppins flex flex-col gap-3 text-white pr-16 text-6xl'>
                                <h1>Up to 10%</h1>
                                <h1>off Voucher</h1>
                            </div>
                            <div className='flex'>
                            <Link href="/" className="Poppins w-fit text-white text-lg rounded flex items-center font-light hover:underline hover:underline-offset-8">
                                Shop Now
                                <FaArrowRight className="ml-2 " />
                            </Link>
                            </div>
                        </div>
                        <div className='flex w-6/12'>
                            <Image src='/hero_image.png' alt='hero' width={500} height={500} className='h-full' />
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-black w-full'>
                        <svg width="150" height="50" viewBox="0 0 150 50">
                            <circle cx="30" cy="25" r="6" fill="#3E4042" />
                            <circle cx="55" cy="25" r="6" fill="#3E4042" />
                            {/* <circle cx="85" cy="25" r="6" fill="#3E4042" /> */}
                            <circle cx="105" cy="25" r="6" fill="#3E4042" />
                            <circle cx="130" cy="25" r="6" fill="#3E4042" />
                            <circle cx="80" cy="25" r="7" fill="#999" />
                            <circle cx="80" cy="25" r="5" fill="#f00" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }