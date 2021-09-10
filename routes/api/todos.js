const express = require('express')
const todoRouter = express.Router()
const Todo = require('../../controller/todos')

//get all
todoRouter.get('/todos', Todo.getAllTodos)

//get all for partcular user
todoRouter.get('todos/user/:userId', Todo.getAllTodosOfSingleUser)

//get todos details
todoRouter.get('/todos/details', Todo.getTodoUserDetails)

//get single
todoRouter.get('/todos/:id', Todo.getSingleTodo)

//post
todoRouter.post('/todos', Todo.addTodo)

//update
todoRouter.put('/todos/:id', Todo.updateTodo)

//delete single
todoRouter.delete('/todos/:id', Todo.deleteTodo)


module.exports = todoRouter