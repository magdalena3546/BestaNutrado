import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLinks = (props) => {
    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };
    return(
        <ul className={styles.list}>
            <motion.li 
                initial = {animateFrom}
                animate = {animateTo}
                transition = {{delay: 0.05}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/">Strona głowna</Link>
            </motion.li>
            <motion.li 
                 initial = {animateFrom}
                 animate = {animateTo}
                 transition = {{delay: 0.10}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/about">O nas</Link>
            </motion.li>
            <motion.li 
                initial = {animateFrom}
                animate = {animateTo}
                transition = {{delay: 0.20}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="#">Produkty</Link>
            </motion.li>
            <motion.li 
                initial = {animateFrom}
                animate = {animateTo}
                transition = {{delay: 0.30}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/contact">Kontakt</Link>
            </motion.li>
            <motion.li 
                 initial = {animateFrom}
                 animate = {animateTo}
                 transition = {{delay: 0.40}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/partnership">Współpraca</Link>
            </motion.li>
        </ul>
    )
};

export default NavLinks;