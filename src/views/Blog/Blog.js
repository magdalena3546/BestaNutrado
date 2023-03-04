import SectionTitle from '../../common/SectionTitle/SectionTitle';
import PostRender from '../../features/PostRender/PostRender';
import styles from './Blog.module.scss';

const Blog = () => {
    return(
       <>
        <SectionTitle name="Najnowsze posty"/>
        <PostRender />
       </> 
    )
};

export default Blog;