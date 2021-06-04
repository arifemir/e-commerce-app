import express from 'express';
const router = express.Router();

import {
  authUser,
  deleteUser,
  getAllUser, getUserById,
  getUserProfile,
  registerUser, updateUser,
  updateUserProfile,
} from '../controllers/userController';
import { checkIsAdmin } from '../middleware/checkIsAdminMiddleware';
import { takeTokenGiveUser } from '../middleware/tokenValidatorMiddleware';

router
  .route('/')
  .post(registerUser)
  .get(takeTokenGiveUser, checkIsAdmin, getAllUser);
router
  .post('/login', authUser);
router
  .route('/profile')
  .get(takeTokenGiveUser, getUserProfile)
  .put(takeTokenGiveUser, updateUserProfile);
router
  .route('/:id')
  .get(takeTokenGiveUser, checkIsAdmin, getUserById)
  .delete(takeTokenGiveUser, checkIsAdmin, deleteUser)
  .put(takeTokenGiveUser, checkIsAdmin, updateUser);

export default router;
