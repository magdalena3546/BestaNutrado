import styles from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const Button = (props) => {
    return(
    // <a href ="#" className={styles.btn}>{props.name}</a>
    <a href="/" className={styles.button}>{props.name}
        <FontAwesomeIcon icon={faPaw} className={styles.icon}/>
    </a>
    )
};

export default Button;