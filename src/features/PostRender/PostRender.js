import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import PostDescription from "../../common/PostDescription/PostDescription";
import { getAllPosts } from "../../redux/postsRedux";

const PostRender = () => {
    const posts = useSelector(getAllPosts);
    return(
        <Container className='my-5'>
            <Row xs={1} md={3}>
              {posts.map(post => <Col key={post.id} ><PostDescription {...post} id={post.id} /></Col>)}
            </Row>
        </Container>
    )
};

export default PostRender;