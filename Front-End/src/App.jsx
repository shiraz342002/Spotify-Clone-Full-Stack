import React from 'react'
import SideBar from './components/SideBar'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90px] flex'>
        <SideBar/>
      </div>
    </div>
  )
}

export default App
