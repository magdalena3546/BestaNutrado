import Carousel from 'react-bootstrap/Carousel';
import Button from '../../common/Button/Button';
import styles from './Banner.module.scss';
import clsx from 'clsx';

const Banner = () => {
    return(
        <Carousel>
        <Carousel.Item className={styles.bannerItem}>
             <img
                 className={styles.bannerImage}
                 src="/images/dog6.png"
                 alt="pies - bernardyn"
                 />
                 <Carousel.Caption className = {clsx(styles.bannerText, 'animate__animated animate__slideInUp')}>
                 <h2 className='animate__animated animate__bounce animate__delay-2s'>Besta Nutrado</h2>
                 <h3>Z pasji do zwierząt</h3>
                 <p>Healthy diet for your friend</p>
                 <Button link="/" name="read more" />
                 </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item className={styles.bannerItem}>
                 {/* <img
                 className={styles.bannerImage}
                 src="/images/cat4.png"
                 alt="białe kocięta"
                 /> */}
                 <div className={styles.bgcImage}></div>
 
                 <Carousel.Caption  className = {clsx(styles.bannerText, 'animate__animated animate__slideInUp')}>
                 <h2 className='animate__animated animate__bounce animate__delay-2s'>Besta Nutrado</h2>
                 <h3>Z troski do zwierząt</h3>
                 <p>Healthy diet for your friend</p>
                 <Button link="/" name="read more" />
                 </Carousel.Caption>
             </Carousel.Item>
         </Carousel> 
    )
};

export default Banner;