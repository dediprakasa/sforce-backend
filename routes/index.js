const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const salutationRouter = require('./salutation')

router.use('/auth', userRouter)
router.use('/salutations', salutationRouter)

module.exports = router
