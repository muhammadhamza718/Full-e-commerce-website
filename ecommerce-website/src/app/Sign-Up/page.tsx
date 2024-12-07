import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

export default function CreateAccount() {
  return (
    <>
      <Navbar />
      <section id='SignUp' className='min-h-screen'>
        <div className='flex justify-between'>
          {/* Side Image */}
          <div className=' flex justify-start'>
            <Image src='/Side-image.jpg' alt='hero' width={1000} height={1000} className='h-auto pb-28 pt-14 object-contain' />
          </div>

          {/* Form Section */}
          <div className='flex justify-center items-center w-full md:w-[430px] mr-48'>
            <div className="min-h-screen flex items-center w-full px-4">
              <div className="bg-white flex flex-col w-full">
              <h2 className="text-[45px] font-medium mb-4">Create an account</h2>
                  <form>
                      <div className="mb-4">
                          <label htmlFor="name" className="Poppins block text- font-medium text-gray-700 mb-12">
                              Enter Your details below
                          </label>
                          <input
                          type="text"
                          id="name"
                          placeholder='Name'
                          className="mt-1 py-2 w-full border-b-2 text-black Poppins border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
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

                      <button
                          type="submit"
                          className="Poppins bg-[#DB4444] hover:bg-[#c93f3f] text-white font-light w-full py-4 mt-4 rounded-md"
                      >
                          Create Account
                      </button>
                      <button
                          type="submit"
                          className="Poppins bg-white text-black font-medium w-full py-4 mt-4 rounded-md flex items-center justify-center gap-4"
                      >
                          <Image src='/Icon-Google.png' alt='hero' width={20} height={20} />
                          Sign Up with Google
                      </button>
                  </form>

                  <div className="flex justify-center items-center gap-4 mt-4 text-center">
                      <p>Already have account?</p>
                      <a href="/Login-In" className="text-black hover:underline hover:underline-offset-8">
                          Log in
                      </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
