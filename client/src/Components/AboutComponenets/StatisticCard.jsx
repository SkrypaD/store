import styles from './styles/statisticcard.module.css'

function StatisticCard({isHighlighted, hasBorder=true, img, title, subTitle}){
    return (
        <div className={isHighlighted ? styles.highlight_card : styles.card} style={hasBorder ? {} : {border: 'none'}}>
            <div className={isHighlighted ? styles.highlight_img : styles.image}>
                <img src={img}/>
            </div>
            <span className={styles.title}>{title}</span>
            <span className={styles.subTitle}>{subTitle}</span>
        </div>
    )
}


export default StatisticCard
