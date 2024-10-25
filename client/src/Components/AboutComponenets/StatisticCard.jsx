import styles from './styles/statisticcard.module.css'

function StatisticCard({isHighlighted, img, number, statisticName}){
    return (
        <div className={isHighlighted ? styles.highlight_card : styles.card}>
            <div className={isHighlighted ? styles.highlight_img : styles.image}>
                <img src={img}/>
            </div>
            <span className={styles.number}>{number}</span>
            <span className={styles.statisicName}>{statisticName}</span>
        </div>
    )
}


export default StatisticCard
