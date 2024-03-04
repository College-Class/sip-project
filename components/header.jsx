'use client'
import { FaBars, FaBan } from 'react-icons/fa';
function Header() {
  return (
    <header className="bg-slate-900  py-5  sticky top-0 z-10 min-w-screen">
      {/* TODO : Make mobile responsive nav bar */}
      <nav className="lg:hidden flex justify-between px-4 items-center">
        <div className=" flex items-center gap-2 text-white font-medium text-xl ">  <FaBan className='text-white ' />Inequality </div>
 <FaBars className='text-white  ' />
      </nav>

      <nav className="lg:flex hidden justify-between px-4 items-center">
         <div className=" flex items-center gap-2 text-white font-medium text-xl ">  <FaBan className='text-white ' />Inequality </div>
        <div className="lg:flex hidden items-center ">
          <ul className="flex gap-2">
            <li className="inline-block text-white cursor-pointer px-4 py-2  hover:text-red-100 ">
              Home
            </li>
            <li className="inline-block text-white cursor-pointer px-4 py-2 hover:text-red-100 ">
              Laws
            </li>
            <li className="inline-block text-white cursor-pointer px-4 py-2 hover:text-red-100 ">
              Successful Laws
            </li>
            <li className="inline-block text-white cursor-pointer px-4 py-2 hover:text-red-100 ">
              Be Aware
            </li>
            <li className="inline-block text-white cursor-pointer px-4 py-2 hover:text-red-100 ">
              Read Stories
            </li>
          </ul>
          <button className="text-grey-100 bg-white ml-8 py-3 px-4 rounded-lg hover:bg-red-100   cursor-pointer">
            Share Story
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
