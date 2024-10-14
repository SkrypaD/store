import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import styles from './stylemodules/layout.module.css'

function Layout() {
    return (
        <div className={styles.layout}>
            <Header/>
                <div className={styles.content}>
                <Outlet/>
                </div>
            <Footer/>
        </div>
    )
}


export default Layout
