import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.scss";
import { faBasketShopping, faMobile } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <div className={styles.iconMedia}>
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className={styles.iconMedia}>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
      <div>
        <p>Copyright &copy; Besta Nutrado 2023. All rights reserved.</p>
      </div>
      <div className={styles.icons}>
        <Link to="/contact" className={styles.icon}>
          <FontAwesomeIcon icon={faMobile} href="/contact" />
        </Link>
        <Link to="/contact" className={styles.icon}>
          <FontAwesomeIcon icon={faBasketShopping} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
