// Require Express Router
const authRouter = require('express').Router()

// Import User Controller
const controller = require('../controllers/authController')

// Lessons Routes
authRouter.get('/lessons', controller.render_lessons)

// Notifications Routes
authRouter.get('/notifications', controller.render_notifications)

// Settings Routes
authRouter.get('/settings', controller.render_settings)

// Export User Router
module.exports = authRouter