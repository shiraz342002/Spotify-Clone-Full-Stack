import React, { useEffect, useState } from 'react'
import { url } from '../App'
import { toast } from 'react-toastify'

const ListAlbum = () => {
  const [data, setData] = useState([])
  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`)
      if (response.data.success) {
        setData(response.data.albums)
      }
    } catch (error) {
      toast.error("Some Error occured")
    }
  }
  useEffect(() => {
    fetchAlbums()
  }, [data])

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
      
    </div>
  )
}

export default ListAlbum
