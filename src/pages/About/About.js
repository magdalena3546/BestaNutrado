import { Container } from 'react-bootstrap';
import styles from './About.module.scss'

const About = () => {
    return (
        <Container className={styles.wrapper}>
            <h4>O nas</h4>
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptatibus explicabo at esse tempora incidunt recusandae aut. Laborum cum quaerat aspernatur quidem, magnam nisi pariatur ipsum eos praesentium, numquam itaque.
                Id in temporibus ab corporis voluptatibus excepturi pariatur nihil ipsa ad ut reprehenderit illum provident possimus, numquam impedit laboriosam quidem assumenda incidunt ex velit est? Eius veniam corporis rerum excepturi.
                Possimus aut veniam adipisci vel eos sit. Officiis pariatur commodi voluptatum autem. Repellendus, veniam labore libero veritatis hic modi. Officiis, quibusdam aspernatur! Magni sapiente amet fuga. Quo ea ex id.
                Nam, asperiores reiciendis at sint non laboriosam voluptas eligendi officiis, quos atque aliquid. Itaque saepe quidem veritatis necessitatibus illum nobis culpa cumque animi iste, inventore repudiandae fugit, atque qui ea!
                </p>
            </div>
        </Container>
    );
};

export default About;