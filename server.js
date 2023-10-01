import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import fs from 'fs'
import { createServer } from 'http'
import { errorHandler } from './src/middleware/errorHandler.js'
import authRoutes from './src/routes/authRoutes.js'
import userRoutes from './src/routes/userRoutes.js'

// Configura las variables de entorno desde el archivo .env
dotenv.config()

const app = express()
app.use(cors())

const usersData = JSON.parse(fs.readFileSync('./src/data/users.json'))

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use(errorHandler)

const server = createServer(app)

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`)
})
