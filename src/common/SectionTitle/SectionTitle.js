import styles from './SectionTitle.module.scss';

const SectionTitle = (props) => {
    return(
        <h4 className={styles.title}>{props.name}</h4>
    )
};

export default SectionTitle;