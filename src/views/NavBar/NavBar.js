import styles from './NavBar.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

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
                <MobileNavigation />
                <Navigation />
            </div>
        </div>
    )
};

export default NavBar;