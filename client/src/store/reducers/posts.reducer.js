import { postsConstants as C } from "../constants/posts.constants";


const initialState = {
    loading: false,
    error: false,
    items: [],
};

export const posts = (state = initialState, { type, payload }) => {
    switch (type) {
        case C.GET_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case C.GET_POSTS_SUCCESS:
            return {
                loading: false,
                items: [
                    ...state.items,
                    ...payload,
                ]
            };
        case C.GET_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    };
};