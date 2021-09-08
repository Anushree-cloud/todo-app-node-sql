const express = require('express')
const userRouter = express.Router()
const User = require('../../controller/users')

//get all
userRouter.get('/todos', User.getAllUsers)

//get single
userRouter.get('/todos/:id', User.getSingleUser)

//post
userRouter.post('/todos', User.addUser)

//update
userRouter.put('/todos/:id', User.updateUser)

//delete single
userRouter.delete('/todos/:id', User.deleteUser)


module.exports = userRouter