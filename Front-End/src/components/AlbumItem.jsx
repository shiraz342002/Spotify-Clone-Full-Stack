import React from 'react'

const AlbumItem = (image,name,desc,id) => {
  return (
    <div className='min-w-[180px] px-3 p-3 rounded cursor-pointer hover:bg-[#ffff]'>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1 '>{name}</p>
      <p className=''>{desc}</p>
    </div>
  )
}

export default AlbumItem
