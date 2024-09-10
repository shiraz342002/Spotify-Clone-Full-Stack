import React, { useEffect, useState } from 'react';
import { url } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from "../assets/assets.js";

const ListAlbum = () => {
  const [data, setData] = useState([]);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setData(response.data.albums);
      }
    } catch (error) {
      toast.error("Some Error occurred");
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const removeAlbum = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/album/delete/${id}`);
      if (response.data.success) {
        toast.success("Album Deleted Successfully");
        setData(prevData => prevData.filter(album => album._id !== id));
      }
    } catch (error) {
      toast.error("Some Error Occurred");
    }
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">All Albums List</h1>
      <div className="overflow-x-auto">
        
        <div className="hidden sm:grid grid-cols-[100px_1fr_2fr_100px_50px] gap-4 items-center p-4 border-b border-gray-300 bg-gray-200 text-sm font-medium text-gray-700">
          <span className="font-semibold">Album Cover</span>
          <span className="font-semibold">Name</span>
          <span className="font-semibold">Description</span>
          <span className="font-semibold">Album Color</span>
          <span className="font-semibold text-center">Action</span>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[80px_1fr_2fr_100px_50px] gap-4 items-center p-4 border-b border-gray-300 bg-white text-sm hover:bg-gray-100 transition-colors duration-200"
          >          
            <img src={item.image} className="w-20 h-20 object-cover rounded-md" alt={item.name} />
            <div className="text-gray-800">
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </div>
            <div className="text-gray-600">
              <p className="break-words">{item.desc}</p>
            </div>
            <div className="flex justify-center">
              <input
                type="color"
                value={item.bgColor}
                disabled
                className="w-10 h-10 p-0 border-none rounded-full cursor-pointer"
                title="Album Color"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={assets.bin}
                alt="Delete"
                onClick={() => removeAlbum(item._id)}
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                title="Delete Album"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListAlbum;
