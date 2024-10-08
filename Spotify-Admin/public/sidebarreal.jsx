import React from 'react'
import { assets } from '../assets/assets'

const SideBar = () => {
  return (
    <div className='bg-[#003A10] min-h-screen pl-[4vw]'>
        <img className='mt-5 w-[max(10vw,100px)] hidden sm:block ' src={assets.logo} alt="" />
        <img className='mt-5 w-[max(5vw,40px)] block mr-5 sm:hidden' src={assets.logo_small} alt="" />
        
        <div className="flex flex-col gap-5 mt-10">
            <div className="flex item-center gap-2.5 text-gray-800 bg-white border-black p-2 pr-[max(8vw,10px)] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <div className='flex flex-col gap-5 '>
                <div>Add song</div>
                <div>Add Album</div>
                <div>View Albums</div>
                <div>View songs</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar