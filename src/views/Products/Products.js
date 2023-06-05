import Button from "../../common/Button/Button";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import styles from "./Products.module.scss";

const Products = () => {
  return (
    <div className={styles.container}>
      <SectionTitle name="Nasze produkty" />
      <div className={styles.content}>
        <div className={styles.dog}>
          <img src="./images/dogProduct.png" alt="biały pies"></img>
        </div>
        <div className={styles.text}>
          <h5>Poznaj nasze produkty</h5>
          <p>
            Zapoznaj się z gamą naszych produktów. Wybierz idealną karmę dla
            twojego pupila!
          </p>
          <Button link="/products" name="Więcej" />
        </div>
        <div className={styles.photo}>
          <img
            src="./images/besta1.png"
            alt="opakowanie karmy Besta Nutrado"></img>
        </div>
      </div>
    </div>
  );
};
export default Products;
