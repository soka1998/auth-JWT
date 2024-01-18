const { Router } = require('express')
const authController = require('../controllers/authController')

const router = Router()
//create a new user in DB
router.post('/signup', authController.signup_post)

//authenticate a current user
router.post('login', authController.login_post)

//log a user out from the application
router.get('/logout', authController.logout_get)

module.exports = router
