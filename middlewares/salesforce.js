const jsforce = require('jsforce')

const conn = new jsforce.Connection({
  loginUrl: 'https://interaktiv4-dev-ed.my.salesforce.com',
})

const username = process.env.USERNAME
const password = process.env.PASSWORD

const salesforce = async (req, res, next) => {
  conn.login(username, password, function (err, userInfo) {
    if (err) {
      next(err)
    }
    if (userInfo) {
      console.log(conn.accessToken)
      console.log(conn.instanceUrl)
      console.log('User ID: ' + userInfo.id)
      console.log('Org ID: ' + userInfo.organizationId)
      req.SF = conn
      next()
    } else {
      next(new Error('Something went wrong while connecting to Salesforce'))
    }
  })
}

module.exports = salesforce
