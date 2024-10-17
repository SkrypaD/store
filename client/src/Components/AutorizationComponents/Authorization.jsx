import styles from './styles/authorization.module.css'


function Authorization({children}){
    return (
        <div className={styles.authorization}>
            <div className={styles.image}>
                <img src="../../../public/imgs/authorization.png" alt="img"/>
            </div>
            <div className={styles.form}>
                {children}
            </div>
        </div>
    ) 
}


export default Authorization
