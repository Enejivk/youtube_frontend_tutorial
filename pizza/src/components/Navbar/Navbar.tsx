import logo from '../../assets/logo.png'
import { RiMenu4Line as MenuButton } from "react-icons/ri";

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1 className='logo-bottom-text'>MORE FLAVOUR FOR LESS__________</h1>
      </div>


      <div className="menu-links-and-orderMeal">
        
        <div className="navbar-link-items-container">
          <p><a href="">HOME</a></p>
          <p><a href="">OUR MEALS</a></p>
          <p><a href="">ABOUT US</a></p>
          <p><a href="">RESERVATIONS</a></p>
        </div>
        <div className="order-meal">
          <button>ORDER MEAL</button>
        </div>
        <MenuButton color='white' size={35} className='menu-button'/>
      </div>
    </nav>
  )
}

export default Navbar