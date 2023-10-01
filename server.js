import express from 'express'
import fs from 'fs'
import { createServer } from 'http'
import authRoutes from './src/routes/authRoutes.js'
import userRoutes from './src/routes/userRoutes.js'

const app = express()
const port = process.env.PORT || 3000

const usersData = JSON.parse(fs.readFileSync('./src/data/users.json'))

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

const server = createServer(app)

server.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`)
})
