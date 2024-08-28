import React from 'react';
import { assets } from "../assets/frontend-assets/assets";

const SideBar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex flex-col gap-4 text-white lg:flex hidden'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col gap-4 justify-around'>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className='w-6' src={assets.home_icon} alt="Home Icon" />
          <p className='font-bold'>Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className='w-6' src={assets.search_icon} alt="Search Icon" />
          <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='h-[85%] rounded bg-[#121212] z-10'>  {/* Added z-index */}
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-3' src={assets.stack_icon} alt="Stack Icon" />
            <p className='font-semibold'>Your Library</p>
          </div>    
        </div>
      </div>
    </div>
  );
}

export default SideBar;
