// src/routes/authRoutes.js
import express from 'express'
import getToken from '../controllers/AuthController.js'
import { getAllUsers } from '../controllers/userController.js'
import authenticateToken from '../middleware/authMiddleware.js'

const router = express.Router()

// Endpoint para la autenticación (iniciar sesión)
router.post('/getToken', getToken)

// Ruta protegida que requiere autenticación
router.get('/getAllUsers', authenticateToken, getAllUsers)

export default router
