import styles from './NavBar.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

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
                    <li><a href="/">Strona głowna</a></li>
                    <li><a href="/about">O nas</a></li>
                    <li><a href="#">Produkty</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </div>
        </div>
    )
};

export default NavBar;