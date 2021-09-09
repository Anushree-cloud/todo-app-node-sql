const express = require('express')
const authRouter = express.Router()
const Auth = require('../../controller/auth')

authRouter.post('/users/login', Auth.login)

module.exports = authRouter
