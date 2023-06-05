import styles from "./AboutBanner.module.scss";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <FontAwesomeIcon icon={faPaw} className={styles.icon} />
        <h4>Nasz cel</h4>
        <p>
          Naszym zadaniem jest, aby wasi pupile mieli pełne, ale przede
          wszystkim zdrowe brzuszki!
        </p>
      </div>
      <div className={styles.photo}></div>
    </div>
  );
};

export default AboutBanner;
