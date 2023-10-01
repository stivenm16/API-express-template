// userRoutes.js
import express from 'express'
import fs from 'fs/promises'
import { getAllUsers, getLogin } from '../controllers/userController.js'
import { authenticateToken } from '../middleware/authMiddleware.js'

const router = express.Router()

// Cargar datos desde el archivo JSON
const usersData = await fs.readFile('./src/data/users.json')

router.get('/', authenticateToken, (req, res) => {
  res.json({ res: 'funciona' })
})
router.post('/login', authenticateToken, getLogin)

router.post('/getAllUser', authenticateToken, getAllUsers)

export default router
