// Require Express Router
const authRouter = require('express').Router()

// Import User Controller
const controller = require('../controllers/authController')

// Lessons Routes
authRouter.get('/lessons/:module', controller.render_lessons)
authRouter.get('/lessons/videos/:course-slug', controller.render_video_player)
authRouter.get('/lessons/articles/:course-slug', controller.render_article)

// Notifications Routes
authRouter.get('/notifications', controller.render_notifications)

// Settings Routes
authRouter.get('/settings', controller.render_settings)

// Export User Router
module.exports = authRouter