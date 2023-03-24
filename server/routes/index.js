import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import PostController from '../controllers/PostController';
import CommentController from '../controllers/CommentController';

import auth from '../middleware/auth';
const router = Router();

router.post('/register', UsersController.register);
router.post('/login', UsersController.login);

router.post('/story', auth, PostController.postStory);
router.get('/stories', PostController.getStories);
router.get('/story/:id', PostController.getStory);
router.get('/my-stories', auth, PostController.getMyStories);

router.post('/comment', CommentController.postComment);
router.get('/story/:id/comments', CommentController.getComments);

module.exports = router;
