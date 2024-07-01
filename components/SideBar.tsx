import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'

function SideBar() {
  return (
    <div className='flex md:h-full flex-row md:flex-col md:justify-start gap-9'>
      <Logo/>
      <NavBar/>
    </div>
  )
}

export default SideBar
