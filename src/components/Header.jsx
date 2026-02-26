import React from 'react'
import logo from '/image.png'
import { Link } from 'react-router-dom'

function Header() {

  function toggleView() {
    const systemView = document.querySelector('.systemview')
    systemView.classList.toggle('mobileview')
  }

  return (
    <div className='header'>

      <div className='mobilemenu' onClick={toggleView}> &#9776; </div>

      <ul className='systemview'>
        <li> <Link to="/student" className='nav-link'>Student</Link> </li>
        <li> <Link to="/signin" className='nav-link'>Signin</Link> </li>
        <li> <Link to="/signup" className='nav-link'>Signup</Link> </li>
      </ul>

      <img src={logo} alt="Logo" />
      <h3>Website Heading</h3>
    </div>
  )
}

export default Header