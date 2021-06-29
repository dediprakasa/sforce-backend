const express = require('express')
const router = express.Router()
const { SalutationController } = require('../controllers')

router.get('/', SalutationController.findAll)

module.exports = router
