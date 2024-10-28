import Credential from '../../Components/ContactComponents/Credential'
import Input from '../../Components/ContactComponents/Input'
import styles from './styles/contact.module.css'

function Contact(){
    return (
        <div className={`wrapper ${styles.contact}`}>
            <div className={styles.credentials}>
                <Credential>
                    <h3>Call to Us</h3>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                </Credential>
                <hr/>
                <Credential>
                    <h3>Write to Us</h3>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                </Credential>
            </div>
            <div className={styles.contact_form_container}>
                <form className={styles.contact_form}>
                    <div>
                        <Input placeholder='Your Name' type='text'/>
                        <Input placeholder='Your Email' type='text'/>
                        <Input placeholder='Your Phone' type='text'/>
                    </div>
                    <textarea placeholder='Your Message'/>
                    <button className='red-btn'>Send Message</button>
                </form>
            </div>
        </div>
    )
}


export default Contact
