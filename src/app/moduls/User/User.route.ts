import express from 'express'
import { CreateAUser } from './User.controller'
const router = express.Router()
router.post('/create-user', CreateAUser)
export default router
