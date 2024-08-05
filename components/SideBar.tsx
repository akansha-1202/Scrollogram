import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import MoreDropdown from './MoreDropdown'

function SideBar() {
  return (
    <div className='flex md:h-full flex-row md:flex-col md:justify-start gap-9'>
      <Logo/>
      <NavBar/>

      {/* user && <Profile/> */}
      <div className='hidden md:block md:flex items-end flex-1 w-full'>
        <MoreDropdown/>
      </div>
    </div>
  )
}

export default SideBar
