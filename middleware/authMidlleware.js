const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt

  //check json web token exists and is verified
  if (token) {
    res.redirect('/login')
    jwt.verify(token, SECRET - KEY, (err, decodedToken) => {
      if (err) {
        console.log(err.message)
        res.redirect('/login')
      } else {
        console.log(decodedToken)
        next()
      }
    })
  } else {
    res.redirect('/login')
  }
  
}