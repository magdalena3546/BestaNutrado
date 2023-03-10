import Button from '../../common/Button/Button';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import styles from './Products.module.scss';

const Products = () => {
    return (
        <div className={styles.container}>
            <SectionTitle name="Nasze produkty"/>
            <div className={styles.content}>
                <div><img src='./images/dogProduct.png' alt="biały pies"></img></div>
                <div>
                    <h4>Poznaj nasze produkty!</h4>
                    <p>Zapoznaj się z gamą naszych produktów. Wybierz idealną karmę dla twojego pupila!</p>
                    <Button link="/" name="Więcej" />
                </div>
                <div className={styles.photo}><img src='./images/besta1.png' alt="opakowanie karmy Besta Nutrado"></img></div>
            </div>
        </div>
    );
};
 export default Products;