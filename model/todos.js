const mysql = require('mysql2')

//create connection to database:
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'todo_app'
})

//connect to the connection:
db.connect((error) => {
    if(error)
        console.log(error)
    console.log('Connected to todo_app database, todos table.');
})


//get todos from database
const findAll = (callback) => {
    let sql = 'SELECT * FROM todos'
    db.query(sql, (error, todos) => {
        if(error) throw error
        callback(todos)
    })
}

//get a single todo by id from database 
const findById = (id, callback) => {
    let sql = `SELECT * FROM todos WHERE id=${id}`
    db.query(sql, (error, todo) => {
        if(error) throw error
        callback(todo)
    })
}

//get all todos of a single user
const findAllByUserId = (id, callback) => {
    let sql = `SELECT * FROM todos WHERE user_id = ${id}`
    db.query(sql, (error, todo) => {
        if(error) throw error
        callback(todo)
    })
}

//get todos and user details together (inner join)
const findAllTodosWithUsers = (callback) => {
    let sql = `SELECT todos.id, todos.title, todos.is_completed, todos.created_at, todos.user_id, users.name FROM todos INNER JOIN users ON todos.user_id = users.id`
    db.query(sql, (error, details) => {
        if(error) throw error
        callback(details)
    })
}

//save to database:
const save = (data, callback) => {
    let sql = 'INSERT INTO todos SET ?'
    db.query(sql, { title: data.title, is_completed: data.is_completed, user_id: data.user_id }, (error) => {
        if(error) throw error
        callback()
    })
}

//update and save to database:
const updateAndSave = (data, id, callback) => {
    let sql = `UPDATE todos SET title=${data.title}, is_completed=${data.is_completed} WHERE id=${id}`
    db.query(sql, (error, result) => {
        if(error) throw error
        callback()
    }) 
}

//delete record from database:
const deleteAndSave = (id, callback) => {
    let sql = `DELETE FROM todos WHERE id=${id}`
    db.query(sql, (error, result) => {
        if(error) throw error
        callback()
    }) 
}

module.exports = {
    findAll, findAllByUserId, findAllTodosWithUsers, findById, save, updateAndSave, deleteAndSave
}