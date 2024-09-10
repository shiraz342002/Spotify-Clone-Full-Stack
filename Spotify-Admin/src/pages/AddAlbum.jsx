import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';
import { Button } from 'flowbite-react';
import axios from 'axios';
import { url } from '../App';

const AddAlbum = () => {
  const [loading, setLoading] = useState(false);
  const [bgColor, setBgColor] = useState('');
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const validateForm = () => {
    if (!name) {
      toast.error('Album name is required');
      return false;
    }
    if (!desc) {
      toast.error('Album description is required');
      return false;
    }
    if (!image) {
      toast.error('Album cover image is required');
      return false;
    }
    if (!bgColor) {
      toast.error('Background color is required');
      return false;
    }
    return true;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('bgColor', bgColor);

      const response = await axios.post(`${url}/api/album/add`, formData);
      if (response.data.success) {
        toast.success('Album Added Successfully');
        setImage(null);
        setName('');
        setDesc('');
        setBgColor('');
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      toast.error('An error occurred while adding the album');
    }
    setLoading(false);
  };

  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
    </div>
  ) : (
    <div className="p-6">
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-8 text-gray-600">
        <div className="flex gap-8">
          <div className="flex flex-col gap-6">
            <p>Upload Album Cover</p>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              id="image"
              hidden
              type="file"
              accept="image/*"
            />
            <label htmlFor="image">
              <img
                className="w-24 h-24 object-cover cursor-pointer rounded-md"
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt=""
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <p>Album Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent border-2 p-2.5 border-gray-400 w-[max(40vw,250px)] focus:border-green-600 focus:outline-none"
            placeholder="Type here"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <p>Album Description</p>
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="bg-transparent border-2 p-2.5 border-gray-400 w-[max(40vw,250px)] focus:border-green-600 focus:outline-none"
            placeholder="Type here"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <p>Album Color Theme</p>
          <p>
            Use{' '}
            <a
              target="_blank"
              className="text-base font-bold text-blue-600"
              href="https://coolors.co/palettes/trending"
              rel="noreferrer"
            >
              Color Theme Picker
            </a>{' '}
            or go with custom background color
          </p>

          <input
            value={bgColor}
            onChange={(e) => {
              let value = e.target.value;
              if (value && !value.startsWith('#')) {
                value = `#${value}`;
              }
              setBgColor(value);
            }}
            className="bg-transparent border-2 p-2.5 border-gray-400 w-[max(40vw,250px)] focus:border-green-600 focus:outline-none"
            placeholder="Type here"
            type="text"
          />

          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>

        <Button
          gradientMonochrome="success"
          className="mb-10 text-lg py-3 px-2 cursor-pointer w-[150px]"
          type="submit"
        >
          Add Album
        </Button>
      </form>
    </div>
  );
};

export default AddAlbum;
