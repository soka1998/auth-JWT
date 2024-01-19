

const express = require('express')
const Post = require('../Models/Postmodel.js')
const { model } = require('mongoose')
const { requireAuth } = require('../middleware/authMidlleware.js')
// const { requireAuth } = require('../middleware/authMidlleware.js')

const routes = express.Router()
routes.get('/recipes', async (req, res) => {
  try {
    // Finding all posts in the database
    const data = await Post.find({})
    if (!data) {
      res.status(400).send({ message: 'Iteam not fond ' })
    }
    // Sending the posts as a JSON response
    res.json(data)
  } catch (error) {
    res.status(500).send({ message: 'error server ' })
  }
})

// POST request handler for the root path
routes.post('/recipes', requireAuth, async (req, res) => {
  // Creating a new post in the database using the request body
  await Post.create(req.body)
  // Sending a success message as a JSON response
  res.json('created successfully')
})

// GET request handler for a specific post by ID
routes.get('/recipes/:id', async (req, res) => {
  // Finding the post with the specified ID in the database
  const info = await Post.findById(req.params.id)
  // Sending the post as a JSON response
  res.json(info)
})

// PUT request handler for updating a specific post by ID
routes.put('/recipes/:id', requireAuth, async (req, res) => {
  // Updating the post with the specified ID in the database using the request body
  await Post.findByIdAndUpdate(req.params.id, req.body)
  // Sending a success message as a JSON response
  res.json('updated succeessfully')
})

// DELETE request handler for deleting a specific post by ID
routes.delete('/recipes/:id', requireAuth, async (req, res) => {
  // Deleting the post with the specified ID in the database
  await Post.findByIdAndDelete(req.params.id)
  // Sending a success message as a JSON response
  res.json('Deleted Successfully')
})

module.exports = routes
