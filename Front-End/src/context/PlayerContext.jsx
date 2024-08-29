import { createContext, useRef, useState } from "react";
import { assets, songsData } from "../assets/frontend-assets/assets";

export const PlayerContext =createContext();
const PlayerContextProvider=(props)=>{
    const audioRef =useRef()
    const seekBg =useRef()
    const seekBar = useRef()
    const [track,setTrack]=useState(songsData[0])
    const [playStatus,setPlayStatus] = useState(false)
    const [time,setTime]=useState({
        currentTime:{
            second:0,
            minute:0,
        },
        totalTime:{

        }
    }
)
    const contextValue={
        audioRef,
        seekBar,
        seekBg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime
    }
    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider