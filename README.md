# Express Authentication README

## Introduction

This Express.js application includes user authentication features for securing access to protected routes. It utilizes the Mongoose library for MongoDB interactions, JWT (JSON Web Tokens) for session management, and bcrypt for password hashing.

## Getting Started

1. Install dependencies: `npm install`
2. Run the server: `npm start`

## API Documentation

The API documentation is provided using Swagger and is available at `http://localhost:3000/api-docs`. You can explore and test the API endpoints using the Swagger UI.

## Features

- User registration with email and password.
- Password hashing for secure storage.
- JWT-based authentication for session management.
- Middleware for protecting routes that require authentication.
- Error handling for authentication-related issues.

## File Structure

### Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `mongoose`: MongoDB object modeling tool.
- `jsonwebtoken`: JSON Web Token implementation.
- `bcrypt`: Library for hashing passwords securely.

### File Organization

- **`Models/User.js`**: Defines the User schema and model.
- **`middleeware/authMidlleware.js`**: Middleware for protecting routes that require authentication.
- **`routes/authRoutes.js`**: Handles user registration, login, and logout routes.
- **`controllers/authController.js`**: Controller functions for handling authentication logic.
- **`.env`**: Configuration file for storing secrets and settings.

## Setup

1. Install dependencies: `npm install`
2. Set up a MongoDB database and update the connection string in `.env`.
3. Customize authentication routes and controllers as needed.
4. Ensure that required environmental variables (e.g., JWT secret) are configured.

## NOTES
 Before running the application, make sure to update the MongoDB connection string in the .env file with your own MongoDB database connection.





