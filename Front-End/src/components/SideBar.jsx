import React from 'react';
import { assets } from "../assets/frontend-assets/assets";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <div className='w-[25%] h-full flex-col p-2 gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col  justify-around'>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img onClick={()=>navigate('/')} className='w-6' src={assets.home_icon} alt="Home Icon" />
          <p onClick={()=>navigate('/')}className='font-bold'>Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className='w-6' src={assets.search_icon} alt="Search Icon" />
          <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='h-[85%] rounded bg-[#121212]'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt="Stack Icon" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3 '>
            <img className='w-5' src={assets.arrow_icon} alt="" />
            <img className='w-5' src={assets.plus_icon} alt="" />
          </div>
          </div>
          <div className="p-4 m-2 bg-[#242424] rounded flex flex-col font-semibold items-start justify-start gap-1 pl-4 ">
           <h1>Create Your FIrst Playlist</h1>
           <p className='font-light'>It's easy we will help you</p>
           <button className='px-4 py-2 bg-white text-[15px] text-black rounded-full mt-5'>Create Playlist</button>
          </div>
          <div className="p-4 m-2 bg-[#242424] rounded flex flex-col font-semibold items-start justify-start gap-1 pl-4 mt-5">
           <h1>Let's find some podcasts to follow </h1>
           <p className='font-light'>We'll keep you updated for the new ones</p>
           <button className='px-4 py-2 bg-white text-[15px] text-black rounded-full mt-5'>Browse Podcast</button>
          </div>
        </div>
      </div>
    
  );
}

export default SideBar;
