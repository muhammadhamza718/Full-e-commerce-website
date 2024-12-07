import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Cart() {
  return (
    <>
      <section className='max-w-7xl mx-auto min-h-screen flex py-28'>
        <div className='flex flex-col gap-16 w-full'>
            <div className='flex gap-4 font-medium Poppins'>
                <p className='text-[#B0B0B0]'>Home</p>
                <p className='text-[#B0B0B0] rotate-12'>/</p>
                <p>Cart</p>
            </div>
            <div >
              <div className='flex flex-col gap-16'> 
                  <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 w-full h-[102px] font-normal text-lg Poppins'>
                    <h3 className='flex items-center'>Product</h3>
                    <h3 className='flex justify-center items-center'>Price</h3>
                    <h3 className='flex justify-center items-center'>Quantity</h3>
                    <h3 className='flex justify-center items-center'>Subtotal</h3>
                  </div>
                  <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 w-full h-[102px] font-normal text-lg Poppins'>
                    <div className='flex gap-4 items-center'>
                      <Image src="/monitor.png" alt="Monitor" width={50} height={50} />
                      <h3 className='flex justify-center items-center'>LCD Monitor</h3>
                    </div>
                    <h3 className='flex justify-center items-center'>$650</h3>
                    <div className='flex items-center justify-center'>
                      <div className='flex items-center gap-4 h-12 w-24 justify-center border-2 border-gray-500 rounded-md'>
                        <h3 className='flex items-center h-6'>01</h3>
                        <Image src="/Up-Down.png" alt="Up-Down Arrow" width={20} height={20} />
                      </div>
                    </div>
                    <h3 className='flex justify-center items-center'>$650</h3>
                  </div>
                  <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 w-full h-[102px] font-normal text-lg Poppins'>
                    <div className='flex gap-4 items-center'>
                      <Image src="/gamepad.png" alt="Monitor" width={50} height={50} />
                      <div>
                        <Image src="/vector.png" alt="Monitor" width={20} height={20} className='absolute p-1 top-[532px] left-[280px] bg-[#DB4444] rounded-full'/>
                      </div>
                      <h3 className='flex justify-center items-center'>h1 Gamepad</h3>
                    </div >
                    <h3 className='flex justify-center items-center'>$550</h3>
                    <div className='flex items-center justify-center'>
                      <div className='flex items-center gap-4 h-12 w-24 justify-center border-2 border-gray-500 rounded-md'>
                        <h3 className='flex items-center h-6'>02</h3>
                        <Image src="/Up-Down.png" alt="Up-Down Arrow" width={20} height={20} />
                      </div>
                    </div>
                    <h3 className='flex justify-center items-center'>$1100</h3>
                  </div>
                  <div className='flex justify-between w-full h-[102px] font-medium text-lg Poppins'>
                    <div className='flex items-center justify-center'>
                      <button className='flex items-center gap-4 py-4 px-12 justify-center border-2 border-gray-500 rounded-md'>Return To Shop</button>
                    </div>
                    <div className='flex items-center justify-center'>
                      <button className='flex items-center gap-4 py-4 px-12 justify-center border-2 border-gray-500 rounded-md'>Update Cart</button>
                    </div>
                  </div>
              </div>
            </div>
            <div className='grid grid-cols-8'>
                <div className='grid grid-cols-4 col-span-4 grid-rows-5 gap-2 w-full'>
                  <input 
                    type="text" 
                    placeholder="Coupon Code"
                    className='flex items-center gap-4 py-4 px-8 col-span-2 justify-center border-2 border-gray-500 rounded-md'
                  />
                  <button className='flex items-center col-span-2 text-white gap-4 py-4 px-16 justify-center bg-[#DB4444] rounded-md'>
                    Apply Coupon
                  </button>
                </div>
                <div className='flex flex-col p-6 gap-4 col-start-6 col-span-3 border-2 justify-center border-black rounded-md'>
                  <h3 className='Poppins text-lg font-medium'>
                    Cart Total
                  </h3>
                  <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                      <h3>Subtotal:</h3>
                      <h3>$1750</h3>
                    </div>
                    <div className='w-full h-px bg-[#B0B0B0]'></div>
                    <div>
                      <h3>Shipping:</h3>
                      <h3>Free</h3>
                    </div>
                    <div className='w-full h-px bg-[#B0B0B0]'></div>
                    <div className='flex justify-between'>
                      <h3>Total:</h3>
                      <h3>$1750</h3>
                    </div>
                    <div className='flex justify-center'>
                      <button className='flex w-4/5 items-center text-white gap-4 justify-center bg-[#DB4444] rounded-md'>
                        <Link href="/Billing" className='w-full py-4 px-16 '>Process to Checkout</Link>
                      </button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
