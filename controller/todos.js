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

//post a todo
const addTodo = (req, res) => {
    let newTodo = {
        title: req.body.title,
        is_completed: req.body.is_completed
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

// //update a todo
// const updateTodo = (req, res) => {
//     let currentTodo = Todos.findById(req.params.id)
//     if(currentTodo){
//         let index = Todos.findByIndex(req.params.id)
//         let updatedTodo = {
//             id: currentTodo.id,
//             title: req.body.title ? req.body.title : currentTodo.title,
//             is_completed: req.body.is_completed ? req.body.is_completed : currentTodo.is_completed,
//             created_at: currentTodo.created_at
//         }
//         Todos.findAll((todos) => {
//             todos[index] = updatedTodo
//             Todos.save(todos, () => {
//                 res.json({
//                     data: {
//                         message: `Todo Updated with id: ${req.params.id}`,
//                         todos: todos,
//                         updatedTodo: updatedTodo
//                     }
//                 })
//             })
//         })
//     }
//     else{
//         res.json({
//             data: {
//                 message: "Todo not found..."
//             }
//         })
//     }
// }

// //delete a todo
// const deleteTodo = (req, res) => {
//     let currentTodo = Todos.findById(req.params.id)
//     if(currentTodo){
//         let index = Todos.findByIndex(req.params.id)
//         Todos.findAll((todos) => {
//             todos.splice(index, 1)
//             Todos.save(todos, () => {
//                 res.json({
//                     data: {
//                         message: `Todo Deleted with id ${req.params.id}`,
//                         todos: todos
//                     }
//                 })
//             })
//         })
//     }
//     else{
//         res.json({
//             data: {
//                 message: "Todo not found..."
//             }
//         })
//     }
// }

// //delete all todos
// const deleteAllTodos = (req, res) => {
//     Todos.findAll((todos) => {
//         Todos.save([], () => {
//             res.json({
//                 data: {
//                     message: "All Todos Deleted...",
//                     todos: todos
//                 }
//             })
//         })
//     })
// }

module.exports = {
    getAllTodos, getSingleTodo, addTodo
}