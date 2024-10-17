import {Link} from 'react-router-dom'
import styles from './styles/signup.module.css'

function SignUpForm(){
    return (
        <div className={styles.signup}>
            <h2>Create an account</h2>
            <h4>enter your details below</h4>
            <input className={styles.input} placeholder='Name'/>
            <input className={styles.input} placeholder='Email or Phone Number'/>
            <input className={styles.input} placeholder='Password'/>
            <button>Create Account</button>
            <span>Already have account? 
                <Link className={styles.link} to='/login'>Log in</Link>
            </span>
        </div>
    )
}


export default SignUpForm
