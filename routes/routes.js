// Require Express Router
const Router = require('express').Router()

// Include All Routes
const usersRouter = require('./users.route')
const authRouter = require('./auth.route')

// User Child Routes
Router.use('/', usersRouter)
Router.use('/u', authRouter)

// Require Main Controller
const controller = require('../controllers/controller')

// Home Page Route
Router.get("/", controller.index)

// 404 Page Redirection
Router.get("*", function (req, res) {
  res.status(404).render("errors/404")
})

// Export Main Router
module.exports = Router