import React from 'react'
import { assets } from '../assets/frontend-assets/assets'

const Navbar = () => {
  return (
    <>
    <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
            <img className='w-8 bg-black rounded-2xl p-2 cursor-pointer' src={assets.arrow_left} alt="" />
            <img className='w-8 bg-black rounded-2xl p-2 cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className="flex items-center gap-4">
            <p className='bg-white text-black px-4 py-1 text-[15px] cursor-pointer rounded-2xl hidden md:block'>Explore Premium</p>
            <p className='px-3 py-1 bg-black text-[15px] rounded-2xl cursor-pointer'>Install App</p>
            <p className='bg-orange-500 text-black w-8 h-8 rounded-full flex justify-center items-center'>S</p>
        </div>
    </div>
    <div className="flex items-center gap-2 mt-4">
        <p className='bg-white text-black py-1 px-4 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black py-1 px-4 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black py-1 px-4 rounded-2xl cursor-pointer'>Podcasts</p>
    </div>
            
    </>
  )
}

export default Navbar
