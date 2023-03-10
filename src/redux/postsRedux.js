export const getAllPosts = ({posts}) => posts;
export const getPostById = ({posts}, postId) => posts.find(post => post.id === postId); 

const postsReducer = (statePart = [], action)  => {
    switch (action.type) {
        default:
            return statePart;
    };
};
export default postsReducer;