import styles from './styles/input.module.css'


function Input({placeholder=''}){
    return(
        <input className={styles.input} required={true} placeholder={placeholder}/>
    )
}


export default Input
