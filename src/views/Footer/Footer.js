import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import Button from "../../common/Button/Button";
import { faBasketShopping, faMobile } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return(
      <div className={styles.container}>
             <div className={styles.icons}>
                <div className={styles.iconMedia}><FontAwesomeIcon icon= {faFacebookF} /></div>
                <div className={styles.iconMedia}><FontAwesomeIcon icon= {faInstagram} /></div>
            </div>
            <div className={styles.box}>
                <p className={styles.text}>Copyright &copy; Besta Nutrado 2023. All rights reserved.</p> 
            </div> 
           <div className={styles.icons}>
                {/* <Link to="/contact">Skontaktuj się z nami już dziś</Link> */}
                {/* <Button name="Kontakt" /> */}

                <div className={styles.icon}><FontAwesomeIcon icon= {faMobile}  /></div>
                <div className={styles.icon}><FontAwesomeIcon icon= {faBasketShopping} /></div>
           </div>
    
    </div>
    )
};

export default Footer;