import styles from './styles/credential.module.css'


function Credential(props){
    return(
        <div className={styles.block}>
            {props.children}
        </div>
    )
}


export default Credential
