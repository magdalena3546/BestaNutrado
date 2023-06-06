import NavLinks from "./NavLinks";
import styles from "./NavBar.module.scss";

const Navigation = ({ color }) => {
  return (
    <nav className={styles.navigation}>
      <NavLinks color={color} />
    </nav>
  );
};

export default Navigation;
