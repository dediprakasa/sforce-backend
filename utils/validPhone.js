module.exports = (phoneNumber) => {
  const strPhone = phoneNumber.toString()
  if (
    /^\d+$/.test(strPhone) &&
    strPhone.length === 8 &&
    ['6', '8', '9'].includes(strPhone[0])
  ) {
    return true
  }
  return false
}
