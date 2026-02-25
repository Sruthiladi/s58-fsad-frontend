import React from 'react'
import logo from '/image.png'
function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="Logo" />
        <h3>My Website Header</h3>
    </div>
  )
}

export default Header