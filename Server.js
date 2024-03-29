// Importing dotenv to load environment variables from .env file
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRoutes.js')
const cookieParser = require('cookie-parser')
// const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
// const routes = require('./routes/Routes.js')
dotenv.config()

// Importing express framework
const express = require('express');
const routes = require('./routes/Routes.js');
const app = express()


// const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Loading environment variable for PORT
const PORT = process.env.PORT

// Connecting to the database
require('./Connexion')


// Using express.json() middleware to parse JSON request bodies
app.use(express.json())
app.use(cookieParser())
app.use(routes)
app.use(authRoutes)


// Starting the server on the specified PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
  
  app.use(authRoutes)
  
