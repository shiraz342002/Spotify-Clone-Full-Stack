import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios"
import { url } from '../App';
import { toast } from 'react-toastify';
import { Button } from 'flowbite-react';

const AddSong = () => {
  const [image, setImage] = useState(false);
  const [song, setSong] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false); 
  const [albumData, setAlbumData] = useState([]);

  const validateForm = () => {
    if (!name) {
      toast.error('Song name is required');
      return false;
    }
    
    if (!image) {
      toast.error('Song cover image is required');
      return false;
    }
    if (!song) {
      toast.error('song audio is required');
      return false;
    }
    return true;
  };

    const fetchAlbums = async () => {
      try {
        const response = await axios.get(`${url}/api/album/list`)
        
        if (response.data.success) {
          setAlbumData(response.data.albums)
        }
      } catch (error) {
        toast.error("Some Error occured")
      }
      console.log(albumData);
      
    }
    useEffect(() => {
      fetchAlbums()
    }, [])
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const formData = new FormData()
      formData.append('name',name)
      formData.append('desc',desc)
      formData.append('image',image)
      formData.append('audio',song)
      formData.append('album',album)
      const response = await axios.post(`${url}/api/song/add`,formData)
      if (response.data.success) {
        toast.success("Song Added Successfully")
        setImage(false)
        setSong(false)
        setName("")
        setDesc("")
        setAlbum("none")
      }else{
        toast.error("Something Went Wrong")
      }
    } catch (error) {
      toast.error("Some Error Occured")
    }
    setLoading(false)
  }
  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
    </div>
  ) : (
    <form onSubmit={onSubmitHandler} className='flex flex-col item-start gap-8 text-gray-600'>
      <div className='flex gap-8'>
        <div className='flex flex-col gap-6'>
          <p>Upload Song</p>
          <input onChange={(e) => setSong(e.target.files[0])} id='song' hidden type="file" accept='audio/*' />
          <label htmlFor="song">
            <img className='w-24 cursor-pointer' src={song ? assets.upload_added : assets.upload_song} alt="" />
          </label>
        </div>
        <div className="flex flex-col gap-6">
          <p>Upload Image</p>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" hidden id='image' accept='image/*' />
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-24 cursor-pointer' alt="" />
          </label>
        </div>
      </div>
      <div className='flex flex-col gap-2.5'>
        <p>Song Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='bg-transparent outline-green-600 border-2 p-2.5 border-gray-400 w-[max(40vw,250px)]' placeholder='Type here' type="text" />
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Description</p>
        <input onChange={(e) => setDesc(e.target.value)} value={desc} className='bg-transparent outline-green-600 border-2 p-2.5 border-gray-400 w-[max(40vw,250px)]' placeholder='Type here' type="text" />
      </div>
      <div className='flex flex-col gap-2'>
        <p>Album</p>
        <select onChange={(e) => setAlbum(e.target.value)} defaultValue={album} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[250px]'>
          <option value="none">None</option>
          {
            albumData.map((item,index)=>(
              <option key={index} value={item.name}>{item.name}</option>
            ))
          }
        </select>
      </div>
      <Button
          gradientMonochrome="success"
          className="mb-10 text-lg py-3 px-3 cursor-pointer w-[150px]"
          type="submit"
        >
          Add Song
        </Button>
    </form>
  )
}

export default AddSong
