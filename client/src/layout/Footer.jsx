import {Link} from 'react-router-dom'
import styles from './stylemodules/footer.module.css'

function Footer({logedIn = false}){
    return (
    <footer>
        <div className={styles.links}>
            <div className={styles.section}>
               <div className={styles.title}>Support</div>
               <div>111 Bijoy sarain, Dhaka,<br/> Dh 1515,Bangladesh.</div>
               <div>exclusive@gmail.com</div>
               <div>+99017-8888-2222</div>
            </div>
            <div className={styles.section}>
               <div className={styles.title}>My Account</div>
               <div> <Link to='/login'>Login</Link> / <Link to='/signup'>Register</Link> </div>
               <div> <Link to='/cart'>Cart</Link> </div>
               <div> <Link to={logedIn ? '/wishlist' : '/login'}>Wishlist</Link></div>
               <div> <Link to='/'>Shop</Link></div>
            </div>
            <div className={styles.section}>
               <div className={styles.title}>Quick Link</div>
               <div>Privacy Policy</div>
               <div>Terms Of Use</div>
               <div>FAQ</div>
               <div> <Link to='/contact'>Contact</Link></div>
            </div>
        </div>
        <div className={styles.copyright}>
            &copy; Copyright Rimel 2022. All right reserved
        </div>
    </footer>
    )
}


export default Footer
