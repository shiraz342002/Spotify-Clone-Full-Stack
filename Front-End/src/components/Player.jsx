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
        <div className="flex items-center gap-5">
            <p>1:03</p>
        <div className="w-[60vw] bg-gray-300 max-w-[500px] rounded-full cursor-pointer">
            <hr className='h-1 border-none bg-green-700 w-20 rounded-full' />
        </div>
        <p>3:20</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-3 opacity-75 '>
        <img className='w-4' src={assets.plays_icon} alt="" />
        <img className='w-4' src={assets.mic_icon} alt="" />
        <img className='w-4' src={assets.queue_icon} alt="" />
        <img className='w-4' src={assets.speaker_icon} alt="" />
        <img className='w-4' src={assets.volume_icon} alt="" />
        <div className='w-20 bg-slate-50 h-1 cursor-pointer rounded'>
        </div>
        <img className='w-4' src={assets.mini_player_icon} alt="" />
        <img className='w-4' src={assets.zoom_icon} alt="" />
      </div>
    </div>
  )
}

export default Player
