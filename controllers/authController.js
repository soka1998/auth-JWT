const User = require('../Models/User')
const jwt = require('jsonwebtoken')

//handle errors function
const handleErrors = (err) => {
  console.log(err.message, err.code)
  //Initialize an errors object
  let errors = { email: '', password: '' }

  //Check if the error message is 'incorrect email'
  if (err.message === 'incorrect email') {
    errors.email = 'that email is not registered '
  }

  //Check if the error message is 'incorrect password'
  if (err.message === 'incorrect password') {
    errors.password = 'that password is incorrect '
  }

  // Check if the error code is 11000 (duplicate error code)
  if (err.code === 11000) {
    errors.email = 'that email is already registered '
    return errors
  }

  //Validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    })

    return errors
  }
}
// Setting the maximum age for the JWT token to 3 days
const maxAge = 3 * 24 * 60 * 60
// Function to create a JWT token with a given user ID
const createToken = (id) => {
  // Signing the token with the user ID, a secret key, and setting an expiration time
  return jwt.sign({ id }, 'SECRET-KEY', {
    expiresIn: maxAge,
  })
}

// Handling user signup
module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body
  try {
    // Creating a new user
    const user = await User.create({ email, password })
    const token = createToken(user._id)
    // Setting the JWT cookie and responding with the user ID

    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.status(201).json(user._id)
  } catch (err) {
    // Handling errors and responding with error details

    const errors = handleErrors(err)
    res.status(400).json(errors)
  }
}

// Handling user login
module.exports.login_post = async (req, res) => {
  const { email, password } = req.body
  try {
    // Logging in the user
    const user = await User.login(email, password)
    const token = createToken(user._id)
    // Setting the JWT cookie and responding with the user ID

    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.status(200).json({ user: user._id })
  } catch (err) {
    const errors = handleErrors(err)
    res.status(400).json({ errors })
  }
}
// Handling user logout
module.exports.logout_get = (req, res) => {
  // Clearing the JWT cookie and redirecting to the home page

  res.cookie('jwt', '', { maxAge: 1 })
  res.redirect('/')
}
