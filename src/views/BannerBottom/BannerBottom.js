import { useEffect } from "react";
import styles from "./BannerBottom.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BannerBottom = () => {
  useEffect(() => {
    const text = document.querySelector("#text");
    text.innerHTML = text.textContent.replace(
      /\S/g,
      "<span class='s'>$&</span>"
    );
    const elm = document.querySelectorAll(".s");
    for (let i = 0; i < elm.length; i++) {
      elm[i].style.transform = "rotate(" + i * 7.5 + "deg)";
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.circle}>
        <p className={styles.textCircle} id="text">
          {" "}
          Besta Nutrado - Najlepsza karma - Naturalne składniki -{" "}
        </p>
        <Link to="/products">
          <FontAwesomeIcon icon={faPaw} className={styles.icon} />
        </Link>
      </div>
      <div className={styles.textBox}>
        <h3>Znajdź najlepszą karmę dla swojego przyjaciela!</h3>
      </div>
    </div>
  );
};

export default BannerBottom;
