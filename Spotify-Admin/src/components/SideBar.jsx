import React from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
const SideBar = () => {
 
  return (
    <div className="bg-[#003A10] min-h-screen p-4 sm:pl-6">
      <div className="mb-6">
        <img 
          className="w-[max(10vw,100px)] hidden sm:block" 
          src={assets.logo} 
          alt="Logo"
        />
        <img 
          className="w-[max(5vw,40px)] block sm:hidden" 
          src={assets.logo_small} 
          alt="Logo Small"
        />
      </div>
      <div className="flex flex-col gap-5 mt-10 cursor-pointer">
        <NavLink to={('/add-song')} className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[4px_4px_#13f226] text-sm font-medium'>
            <img src={assets.add_song} className='w-5 cursor-pointer' alt="" />
            <p className='hidden sm:block cursor-pointer'>Add Song</p>
        </NavLink>
        <NavLink to={('/list-song')} className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[4px_4px_#13f226] text-sm font-medium'>
            <img src={assets.song_icon} className='w-5 cursor-pointer' alt="" />
            <p className='hidden sm:block cursor-pointer'>List Songs</p>
        </NavLink> 
        <NavLink to={('/add-album')} className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[4px_4px_#13f226] text-sm font-medium'>
            <img src={assets.add_album} className='w-5 cursor-pointer' alt="" />
            <p className='hidden sm:block cursor-pointer'>Add Album</p>
        </NavLink>
        <NavLink to={('/list-album')} className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[4px_4px_#13f226] text-sm font-medium'>
            <img src={assets.album_icon} className='w-5 cursor-pointer' alt="" />
            <p className='hidden sm:block cursor-pointer'>List Album</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
