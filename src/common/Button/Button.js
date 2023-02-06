import styles from './Button.module.scss';

const Button = (props) => {
    return(
    <a href ="#" className={styles.btn}>{props.name}</a>
    )
};

export default Button;