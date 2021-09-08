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
    console.log('Connected to mysql database.');
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
    let sql = `SELECT * FROM todos Where id=${id}`
    db.query(sql, (error, todo) => {
        if(error) throw error
        callback(todo)
    })
}

//save to database:
const save = (data, callback) => {
    let sql = 'INSERT INTO todos SET ?'
    db.query(sql, data, (error) => {
        if(error) throw error
        callback()
    })
}

module.exports = {
    findAll, findById, save
}