import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../App'
import { toast } from 'react-toastify'

const ListSong = () => {
  const [data, setData] = useState([])
  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`)
      if (response.data.success) {
        setData(response.data.songs)
      }
    } catch (error) {
      toast.error("Some Error occured")
    }
  }
  useEffect(() => {
    fetchSongs()
  }, [data])

  const removeSong = async (id) => {
    
    try {
      const response = await axios.delete(`${url}/api/song/delete/${id}`)
      if (response.data.success) {
        toast.success("Song Deleted Successfully")
      }
    } catch (error) {
      toast.error("Some Error Occured")
    }
  }
  return (
    <div>
      <p>All songs List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border-gray-300 mr-5 text-sm bg-gray-100 '>
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>
        {
          data.map((item, index) => {
            return (
              <div key={index} className='grid grid-cols[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
                <img src={item.image} className='w-[80px] ' alt="" />
                <p>{item.name}</p>
                <p>{item.album}</p>
                <p>{item.duration}</p>
                <p onClick={() => removeSong(item._id)} className='font-semibold text-lg cursor-pointer'>x</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ListSong
