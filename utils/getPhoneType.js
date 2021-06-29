module.exports = (phoneNumber) => {
  const strPhone = phoneNumber.toString()
  const firstDigit = strPhone[0]

  switch (firstDigit) {
    case '6':
      return 'HomePhone'
      break
    case '8':
    case '9':
      return 'MobilePhone'
      break
    default:
      return 'Phone'
  }
}
