const validBirthdate = require('./validBirthdate')
const validEmail = require('./validEmail')
const validPhone = require('./validPhone')

module.exports = async (values, SF) => {
  const { Salutation, FirstName, LastName, Birthdate, Email, ...Phone } = values
  const errors = []

  if (
    Salutation &&
    Salutation.trim() &&
    !['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.'].includes(Salutation) //should come from cache
  ) {
    throw new Error('Invalid salutation')
  }

  if (!FirstName) {
    throw new Error('Invalid firstname')
  }

  if (!LastName) {
    throw new Error('Invalid lastname')
  }

  if (!validBirthdate(Birthdate)) {
    throw new Error('Invalid birthdate')
  }

  if (!validEmail(Email)) {
    throw new Error('Invalid email')
  }

  const duplicateEmail = await SF.query(
    `SELECT Email FROM Contact WHERE Email = '${Email}'`
  )

  if (duplicateEmail.records.length > 0) {
    throw new Error('Email had already been taken')
  }

  const phoneNumber = Object.keys(Phone)[0]
  if (!validPhone(Phone[phoneNumber])) {
    throw new Error('Invalid phonenumber')
  }
}
