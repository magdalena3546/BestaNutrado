import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getPostById } from "../../redux/postsRedux";
import styles from "./Post.module.scss";

const Post = ({ setColor }) => {
  setColor("#fff");
  const { id } = useParams();
  const postData = useSelector((state) => getPostById(state, id));
  if (!postData) return <Navigate to="/" />;
  return (
    <>
      <div className={styles.banner}>
        <h3>{postData.title}</h3>
      </div>
      <Container>
        <div className={styles.photo}>
          <img src={"/images/" + postData.image} alt={postData.alt}></img>
        </div>
        <div className={styles.info}>
          <p>{postData.author}</p>
          <p>{postData.publishedDate}</p>
        </div>
        <div className={styles.text}>
          {postData.content.map((elm) => (
            <p>{elm}</p>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Post;
