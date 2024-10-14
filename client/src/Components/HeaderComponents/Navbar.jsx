import {Link} from "react-router-dom"

import navbar from './styles/navbar.module.css'

function Navbar(){
    return (
        <nav className={navbar.nav}>
        <Link className={navbar.navlink} to='/'>Home</Link>
        <Link className={navbar.navlink} to='contact'>Contact</Link>
        <Link className={navbar.navlink} to='about'>About</Link>
        <Link className={navbar.navlink} to='signup'>Sign Up</Link>
        </nav>
    )
}


export default Navbar
