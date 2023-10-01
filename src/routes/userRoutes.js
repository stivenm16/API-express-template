// userRoutes.js
import express from 'express'
import fs from 'fs/promises'
import {
  getAllUsers,
  getError,
  getLogin,
} from '../controllers/userController.js'
import authenticateToken from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/err', authenticateToken, getError)
router.post('/login', authenticateToken, getLogin)

router.post('/getAllUsers', authenticateToken, getAllUsers)

export default router
