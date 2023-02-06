import styles from './NavBar.module.scss';

const NavBar = () => {
    return(
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src="/images/logo.png" alt="Niebieskie logo Besta Nutrado"></img>
            </div>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li><a href="#">O nas</a></li>
                    <li><a href="#">Produkty</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </div>
        </div>
    )
};

export default NavBar;