// UserController.js
export const getAllUsers = (req, res) => {
  res.json({ message: 'Obteniendo todos los usuarios' })
}

export const getLogin = (req, res) => {
  const user = { id: 1, username: 'usuario1' }
  res.json({ userStatus: 'Autenticado!' })
}
