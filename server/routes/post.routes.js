import express from "express";
import postController from '../controllers/post.controllers.js';

const postRoutes = express.Router();

postRoutes.get('/', postController.getPosts);
postRoutes.post('/', postController.createPost);

export default postRoutes;