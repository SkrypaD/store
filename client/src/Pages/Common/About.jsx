import EmployeeCard from '../../Components/AboutComponenets/EmployeeCard'
import StatisticCard from '../../Components/AboutComponenets/StatisticCard'

import styles from './styles/about.module.css'

import employees from './employees'
import statistics from './statistics'
import services from './fullServices'

{
    /*
        * TODO: change iconst in services to right ones
    */
}

function About() {

    return(
        <div className="wrapper">
            <div className="space-between">
                <div className={styles.our_story}>
                        <h2>Our Story</h2>
                        <p>
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh.
                        Supported by wide range of tailored marketing, data and service solutions, Exclusive has 
                        10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                        </p>
                        <p>
                        Exclusive has more than 1 Million products to offer, growing at a very fast.
                        Exclusive offers a diverse assotment in categories ranging  from consumer.
                        </p>
                </div>
                <div className={styles.our_story_img}>
                    <img src='../../../public/imgs/about.png'/>
                </div>
            </div>
            <div className={styles.statistics}>
                {statistics.map((card, index) => (
                    <StatisticCard isHighlighted={index == 1} key={index} img={card.img} title={card.title} subTitle={card.subTitle}/>
                ))}
            </div>
            <div className={styles.employees}>
                {employees.map((employee, index) => (
                    <EmployeeCard key={index} name={employee.name} role={employee.role} socials={{ twitter : 'http://www.twitter.com', instagram : 'https://www.instagram.com', linkedIn : 'https://www.linkedin.com'}}/>
                ))}
            </div>
            <div className={styles.statistics}>
                {services.map((card, index) => (
                    <StatisticCard  hasBorder={false} key={index} img={card.img} title={card.title} subTitle={card.subTitle}/>
                ))}
            </div>
        </div>
    )
}

export default About
