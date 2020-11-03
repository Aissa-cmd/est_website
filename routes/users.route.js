// Require Express Router
const userRouter = require('express').Router()

// Import User Controller
const controller = require('../controllers/userController')

// Login Routes
userRouter.get('/login', controller.render_login)

// Register Routes
userRouter.get('/register', controller.render_register)

// Reset Password Routes
userRouter.get('/reset-password', controller.render_reset)

// Verify Account Routes
userRouter.get('/verify-account', controller.render_verify)

// Export User Router
module.exports = userRouter