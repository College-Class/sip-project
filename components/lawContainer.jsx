import React from 'react'

function LawContainer() {
  return (
 <div className="flex justify-center items-center mx-[24px] my-[96px] w-[1337px] h-[450px] relative">
    <div className="w-[1337px] h-52 left-0 top-0  flex  ">
        <div className="w-[650px]  ">
            <div className="w-[650px] h-52 left-0 top-0 absolute bg-slate-900 rounded-2xl border-2 border-stone-900" />
            <div className="w-[577px] h-[153px] left-[36px] top-[16px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-white text-[32px] font-bold ">Law Heading</div>
                <div className="w-[564px] h-[60px] text-white text-lg font-normal">This is the law subtitles.This is the law subtitles.This is the law subtitles.This is the law subtitles.This is the law subtitles.This is the law subtitles.</div>
                <div className= "py-[16px] hover:hover:text-emerald-300 text-blue-500 text-lg font-bold ">Read More</div>
            </div>
        </div>
      
    </div>

</div>
  )
}

export default LawContainer
