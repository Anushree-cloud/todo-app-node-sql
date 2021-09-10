const Todos = require('../model/todos')


//get all todos
const getAllTodos = (req, res) => {
    Todos.findAll((todos) => {
        res.json({
            data: {
                message: "All Todos Fetched Successfully🎉",
                todos: todos
            }
        })
    })
}

//get all todos of a particular user
const getAllTodosOfSingleUser = (req, res) => {
    let id = req.params.userId
    Todos.findAllByUserId(id, (todo) => {
        res.json({
            data: {
                message: `All Todos Fetched for User (id: ${id})`,
                todos: todo
            }
        })
    })
}

//get a single todo
const getSingleTodo = (req, res) => {
    Todos.findById(req.params.id, (todo) => {
        res.json({
            data: {
                message: `Todo with Id: ${req.params.id} fetched successfully...`,
                todo: todo
            }
        })
    })
}

//get todos with user details
const getTodoUserDetails = (req, res) => {
    Todos.findAllTodosWithUsers((details) => {
        res.json({
            data: details
        })
    })
}

//post a todo
const addTodo = (req, res) => {
    let newTodo = {
        title: req.body.title,
        is_completed: req.body.is_completed,
        user_id: req.body.user_id
    }
    Todos.save(newTodo, () => {
        res.json({
            data: {
                message: 'New Todo Added!',
                todo: newTodo
            }
        })
    })
}

//update a todo
const updateTodo = (req, res) => {
    let id = req.params.id
    Todos.findById(id, (todo) => {
        let updatedTodo = {
            title: req.body.title ? req.body.title : todo.title,
            is_completed: req.body.is_completed ? req.body.is_completed : todo.is_completed
        }
        Todos.updateAndSave(updatedTodo, id, () => {
            res.json({
                data: {
                    message: `Todo with Id: ${id} updated successfully...`,
                    todo: updatedTodo
                }
            })
        })
    })
}

//delete a todo
const deleteTodo = (req, res) => {
    let id = req.params.id
    Todos.deleteAndSave(id , () => {
        Todos.findAll((todos) => {
            res.json({
                data: {
                    message: `Todo Deleted with id: ${id}`,
                    todos: todos
                }
            })
        })
    })
}

module.exports = {
    getAllTodos, getAllTodosOfSingleUser, getTodoUserDetails, getSingleTodo, addTodo, updateTodo, deleteTodo
}