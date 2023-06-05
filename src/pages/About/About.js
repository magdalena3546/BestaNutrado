import styles from "./About.module.scss";
import AboutBanner from "./AboutBanner";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../common/Button/Button";

const About = () => {
  return (
    <>
      <div className={styles.banner}>
        <h3>O nas</h3>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.aside}>
          <div className={styles.photo}></div>
          <img
            className={styles.photoFood}
            src="/images/besta1.png"
            alt="besta nutrado opakowanie karmy"></img>
        </div>
        <div className={styles.content}>
          <SectionTitle name="Besta Nutrado" />
          <p>
            Besta Nutrado to renomowana marka specjalizująca się w produkcji
            wysokiej jakości karmy dla psów i kotów. Od lat zdobywamy uznanie i
            zaufanie właścicieli zwierząt w Polsce, oferując im produkty o
            doskonałej jakości i wartości odżywczej. Kładziemy duży nacisk na
            składniki odżywcze i naturalne składniki w swoich produktach. Nasze
            karmy są opracowywane przy użyciu najnowszych badań i innowacyjnych
            technologii, aby zapewnić optymalne żywienie i wsparcie dla zdrowia
            zwierząt.
          </p>
          <Button link="/bestaArticle" name="Czytaj dalej" />
        </div>
      </div>
      <AboutBanner />
    </>
  );
};

export default About;
