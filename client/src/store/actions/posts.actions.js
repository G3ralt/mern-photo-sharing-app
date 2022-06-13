import { postsService } from "../../services/posts.service";
import { postsConstants as C } from "../constants/posts.constants";

const getPosts = (offset, pageNumber) => async(dispatch) => {

    dispatch(request());

    try {
        const { data: newPosts } = await postsService.fetchPosts(offset, pageNumber);
        dispatch(success(newPosts));
    } catch (error) {
        dispatch(failure());
    }


    function request() { return { type: C.GET_POSTS_REQUEST } };

    function success(posts) { return { type: C.GET_POSTS_SUCCESS, payload: posts } };

    function failure() { return { type: C.GET_POSTS_FAILURE } };
};
const postsActions = {
    getPosts,
};

export default postsActions;