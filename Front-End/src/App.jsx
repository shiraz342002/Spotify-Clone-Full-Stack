import React, { useContext } from 'react'
import SideBar from './components/SideBar'
import Player from './components/Player'
import Display from "./components/Display"
import { PlayerContext } from './context/PlayerContext'
const App = () => {
  const {audioRef,track} =useContext(PlayerContext)
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <SideBar/>  
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} preload='auto' src={track.file}></audio>
    </div>
  )
}
export default App
// https://youtu.be/KdGfhSpT6pc?t=20375