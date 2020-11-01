<<<<<<< HEAD
// Require Express Router
const userRouter = require('express').Router()

// Import User Controller
const controller = require('../controllers/userController')

// Login Routes
userRouter.get('/login', controller.render_login)

// Register Routes
userRouter.get('/register', controller.render_register)

// Reset Password Routes
userRouter.get('/reset', controller.render_reset)

// Verify Account Routes
userRouter.get('/verify', controller.render_verify)

// Export User Router
=======
// Require Express Router
const userRouter = require('express').Router()

// Import User Controller
const controller = require('../controllers/userController')

// Login Routes
userRouter.get('/login', controller.render_login)

// Register Routes
userRouter.get('/register', controller.render_register)

// Reset Password Routes
userRouter.get('/reset', controller.render_reset)

// Verify Account Routes
userRouter.get('/verify', controller.render_verify)

// Export User Router
>>>>>>> 86d0ff7... main folder structure
module.exports = userRouter