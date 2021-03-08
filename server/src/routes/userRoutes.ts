import express from 'express'
const router = express.Router()

import { authUser, getUserProfile } from '../controllers/userController'
import { takeTokenGiveUser } from '../middleware/tokenValidatorMiddleware'

router.post('/login', authUser)
router.route('/profile').get(takeTokenGiveUser, getUserProfile)

export default router