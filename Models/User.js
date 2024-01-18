const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')
const { error } = require('console')

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
  })
  //fire a function when a new doc saved to DB
userSchema.post('save', function (doc, next) {
    console.log('new user was created and saved successfully', doc)
    next()
  })