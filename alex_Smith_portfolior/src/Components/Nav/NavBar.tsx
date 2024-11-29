import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/personal/logo.png'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import styles from './NavBar.module.css'

const NavBar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const handleMenuShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className={styles.navigationContainer}>
            <div className={styles.logo}>
                <img src={logo} alt="personal Logo" />
                <h1></h1>
            </div>
            <ul className={`${styles.menuLInks} ${showMenu ? styles['showMenu'] : ""}`}>
                <p><Link to='/'>Home</Link></p>
                <p><Link to='/resume'>Resume</Link></p>
                <p><Link to='/contact'>Portfolio</Link></p>
                <p><Link to='/contact'>Contact</Link></p>
            </ul>
            <div className={styles.menuButton}>
                {showMenu ? <IoMdClose color='white' size={35} onClick={handleMenuShowMenu} />
                : < IoMdMenu color='white' size={35} onClick={handleMenuShowMenu} />}
            </div>
        </nav>
    )
}

export default NavBar
