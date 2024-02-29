"use client";
function Header() { 
  return (
    <div className="w-[1440px] h-20 relative">
    <div className="w-[1440px] h-20 left-0 top-0 absolute bg-slate-900" />
    <div className="w-[1392px] left-[24px] top-[12px] absolute justify-between items-center inline-flex">
        <div className="justify-center items-center gap-2 flex">
            <div className="text-white text-lg font-bold font-['Montserrat']">Inequality</div>
        </div>
        <div className="h-14 justify-between items-center flex">
            <div className="text-emerald-300 text-lg font-medium font-['Montserrat']">Home</div>
            <div className="text-white text-lg font-medium font-['Montserrat']">Laws</div>
            <div className="text-white text-lg font-medium font-['Montserrat']">Successful Cases</div>
            <div className="text-white text-lg font-medium font-['Montserrat']">Be Aware</div>
            <div className="text-white text-lg font-medium font-['Montserrat']">Read Stories</div>
            <div className="px-[34px] py-[17px] rounded-2xl border-2 border-white justify-center items-center flex">
                <div className="text-white text-lg font-semibold font-['Montserrat']">Share Story</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header