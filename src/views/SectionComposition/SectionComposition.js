import styles from "./SectionComposition.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faFlask,
  faPercent,
  faShieldVirus,
  faSlash,
  faUserDoctor,
  faWheatAwn,
} from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

const SectionComposition = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle name="Nasze składniki" />
      <h5 className={styles.subtitle}>
        Dokładnie wyselekcjonowane, z dbałością o zdrowie twojego najlepszego
        przyjaciela.
      </h5>
      <div className={styles.graph}>
        <div className={styles.photoFood}>
          <img
            alt="opakowanie karmy Besta Nutrado"
            src="/images/besta2.png"></img>
        </div>
        <div className={styles.element1}>
          <div className={styles.text}>
            <h6>Wysoka zawartość mięsa</h6>
            <p>W tym minimum 35% świeżo przygotowanych</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faPercent} className={styles.icon} />
          </div>
        </div>

        <div className={styles.element2}>
          <div className={styles.text}>
            <h6>Naturalnie występujacy kolagen</h6>
            <p>Pomaga zachować zdrowe stawy i skórę</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faAtom} className={styles.icon} />
          </div>
        </div>

        <div className={styles.element3}>
          <div className={styles.text}>
            <h6>Zdrowy układ trawienny</h6>
            <p>
              Korzystnie wpływa na utrzymanie prawidłowej flory bakteryjnej
              jelit
            </p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faUserDoctor} className={styles.icon} />
          </div>
        </div>

        <div className={styles.element4}>
          <div className={styles.text}>
            <h6>Konserwowane naturalnie</h6>
            <p>Bez dodatku sztucznych barwników i konserwantów</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faFlask} className={styles.icon} />
            <FontAwesomeIcon icon={faSlash} className={styles.icon} />
          </div>
        </div>

        <div className={styles.element5}>
          <div className={styles.text}>
            <h6>Bez dodatku zbóż</h6>
            <p>
              Odpowiednie dla psów z nietolerancją lub nadwrażliwością na zboża
            </p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faWheatAwn} className={styles.icon} />
            <FontAwesomeIcon icon={faSlash} className={styles.icon} />
          </div>
        </div>

        <div className={styles.element6}>
          <div className={styles.text}>
            <h6>Układ odpornościowy</h6>
            <p>Korzystnie wpływa na funkcjonowanie układu odpornościowego</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faShieldVirus} className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionComposition;
