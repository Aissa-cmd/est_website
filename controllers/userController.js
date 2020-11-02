module.exports.render_login = (req, res) => {
  res.render('pages/login')
}

module.exports.render_register = (req, res) => {
  res.render('pages/register')
}

module.exports.render_reset = (req, res) => {
  res.render('pages/forgot-password')
}

module.exports.render_verify = (req, res) => {
  res.render('pages/verify-account')
}