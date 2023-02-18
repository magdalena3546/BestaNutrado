import { Container } from 'react-bootstrap';
import styles from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import AboutBanner from './AboutBanner';

const About = () => {
    return (
        <>
            <div className={styles.banner}>
                <h3>O nas</h3>
            </div>
            <div className={styles.wrapper}>
               
                <div className={styles.aside}>
                    <div className={styles.photo}></div>
                    {/* <div className={styles.photoFood}></div> */}
                    <img className={styles.photoFood} src='/images/besta1.png' alt='besta nutrado opakowanie karmy'></img>
                </div>

                <div className={styles.content}>
                    <h4>Besta Nutrado</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptatibus explicabo at esse tempora incidunt recusandae aut. Laborum cum quaerat aspernatur quidem, magnam nisi pariatur ipsum eos praesentium, numquam itaque.
                    Id in temporibus ab corporis voluptatibus excepturi pariatur nihil ipsa ad ut reprehenderit illum provident possimus, numquam impedit laboriosam quidem assumenda incidunt ex velit est? Eius veniam corporis rerum excepturi.
                    </p>
                    <a href="/" className={styles.button}>Kup teraz
                    <FontAwesomeIcon icon={faPaw} className={styles.icon}/>
                    </a>
                </div>
            </div>
            <AboutBanner />
        </>
    );
};

export default About;