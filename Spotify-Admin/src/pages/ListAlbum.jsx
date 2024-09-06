import React, { useEffect, useState } from 'react'
import { url } from '../App'
import { toast } from 'react-toastify'
import axios from 'axios'

const ListAlbum = () => {
  const [data, setData] = useState([])
  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`)
      console.log(response);
      
      if (response.data.success) {
        setData(response.data.albums)
      }
    } catch (error) {
      toast.error("Some Error occured")
    }
  }
  useEffect(() => {
    fetchAlbums()
  }, [])

  const removeAlbum = async (id) => {
    
    try {
      const response = await axios.delete(`${url}/api/album/delete/${id}`)
      if (response.data.success) {
        toast.success("Album Deleted Successfully")
      }
    } catch (error) {
      toast.error("Some Error Occured")
    }
  }
  return (
    <div>
      <p>All Albums List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center p-3 border mr-5 text-sm border-gray-300 bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album Color</b>
          <b>Action</b>
        </div>
        {
          data.map((item, index) => {
            return (
              <div key={index} className='grid grid-cols[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
                <img src={item.image} className='w-[80px] ' alt="" />
                <p>{item.name}</p>
                <p>{item.desc}</p>
                <p>{item.bgColor}</p>
                <p onClick={() => removeAlbum(item._id)} className='font-semibold text-lg cursor-pointer'>x</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ListAlbum
