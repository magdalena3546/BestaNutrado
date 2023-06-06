import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul className={styles.list}>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link style={{ color: props.color }} to="/">
          Strona głowna
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link style={{ color: props.color }} to="/about">
          O nas
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/products" style={{ color: props.color }}>
          Produkty
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/contact" style={{ color: props.color }}>
          Kontakt
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/partnership" style={{ color: props.color }}>
          Współpraca
        </Link>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
