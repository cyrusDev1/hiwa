import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import PostController from '../controllers/PostController';
import auth from '../middleware/auth';
const router = Router();

router.post('/register', UsersController.register);
router.post('/login', UsersController.login);
router.post('/story', auth, PostController.postStory);
router.get('/stories', PostController.getStories);

module.exports = router;
