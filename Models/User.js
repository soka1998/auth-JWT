const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')
const { error } = require('console')


// Define the User schema
const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email'],
    },
  
    password: {
      type: String,
      required: [true, 'please enter a valid email'],
      minlength: [6, 'At least enter 6 character'],
    },
  }
  
  )
 // Middleware: Run a function after a new doc is saved to DB
userSchema.post('save', function (doc, next) {
    console.log('new user was created and saved successfully', doc)
    next()
  })

// Middleware: Run a function before user is saved to DB
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    // const salt = await bcrypt.hash(this.password,salt)
    next()
  })

  //static method to login user
userSchema.statics.login = async function (email, password) {
  //Find the user by email
    const user = await this.findOne({ email })
    if (user) {
      const auth = await bcrypt.compare(password, user.password)
      if (auth) {
        return user
      }
      throw Error('incorrect password')
    }
    throw Error('incorrect email')
  }
  
  const User = mongoose.model('user', userSchema)
  module.exports = User
  