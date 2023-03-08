import styles from './NavBar.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const NavBar = ({height}) => {
    const [ fix, setFix ] = useState(false);

    const setPosition = () => {
        if(window.scrollY >= 50){
            setFix(true)
        } else {
            setFix(false)
        }
    };

    window.addEventListener("scroll", setPosition);
    return(
        <div className={clsx(styles.nav, fix ? styles.fixed : styles.normal )}>
            <div className={styles.logo}>
                <img src="/images/logo.png" alt="Niebieskie logo Besta Nutrado"></img>
            </div>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li><Link to="/">Strona głowna</Link></li>
                    <li><Link to="/about">O nas</Link></li>
                    <li><Link to="#">Produkty</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    <li><Link to="/partnership">Współpraca</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default NavBar;