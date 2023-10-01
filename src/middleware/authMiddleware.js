import jwt from 'jsonwebtoken'

export function authenticateToken(req, res, next) {
  const token = req.header('Authorization')
  const tokenParsed = req.headers.authorization.split(' ')[1]
  if (!token) return res.sendStatus(401)

  jwt.verify(tokenParsed, 'your-secret-key', (err, user) => {
    if (err) {
      console.log(err)
      return res.sendStatus(403)
    }

    req.user = user
    next()
  })
}
