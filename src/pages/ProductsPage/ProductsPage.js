import styles from "./ProductsPage.module.scss";

const ProductsPage = ({ setColor }) => {
  setColor("#fff");
  return (
    <>
      <div className={styles.banner}>
        <h3>Produkty</h3>
      </div>
      <div className={styles.content}>
        <h4>
          W swojej ofercie posiadamy karmy suche oraz mokre, a także przysmaki.
          Strona jest obecnie w przygotowaniu, zachęcamy do zapoznania się z
          naszymi aukcjami na allegro. Już wkrótce otwarcie naszego sklepu
          internetowego. Serdecznie zapraszamy!
        </h4>
      </div>
    </>
  );
};

export default ProductsPage;
