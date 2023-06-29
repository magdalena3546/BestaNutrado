import styles from "./Partnership.module.scss";

const Partnership = ({ setColor }) => {
  setColor("#fff");
  return (
    <>
      <div className={styles.banner}>
        <h3>Współpraca</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.photoDog}></div>
        <div className={styles.text}>
          <h4>
            Jesteśmy otwarci na współpracę. Serdecznie zapraszamy do kontaktu
            pod numerem 608382988.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Partnership;
