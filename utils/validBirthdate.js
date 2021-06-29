module.exports = (birthdate) => {
  if (!(birthdate instanceof Date)) return false
  const ageDiffMs = Date.now() - birthdate.getTime()
  const ageDate = new Date(ageDiffMs)
  const age = Math.abs(ageDate.getUTCFullYear() - 1970)

  return age >= 16
}
