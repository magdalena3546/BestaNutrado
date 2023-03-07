import { faEnvelope, faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Contact.module.scss';

const Contact = () => {
    return(
        <>
          <div className={styles.banner}>
                <h3>Kontakt</h3>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.contact}>
                    <div className={styles.contactWrapper}> 
                    <div className={styles.photoContact}></div>
                    <div className={styles.contactBox}>
                        <div className={styles.icon}><FontAwesomeIcon icon={faEnvelope}/></div>
                        <div className={styles.text}>
                            <h4>Napisz do nas</h4>
                            <p>email@gmail.com</p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.contactWrapper}> 
                    <div className={styles.photoContact}></div>
                    <div className={styles.contactBox}>
                        <div className={styles.icon}><FontAwesomeIcon icon={faPhone}/></div>
                            <div className={styles.text}>
                                <h4>Zadzwoń do nas</h4>
                                <p>555444333</p>
                            </div>
                    </div>
                    </div>
                    <div className={styles.contactWrapper}> 
                    <div className={styles.photoContact}></div>
                    <div className={styles.contactBox}>
                        <div className={styles.icon}><FontAwesomeIcon icon={faLocationDot}/></div>
                            <div className={styles.text}>
                                <h4>Odwiedź nas</h4>
                                <p>ul.Lorem ipsum Lorem ipsum</p>
                            </div>
                    </div>
                    </div>
                </div>
                    <div className={styles.boxPaws}>
                        <div className={styles.photo}>
                            <h4>Podaj nam swoją łapę w drodze do lepszej diety twojego najlepszego przyjaciela!</h4>
                        </div>
                    </div>
            </div>
        </>
    )
};

export default Contact;