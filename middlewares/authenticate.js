function authenticate(req, res, next) {
  console.log('Auth')
  next()
}

module.exports = authenticate