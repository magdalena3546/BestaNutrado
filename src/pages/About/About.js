import styles from './About.module.scss';
import AboutBanner from './AboutBanner';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';

const About = () => {
    return (
        <>
            <div className={styles.banner}>
                <h3>O nas</h3>
            </div>
            <div className={styles.wrapper}>
               
                <div className={styles.aside}>
                    <div className={styles.photo}></div>
                    <img className={styles.photoFood} src='/images/besta1.png' alt='besta nutrado opakowanie karmy'></img>
                </div>
                <div className={styles.content}>
                    <SectionTitle name="Besta Nutrado"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptatibus explicabo at esse tempora incidunt recusandae aut. Laborum cum quaerat aspernatur quidem, magnam nisi pariatur ipsum eos praesentium, numquam itaque.
                    Id in temporibus ab corporis voluptatibus excepturi pariatur nihil ipsa ad ut reprehenderit illum provident possimus, numquam impedit laboriosam quidem assumenda incidunt ex velit est? Eius veniam corporis rerum excepturi.
                    </p>
                    <Button link="/" name="Kup teraz" />
                </div>
            </div>
            <AboutBanner />
        </>
    );
};

export default About;