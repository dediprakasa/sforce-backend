const express = require('express')
const router = express.Router()
const { UserController } = require('../controllers')

router.post('/', UserController.register)

module.exports = router
