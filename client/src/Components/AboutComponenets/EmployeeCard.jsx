import styles from './styles/employeecard.module.css'


function EmployeeCard({name, img=`${name}.png`, role, socials}){
    return(
        <div className={styles.card}>
            <img src={`../../../public/imgs/employees/${img}`}/>
            <span className={styles.name}>{name}</span>
            <span className={styles.role}>{role}</span>
            <div className={styles.socials}>
                <a href={socials.twitter}>
                    <img src='../../../public/icons/twitter.png'/>
                </a>
                <a href={socials.instagram}>
                    <img src='../../../public/icons/instagram.png'/>
                </a>
                <a href={socials.linkedIn}>
                    <img src='../../../public/icons/linkedIn.png'/>
                </a>
            </div>
        </div>
    )
}


export default EmployeeCard
