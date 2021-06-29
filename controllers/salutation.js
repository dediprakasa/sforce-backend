class SalutationController {
  static findAll = async (req, res, next) => {
    const contactData = await req.SF.sobject('Contact').describe()
    const salutationsData = contactData.fields.filter((contact) => {
      return contact.name === 'Salutation'
    })
    const salutations = salutationsData[0].picklistValues.map((salutation) => {
      return salutation.value
    })
    res.status(200).json({ salutations })
  }
}

module.exports = SalutationController
