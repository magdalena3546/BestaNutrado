import styles from './PostDescription.module.scss';
import Button from '../Button/Button';

const PostDescription = props => {
  return(
    <div className={styles.box}>
      <div className={styles.image}><img src={"./images/" + props.image} alt={props.alt}/></div>
      <p className={styles.date}>{props.publishedDate}</p>
      <h6>{props.title}</h6>
      <p>{props.shortDescription}</p>
      <Button name="więcej"></Button>
    </div>
  )
};

export default PostDescription;