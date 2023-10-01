import jwt from 'jsonwebtoken'

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')
  const tokenParsed = req.headers.authorization.split(' ')[1]
  if (!token) return res.sendStatus(401)

  jwt.verify(tokenParsed, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err)
      return res.sendStatus(403)
    }
    req.user = user
    next()
  })
}

export default authenticateToken
