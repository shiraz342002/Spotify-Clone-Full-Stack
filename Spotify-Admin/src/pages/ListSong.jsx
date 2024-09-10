import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { url } from '../App';
import { toast } from 'react-toastify';

const ListSong = () => {
  const [data, setData] = useState([]);
  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      if (response.data.success) {
        setData(response.data.songs);
      }
    } catch (error) {
      toast.error('Some Error occurred');
    }
  };
  useEffect(() => {
    fetchSongs();
  }, []);
  const removeSong = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/song/delete/${id}`);
      if (response.data.success) {
        toast.success('Song Deleted Successfully');
        setData((prevData) => prevData.filter((song) => song._id !== id));
      }
    } catch (error) {
      toast.error('Some Error Occurred');
    }
  };

  if (!data || data.length === 0) {
    return <p>No songs available</p>;
  }

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">All Songs List</h1>
      <div className="overflow-x-auto">
        <div className="hidden sm:grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border-gray-300 bg-gray-100 text-sm font-medium text-gray-700">
          <span>Image</span>
          <span>Name</span>
          <span>Album</span>
          <span>Duration</span>
          <span>Action</span>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm bg-white hover:bg-gray-100 transition-colors duration-200"
          >
            <img
              src={item.image}
              className="w-[80px] object-cover rounded-md"
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>{item.album}</p>
            <p>{item.duration}</p>
            <img
              src={assets.bin}
              alt="Delete"
              onClick={() => removeSong(item._id)}
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSong;
