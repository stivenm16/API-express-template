export function errorHandler(err, req, res, next) {
  if (err instanceof MiErrorPersonalizado) {
    res.status(err.status).json({ error: err.message, status: err.status })
  } else {
    // Manejo de otros errores
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

class MiErrorPersonalizado extends Error {
  constructor(message, status) {
    super()
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.message = message || 'Error interno del servidor.'
    this.status = status || 500
  }
}

export default MiErrorPersonalizado
