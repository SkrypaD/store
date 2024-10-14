import styles from './stylemodules/footer.module.css'

function Footer(){
    return (
    <footer>
        <div className={styles.links}>
        <div>Exclusive</div>
        <div>Support</div>
        <div>Account</div>
        <div>Quick Link</div>
        <div>Download App</div>
        </div>
        <div className={styles.copyright}>
            Copyright Rimel 2022. All right reserved
        </div>
    </footer>
    )
}


export default Footer
