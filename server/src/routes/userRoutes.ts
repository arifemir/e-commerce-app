import express from 'express'
const router = express.Router()

import { authUser, getUserProfile, registerUser } from '../controllers/userController'
import { takeTokenGiveUser } from '../middleware/tokenValidatorMiddleware'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(takeTokenGiveUser, getUserProfile)

export default router