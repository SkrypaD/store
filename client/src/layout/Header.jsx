import {Link} from "react-router-dom"
import Navbar from "../Components/HeaderComponents/Navbar"
import SearchBar from "../Components/HeaderComponents/SearchBar"

import styles from './stylemodules/header.module.css'

function Header(){

    return (
        <>
        <div className={styles.sales}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
        <header>
            <Link to='/' className={styles.logo}>Exclusive</Link>
            <Navbar/>
            <SearchBar/>
        </header>
        </>
    )
}


export default Header
