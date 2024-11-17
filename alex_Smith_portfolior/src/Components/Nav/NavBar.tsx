import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <div></div>
        <ul>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/resume'>Resume</Link></p>
            <p><Link to='/contact'>Contact</Link></p>
        </ul>
    </nav>
  )
}

export default NavBar
