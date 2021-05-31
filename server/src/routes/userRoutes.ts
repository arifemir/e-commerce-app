import express from 'express';
const router = express.Router();

import { authUser, getAllUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/userController';
import { checkIsAdmin } from '../middleware/checkIsAdminMiddleware';
import { takeTokenGiveUser } from '../middleware/tokenValidatorMiddleware';

router.route('/').post(registerUser).get(takeTokenGiveUser, checkIsAdmin, getAllUser);
router.post('/login', authUser);
router.route('/profile').get(takeTokenGiveUser, getUserProfile).put(takeTokenGiveUser, updateUserProfile);

export default router;
