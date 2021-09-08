const express = require('express')
const todoRouter = express.Router()
const Todo = require('../../controller/todos')

//get all
todoRouter.get('/api/todos', Todo.getAllTodos)

//get single
todoRouter.get('/api/todos/:id', Todo.getSingleTodo)

//post
todoRouter.post('/api/todos', Todo.addTodo)

//update
todoRouter.put('/api/todos/:id', Todo.updateTodo)

//delete single
todoRouter.delete('/api/todos/:id', Todo.deleteTodo)

//delete all
todoRouter.delete('/api/todos', Todo.deleteAllTodos)