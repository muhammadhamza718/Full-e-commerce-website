import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Billing() {
  return (
    <>
      <section className='max-w-7xl mx-auto min-h-screen flex py-28'>
        <div className='flex flex-col gap-16 w-full'>
          <div className='flex gap-4 font-medium Poppins'>
            <p className='text-[#B0B0B0]'>Account</p>
            <p className='text-[#B0B0B0] rotate-12'>/</p>
            <p className='text-[#B0B0B0]'>My Account</p>
            <p className='text-[#B0B0B0] rotate-12'>/</p>
            <p className='text-[#B0B0B0]'>Product</p>
            <p className='text-[#B0B0B0] rotate-12'>/</p>
            <p className='text-[#B0B0B0]'>View Cart</p>
            <p className='text-[#B0B0B0] rotate-12'>/</p>
            <p className='text-black'>CheckOut</p>
          </div>
          <div>
            <div>
              <h3 className='text-4xl font-medium Poppins w-full'>Billing Details</h3>
            </div>
            <div className='mt-8'>
                <form className='space-y-6'>
                    <div>
                    <label htmlFor="First Name" className='text-gray-300 flex mb-4'>First Name<p className='text-[#DB4444] opacity-35'>*</p></label>
                    <input type="text" className='bg-[#F5F5F5] w-full h-12 rounded-md'/>
                    </div>
                    <div>
                    <label htmlFor="First Name" className='text-gray-300 flex mb-4'>Company Name</label>
                    <input type="text" className='bg-[#F5F5F5] w-full h-12 rounded-md'/>
                    </div>
                    <div>
                    <label htmlFor="First Name" className='text-gray-300 flex mb-4'>Street Address<p className='text-[#DB4444] opacity-35'>*</p></label>
                    <input type="text" className='bg-[#F5F5F5] w-full h-12 rounded-md'/>
                    </div>
                    <div>
                    <label htmlFor="First Name" className='text-gray-300 flex mb-4'>Apartment, floor, etc. (optional)</label>
                    <input type="text" className='bg-[#F5F5F5] w-full h-12 rounded-md'/>
                    </div>
                    <div>
                    <label htmlFor="First Name" className='text-gray-300 flex mb-4'>Town/City<p className='text-[#DB4444] opacity-35'>*</p></label>
                    <input type="text" className='bg-[#F5F5F5] w-full h-12 rounded-md'/>
                    </div>
                    <div>
                    <label htmlFor="First Name" className='text-gray-300 flex mb-4'>Phone Number<p className='text-[#DB4444] opacity-35'>*</p></label>
                    <input type="text" className='bg-[#F5F5F5] w-full h-12 rounded-md'/>
                    </div>
                    <div>
                    <label htmlFor="First Name" className='text-gray-300 flex mb-4'>Email Address<p className='text-[#DB4444] opacity-35'>*</p></label>
                    <input type="text" className='bg-[#F5F5F5] w-full h-12 rounded-md'/>
                    </div>
                    <div className='flex gap-4'>
                        <Image src="/icon-checkbox.png" alt="checkout" width={20} height={20} className='opacity-45'/>
                        <h3>Save this information for faster check-out next time</h3>
                    </div>
                    <div>
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
                                <Link href="/Billing" className='w-full py-4 px-16'>
                                Process to Checkout
                                </Link>
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
