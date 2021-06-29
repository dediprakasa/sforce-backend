let statusCode, message

module.exports = (err, req, res, next) => {
  statusCode = err.statusCode || 500
  message = err.message || 'Internal server error'

  return res.status(statusCode).json({ error: { message } })
}
