import styles from './styles/signup.module.css'
import { Link } from 'react-router-dom'

function LogInForm(){
    return(
        <div className={styles.signup}>
            <h2>Log in to Exclusive</h2>
            <h4>enter your details below</h4>
            <input className={styles.input} placeholder='Email or Phone Number'/>
            <input className={styles.input} placeholder='Password'/>
            <div className={styles.btns}>
                <button>Log In</button>
                <Link className={styles.link} to='/login'>Forget Password?</Link>
            </div>
        </div>
    )
}


export default LogInForm
