import styles from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return(
    // <a href ="#" className={styles.btn}>{props.name}</a>
    <Link to={props.link} className={styles.button}>{props.name}
        <FontAwesomeIcon icon={faPaw} className={styles.icon}/>
    </Link>
    )
};

export default Button;