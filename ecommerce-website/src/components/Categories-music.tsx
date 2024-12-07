import React from 'react';

export default function CategoriesMusic() {
  return (
    <>
      <section className="flex items-center max-w-7xl mx-auto w-full py-12 h-[500px]">
        <div className="flex flex-col justify-between items-center w-full">
          <div className="w-full min-h-full bg-black flex flex-col py-8 pr-4">
            <div className="flex">
              {/* Left Side Content */}
              <div className="flex flex-col flex-1 justify-center gap-8 pl-16">
                <div className="flex items-center gap-8 font-light text-white">
                  <h1 className="Poppins text-sm font-semibold text-[#00FF66]">
                    Categories
                  </h1>
                </div>
                <div className="Poppins flex flex-col gap-3 text-white pr-16 text-5xl font-medium">
                  <h1>Enhance Your</h1>
                  <h1>Music Experience</h1>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-black text-lg flex gap-6">
                    <div className="flex flex-col justify-center items-center bg-white rounded-full h-[68px] w-[68px] Poppins">
                      <span className='text-base font-semibold h-4'>23</span>
                      <span className="text-sm font-normal w-14 justify-center flex">Hours</span>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white rounded-full h-[68px] w-[68px] Poppins">
                      <span className='text-base font-semibold h-4'>05</span>
                      <span className="text-sm font-normal w-14 justify-center flex">Days</span>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white rounded-full h-[68px] w-[68px] Poppins">
                      <span className='text-base font-semibold h-4'>59</span>
                      <span className="text-sm font-normal w-14 justify-center flex">Minutes</span>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white rounded-full h-[68px] w-[68px] Poppins">
                      <span className='text-base font-semibold h-4'>35</span>
                      <span className="text-sm font-normal w-14 justify-center flex">Seconds</span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <button className="Poppins text-white bg-[#00FF66] px-12 py-4 rounded text-sm hover:bg-[#00ff66e7]">
                    Buy Now!
                  </button>
                </div>
              </div>
              {/* Right Side Image with Glow Effect */}
              <div className="relative flex w-6/12 justify-end">
                <div className="absolute -inset-2 rounded-full bg-[#D9D9D9] blur-3xl opacity-30"></div>
                <img
                  src="/jbl_speaker.png"
                  alt="JBL Speaker"
                  className="relative z-10 w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
