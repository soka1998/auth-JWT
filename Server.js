// Importing dotenv to load environment variables from .env file
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRoutes.js')
const cookieParser = require('cookie-parser')
// const routes = require('./routes/Routes.js')
dotenv.config()

// Importing express framework
const express = require('express')
const routes = require('./routes/Routes.js')
const app = express()

// Loading environment variable for PORT
const PORT = process.env.PORT

// Connecting to the database
require('./Connexion')

