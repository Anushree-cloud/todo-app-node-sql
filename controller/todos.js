const Todos = require('../model/todo')
const uuid = require('uuid')

//get all todos
const getAllTodos = (req, res) => {
    Todos.findAll((todos) => {
        res.json({
            data: {
                message: "All Todos Fetched...",
                todos: todos
            }
        })
    })
}

//get a single todo
const getSingleTodo = (req, res) => {
    let currentTodo = Todos.findById(req.params.id)
    if(currentTodo){
        res.json({
            data: {
                message: `Todo with Id: ${req.params.id} fetched successfully...`,
                todo: currentTodo
            }
        })
    }
    else{
        res.json({
            data: {
                message: "Todo not found..."
            }
        })
    }
}

//post a todo
const addTodo = (req, res) => {
    let newTodo = {
        id: uuid.v4(),
        title: req.body.title,
        is_completed: req.body.is_completed,
        created_at: Date.now()
    }
    Todos.findAll((todos) => {
        todos.push(newTodo)
        Todos.save(todos, () => {
            res.json({
                data: {
                    message: "New todo Added Succesfully",
                    todo: newTodo
                }
            })
        })    
    })
}

//update a todo
const updateTodo = (req, res) => {
    let currentTodo = Todos.findById(req.params.id)
    if(currentTodo){
        let index = Todos.findByIndex(req.params.id)
        let updatedTodo = {
            id: currentTodo.id,
            title: req.body.title ? req.body.title : currentTodo.title,
            is_completed: req.body.is_completed ? req.body.is_completed : currentTodo.is_completed,
            created_at: currentTodo.created_at
        }
        Todos.findAll((todos) => {
            todos[index] = updatedTodo
            Todos.save(todos, () => {
                res.json({
                    data: {
                        message: `Todo Updated with id: ${req.params.id}`,
                        todos: todos,
                        updatedTodo: updatedTodo
                    }
                })
            })
        })
    }
    else{
        res.json({
            data: {
                message: "Todo not found..."
            }
        })
    }
}

//delete a todo
const deleteTodo = (req, res) => {
    let currentTodo = Todos.findById(req.params.id)
    if(currentTodo){
        let index = Todos.findByIndex(req.params.id)
        Todos.findAll((todos) => {
            todos.splice(index, 1)
            Todos.save(todos, () => {
                res.json({
                    data: {
                        message: `Todo Deleted with id ${req.params.id}`,
                        todos: todos
                    }
                })
            })
        })
    }
    else{
        res.json({
            data: {
                message: "Todo not found..."
            }
        })
    }
}

//delete all todos
const deleteAllTodos = (req, res) => {
    Todos.findAll((todos) => {
        Todos.save([], () => {
            res.json({
                data: {
                    message: "All Todos Deleted...",
                    todos: todos
                }
            })
        })
    })
}

module.exports = {
    getAllTodos, getSingleTodo, addTodo, updateTodo, deleteTodo, deleteAllTodos
}