import express from 'express'
const router = express.Router()

import { authUser } from '../controllers/userController'

router.post('/login', authUser)
