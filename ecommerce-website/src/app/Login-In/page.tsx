import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

export default function CreateAccount() {
  return (
    <>
      <Navbar />
      <section className='min-h-screen'>
        <div className='flex justify-between'>
          {/* Side Image */}
          <div className=' flex justify-start'>
            <Image src='/Side-image.jpg' alt='hero' width={1000} height={1000} className='h-auto pb-28 pt-14 object-contain' />
          </div>

          {/* Form Section */}
          <div className='flex justify-center items-center w-full md:w-[450px] mr-48'>
            <div className="min-h-screen flex items-center w-full px-4">
              <div className="bg-white flex flex-col w-full">
              <h2 className="text-[45px] font-medium mb-4">Login in to Exclusive</h2>
                  <form>
                      <div className="mb-4">
                          <label htmlFor="name" className="Poppins block text- font-medium text-gray-700 mb-8">
                              Enter Your details below
                          </label>
                      </div>

                      <div className="mb-4">
                          <input
                          type="text"
                          id="email"
                          placeholder='Email or Phone Number'
                          className="mt-1 py-2 w-full border-b-2 text-black Poppins border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                      </div>

                      <div className="mb-4">
                          <input
                          type="password"
                          id="password"
                          placeholder='Password'
                          className="mt-1 py-2 w-full border-b-2 text-black Poppins border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                      </div>

                      <div className='flex justify-between items-center mt-10'>
                          <button
                              type="submit"
                              className="Poppins bg-[#DB4444] hover:bg-[#c93f3f] w-36 rounded-md"
                          >
                              <Link href='/pages' className='flex justify-center items-center w-full text-white font-light py-4 Poppins'>Login</Link>
                          </button>

                          <h1 className='Poppins text-[#DB4444] hover:underline hover:underline-offset-4 hover:cursor-pointer'>Forget Password?</h1>
                      </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}