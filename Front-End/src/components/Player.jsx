import React from 'react'
import {assets, songsData} from "../assets/frontend-assets/assets"
const Player = () => {
  return (
    <div className='h-[10%] flex bg-black items-center justify-between text-white px-4 '>
      <div className='hidden lg:flex item-center gap-4 '>
      <img className='w-12' src={songsData[0].image} alt="" />
        <div>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,15)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className="flex gap-4">
            <img className='cursor-pointer w-4' src={assets.shuffle_icon} alt="" />
            <img className='cursor-pointer w-4' src={assets.prev_icon} alt="" />
            <img className='cursor-pointer w-4' src={assets.play_icon} alt="" />
            <img className='cursor-pointer w-4' src={assets.next_icon} alt="" />
            <img className='cursor-pointer w-4' src={assets.loop_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Player
