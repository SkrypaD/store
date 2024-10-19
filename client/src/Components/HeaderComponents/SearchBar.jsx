import {Link} from 'react-router-dom'
import styles from './styles/searchbar.module.css'


function SearchBar({logedIn = true}){
    return (
        <div className={styles.searchbar}>
            <input className={styles.input} placeholder="What are you looking for?"></input>
            <div className={styles.btn}>
                <img src='../../../public/icons/search.png'/>
            </div>

            <div className={styles.user_panel}>
                <Link to='/wishlist' className={styles.user_panel_link}>
                    <img className={styles.user_panel_img} src="../../public/icons/like.png"/>
                </Link>
                <Link to='/cart'  className={styles.user_panel_link}>
                    <img className={styles.user_panel_img} src="../../public/icons/black_cart.png"/>
                </Link>
                {
                    logedIn ?
                    <Link to='/account' className={styles.user_panel_link}>
                        <img className={styles.user_panel_img} src="../../public/icons/user.png"/>
                    </Link>
                    :
                    <> </>
                }
            </div>
        </div>
    )
}


export default SearchBar

