import React from 'react'

function GalleryView() {
  return (
<div className="w-[1349px] h-[935px] relative">
    <div className="w-[1347px] h-[444px] left-[2px] top-0 absolute justify-start items-start gap-[47px] inline-flex">
        <div className="w-[650px] h-[444px] bg-gradient-to-br from-red-500 to-blue-950 rounded-2xl" />
        <div className="w-[650px] h-[444px] bg-gradient-to-br from-red-500 to-blue-950 rounded-2xl" />
    </div>
    <div className="w-[1347px] h-[444px] left-0 top-[491px] absolute justify-start items-start gap-[47px] inline-flex">
        <div className="w-[650px] h-[444px] bg-gradient-to-br from-red-500 to-blue-950 rounded-2xl" />
        <div className="w-[650px] h-[444px] bg-gradient-to-br from-red-500 to-blue-950 rounded-2xl" />
    </div>
</div>
  )
}

export default GalleryView