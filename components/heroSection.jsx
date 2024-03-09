import React from 'react'

function HeroSection() {
  return (
    <div className="grid  lg:grid-cols-2 px-2 lg:my-32 my-16 h-444px w-full lg:justify-between justify-center items-center">
      <div className="p-6">
        <div className="text-black lg:text-4xl text-2xl font-bold   ">
          Beyond Bias, Towards Unity
        </div>
   
        <div className=" lg:w-[557px]  lg:max-w-lg sm:max-w-sm text-black text-lg font-normal ">
          Embark on a transformative journey with us—beyond biases, towards
          unity. We are dedicated to breaking down barriers, fostering a world
          where equality triumphs over discrimination. Join our movement for a
          future where unity prevails.
        </div>
        <button class="mt-4 bg-slate-900 lg:w-[250px] lg:h-[60px] w-[200px] h-[56px] rounded-lg hover:bg-red-50 border border-current hover:text-black text-white font-medium  text-sm py-2 px-4 ">
          Register a Complain
        </button>
      </div>
      <div className="lg:w-40% lg:h-[444px] w-screen-30 h-72 lg:mt-0 m-8 bg-gradient-to-br  from-red-500 to-blue-950 rounded-2xl" />
    </div>
  )
}

export default HeroSection
