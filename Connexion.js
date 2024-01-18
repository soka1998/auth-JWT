// Importing required modules
const dotenv = require('dotenv') // for loading environment variables from a .env file
const { default: mongoose } = require('mongoose') // for connecting to MongoDB database

// Loading environment variables from .env file
dotenv.config()

// Defining the database connection string
const DB = process.env.DB

// Connecting to the database
mongoose.connect(DB)

// Listening for successful database connection
mongoose.connection.on('connected', () => {
  console.log('db connected') // Logs a message to the console when the database is connected
})

// Listening for database connection errors
mongoose.connection.on('error', () => {
  console.log('db NOT connected') // Logs a message to the console when there is an error connecting to the database
})
