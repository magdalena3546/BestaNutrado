import styles from './Partnership.module.scss';

const Partnership = () => {
    return(
    <>
        <div className={styles.banner}>
            <h3>Współpraca</h3>
        </div>
        <div className={styles.content}>
            <div className={styles.photoDog}></div>
            <div className={styles.text}><h4>Jesteśmy otwarci na współpracę. Serdecznie zapraszamy do kontaktu!</h4></div>
        </div>
    </>
    )
};

export default Partnership;