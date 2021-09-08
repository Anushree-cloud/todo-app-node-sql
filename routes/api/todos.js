const express = require('express')
const todoRouter = express.Router()
const Todo = require('../../controller/todos')

//get all
todoRouter.get('/todos', Todo.getAllTodos)

//get single
todoRouter.get('/todos/:id', Todo.getSingleTodo)

//post
todoRouter.post('/todos', Todo.addTodo)

//update
todoRouter.put('/todos/:id', Todo.updateTodo)

//delete single
todoRouter.delete('/todos/:id', Todo.deleteTodo)


module.exports = todoRouter