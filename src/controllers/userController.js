import MiErrorPersonalizado from '../middleware/errorHandler.js'

// const MiErrorPersonalizado = require('../middleware/errorHandler')
export const getAllUsers = (req, res, next) => {
  res.json({ message: 'Obteniendo todos los usuarios' })
}

export const getLogin = (req, res, next) => {
  res.json({ userStatus: 'Autenticado!' })
}
export const getError = (req, res, next) => {
  const error = new MiErrorPersonalizado(
    'Este es un mensaje de error personalizado',
    401,
  )
  throw error
}
