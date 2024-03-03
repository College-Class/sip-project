import React from 'react'

function HeroSection() {
  return (
  <div className="w-[1391px] h-[444px] flex justify-center items-center gap-[138px]">
    <div className="flex-col justify-start items-start gap-6 inline-flex">
        <div className="text-black text-4xl font-bold ">Beyond Bias, Towards Unity</div>
        <div className="w-[557px] text-black text-lg font-normal ">Embark on a transformative journey with us—beyond biases, towards unity. We are dedicated to breaking down barriers, fostering a world where equality triumphs over discrimination. Join our movement for a future where unity prevails</div>
        <div className="w-[304px] h-[72px] relative">
            <div className="w-[304px] h-[72px] left-0 top-0 absolute bg-slate-900 rounded-xl" />
            <div className="left-[50px] top-[21px] absolute text-white text-24px font-normal ">Register a Complain </div>
        </div>
    </div>
    <div className="w-[696px] h-[444px] bg-gradient-to-br from-red-500 to-blue-950 rounded-2xl" />
</div>
  )
}

export default HeroSection