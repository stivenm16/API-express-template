// userRoutes.js
import express from 'express'
import fs from 'fs/promises'
import jwt from 'jsonwebtoken'
import { authenticateToken } from '../middleware/authMiddleware.js'

const router = express.Router()

// Cargar datos desde el archivo JSON
const usersData = await fs.readFile('./src/data/users.json')

router.get('/', authenticateToken, (req, res) => {
  console.log('doneeee')
  res.json({ res: 'funciona' })
})
router.post('/login', (req, res) => {
  console.log('prueba')
  const user = { id: 1, username: 'usuario1' }
  const accessToken = jwt.sign(user, 'your-secret-key')
  res.json({ accessToken, userStatus: 'Autenticado!' })
})

// Agregar más rutas para manipular los datos según sea necesario

export default router
