const express = require('express')
const userRouter = express.Router()
const User = require('../../controller/users')

//get all
userRouter.get('/users', User.getAllUsers)

//get single
userRouter.get('/users/:id', User.getSingleUser)

//post
userRouter.post('/users', User.addUser)

//update
userRouter.put('/users/:id', User.updateUser)

//delete single
userRouter.delete('/users/:id', User.deleteUser)


module.exports = userRouter