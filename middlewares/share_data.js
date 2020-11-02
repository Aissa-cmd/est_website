/**
 * This Middleware is Used to Enable Sharing Data
 * Between Routes Using Sessions
 */
function enable_common_data(req, res, next) {
  // If There is Data To Share
  if (req.session.common) {
    // Share Data With The The Next Route
    req.session.common = req.session.common
  } else {
    // Reset Common Data
    req.session.common = {}
  }

  // Next Controller/Middleware
  next()
}

module.exports = enable_common_data