const getPhoneType = require('../utils/getPhoneType')
const validateContact = require('../utils/validateContact')

class UserController {
  static register = async (req, res, next) => {
    try {
      const {
        salutation: Salutation,
        firstName: FirstName,
        lastName: LastName,
        birthdate: Birthdate,
        email: Email,
        phone: Phone,
      } = req.body

      const contact = {
        Salutation,
        FirstName,
        LastName,
        Birthdate: new Date(Birthdate),
        Email,
        [getPhoneType(Phone)]: Phone,
      }

      await validateContact(contact, req.SF)

      req.SF.sobject('Contact').create(contact, function (err, ret) {
        if (err || !ret.success) {
          return next(err)
        }

        console.log('Created record id : ' + ret.id)
        res.status(201).send(ret)
      })
    } catch (e) {
      next(e)
    }
  }
}

module.exports = UserController
