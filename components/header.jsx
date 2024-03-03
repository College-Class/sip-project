"use client";
function Header() { 
  return (
    <div className="w-[1440px] h-20 relative">
    <div className="w-[1440px] h-20 left-0 top-0 absolute bg-slate-900" />
    <div className="w-[1392px] left-[24px] top-[12px] absolute justify-between items-center inline-flex">
        <div className="justify-center items-center gap-2 flex">
            <div className="text-white text-lg font-bold">Inequality</div>
        </div>
        <div className="h-14 justify-between items-center flex">
            <div className="px-4 text-white hover:text-emerald-300 text-sm font-medium">Home</div>
            <div className="px-4  hover:text-emerald-300 text-white text-sm font-medium ">Laws</div>
            <div className="px-4  hover:text-emerald-300 text-white text-sm font-medium ">Successful Cases</div>
            <div className="px-4  hover:text-emerald-300 text-white text-sm font-medium ">Be Aware</div>
            <div className="px-4  hover:text-emerald-300 text-white text-sm font-medium ">Read Stories</div>
            <div className="px-[34px] py-[16px] rounded-lg bg-white hover:bg-emerald-300 border-white justify-center items-center flex">
                <div className="text-black text-sm font-semibold ">Share Story</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header