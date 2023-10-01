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

// Cargar datos desde el archivo JSON
const usersData = await fs.readFile('./src/data/users.json')

router.post('/err', authenticateToken, getError)
router.post('/login', authenticateToken, getLogin)

router.post('/getAllUsers', authenticateToken, getAllUsers)

export default router
