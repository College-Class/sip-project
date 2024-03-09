import React from 'react'

function LawContainer() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mx-8 lg:mt-16 mt-8  items-center justify-center">
      <div className=" bg-black grid grid-cols-1 items-center  rounded-xl lg:h-[220px] h-[200px] lg:relative">
        <h1 className="text-white lg:px-0 lg:pt-0 px-2 pt-2 lg:absolute left-6 top-6 lg:text-4xl text-2xl">
          Law Heading
        </h1>
        <p className="text-white lg:px-0 lg:pt-0 px-2 pt-2 top-20 right-6 left-6 lg:absolute">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
          doloribus dicta hic vitae nemo a fugiat animi expedita unde? Veniam in
          debitis facilis 
          repellendus!
        </p>
        <span className='text-blue-500 lg:px-0 lg:pt-0 px-2 pt-2 hover:text-red-50 lg:absolute bottom-6 left-6 text-lg '>Read More</span>
      </div>
    
    </div>
  )
}

export default LawContainer
