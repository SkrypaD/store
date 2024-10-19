import {Link} from "react-router-dom"

import styles from './styles/error.module.css'

function ErrorPage() {
    return (
        <div className={styles.error_page}>
        <h1 className={styles.main_header}>404 Not Found</h1>
        <h4 className={styles.sub_header}>Your visited page not found. You may go home page.</h4>
        <Link to='/' className={styles.go_home_btn}>Back to home page</Link>
        </div>
    )
}


export default ErrorPage
