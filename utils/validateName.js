module.exports = (name) => {
  if (!name) return false
  return /[^A-Za-z]/.test(name)
}
