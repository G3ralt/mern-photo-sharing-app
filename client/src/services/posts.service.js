import axios from 'axios';
import { apiBaseUrl } from '..';

const fetchPosts = ({ offset, pageNumber }) => {
    const limit = 5;
    return axios.get(`${apiBaseUrl}/posts?limit=${limit}&offset=${offset}&page=${pageNumber}`);
};

export const postsService = {
    fetchPosts,

};