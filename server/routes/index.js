import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import auth from '../middleware/auth';
const router = Router();

router.post('/register', UsersController.register);
router.post('/login', UsersController.login);
router.post('/app', auth);
module.exports = router;
