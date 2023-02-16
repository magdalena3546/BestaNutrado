import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import styles from './Header.module.scss';

const Header = () => {
    return(
        <div className={styles.background}>
            <Banner />
        </div>
    )
};

export default Header;