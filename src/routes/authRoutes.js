// src/routes/authRoutes.js
import express from 'express'
import jwt from 'jsonwebtoken'
import { authenticateToken } from '../middleware/authMiddleware.js'

const router = express.Router()

// Endpoint para la autenticación (iniciar sesión)
router.post('/login', (req, res) => {
  const user = { id: 1, username: 'usuario1' }
  const accessToken = jwt.sign(user, 'your-secret-key', {
    expiresIn: '1h',
  })
  res.json({ accessToken })
})

// Ruta protegida que requiere autenticación
router.get('/profile', authenticateToken, (req, res) => {
  res.json(req.user)
})

export default router
