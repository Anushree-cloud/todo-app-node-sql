const todos = require('../database/api/todos.json')
const fs = require('fs')
const path = require('path')

//read file
const findAll = (callback) => {
    fs.readFile(path.join(__dirname, '../database/api/todos.json'), 'utf8', (error, data) => {
        if(error) throw error
        let parseData = JSON.parse(data)
        callback(parseData)
    })
}

//write file
const save = (data, callback) => {
    fs.writeFile(path.join(__dirname, './database/api/todos.json'), JSON.stringify(data), (error) => {
        if(error) throw error
        callback()
    })
}

//find a todo by id
const findById = (id) => {
    let currentTodo = todos.find((todo) => {
        return todo.id === id
    })
    return currentTodo
}

//find index of a todo in the todo array
const findByIndex = (id) => {
    let index = todos.findIndex(todo => {
        return todo.id === id
    })
    return index
}

// const autoIncrementId = () => {
//     if(todos.length === 0){

//     }
// }

module.exports = {
    save, findAll, findById, findByIndex
}