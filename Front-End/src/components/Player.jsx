import React, { useContext } from 'react'
import {assets} from "../assets/frontend-assets/assets"
import { PlayerContext } from '../context/PlayerContext'
import { useState } from 'react'
const Player = () => {


  const {seekBar,seekBg,play,pause,playStatus,track,time,next,previous,seekSong,audioRef,volumeBgRef} = useContext(PlayerContext)
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const toggleMute=()=>{
    if(muted){
      setVolume(1)
      audioRef.current.volume=1
      setMuted(false)
    }else{
      setVolume(0);
      audioRef.current.volume = 0;
      setMuted(true);
    }
  }
  const handleVolumeChange = (e) => {
    const newVolume = e.nativeEvent.offsetX / e.currentTarget.offsetWidth;
    
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    if (newVolume === 0) {
      setMuted(true);
    } else {
      setMuted(false);
    }
  };
  
  return track? (
    <div className='h-[10%] flex bg-black items-center justify-between text-white px-4 '>
      <div className='hidden lg:flex item-center gap-4 '>
      <img className='w-12' src={track.image} alt="" />
        <div>
            <p>{track.name}</p>
            <p>{track.desc.slice(0,15)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className="flex gap-4">
            <img className='cursor-pointer w-4' src={assets.shuffle_icon} alt="" />
            <img onClick={()=>previous()} className='cursor-pointer w-4' src={assets.prev_icon} alt="" />
            {
              playStatus?<img onClick={pause}  className='cursor-pointer w-4' src={assets.pause_icon} alt="" />:
              <img onClick={play}  className='cursor-pointer w-4' src={assets.play_icon} alt="" />
            }
            <img onClick={()=>next()} className='cursor-pointer w-4' src={assets.next_icon} alt="" />
            <img className='cursor-pointer w-4' src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
        <div ref={seekBg} onClick={(e)=>seekSong(e)}  className="w-[60vw] bg-gray-300 max-w-[500px] rounded-full cursor-pointer">
            <hr ref={seekBar} className='h-2 border-none bg-green-700 w-0 rounded-full' />
        </div>
        <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-3 opacity-75 '>
        <img className='w-4 cursor-pointer' src={assets.plays_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.mic_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.queue_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt="" />
        <img onClick={toggleMute} className='w-4 cursor-pointer' src={muted?assets.volume_off:assets.volume_icon} alt="" />
        <div ref={volumeBgRef} onClick={handleVolumeChange} className='w-20 bg-slate-50 h-1 cursor-pointer rounded'>
          <div className='h-1 bg-green-700 rounded' style={{ width: `${volume * 100}%` }}></div>
        </div>
        <img className='w-4 cursor-pointer' src={assets.mini_player_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.zoom_icon} alt="" />
      </div>
    </div>
  ):null
}

export default Player
