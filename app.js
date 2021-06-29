require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const port = process.env.PORT || 4000
const salesforce = require('./middlewares/salesforce')
const errorHandler = require('./exceptions/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(salesforce)
app.use('/', routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Interaktiv app listening at http://localhost:${port}`)
})
