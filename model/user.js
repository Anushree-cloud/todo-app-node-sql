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


//get users from database
const findAll = (callback) => {
    let sql = 'SELECT * FROM users'
    db.query(sql, (error, users) => {
        if(error) throw error
        callback(users)
    })
}

//get a single user by id from database 
const findById = (id, callback) => {
    let sql = `SELECT * FROM users Where id=${id}`
    db.query(sql, (error, user) => {
        if(error) throw error
        callback(user)
    })
}

//save to database:
const save = (data, callback) => {
    let sql = 'INSERT INTO users SET ?'
    db.query(sql, { name: data.name, email: data.email, password: data.password}, (error) => {
        if(error) throw error
        callback()
    })
}

//update and save to database:
const updateAndSave = (data, id, callback) => {
    let sql = `UPDATE users SET name=${data.name}, email=${data.email}, password=${data.password} WHERE id=${id}`
    db.query(sql, (error, result) => {
        if(error) throw error
        callback()
    }) 
}

//delete record from database:
const deleteAndSave = (id, callback) => {
    let sql = `DELETE FROM users WHERE id=${id}`
    db.query(sql, (error, result) => {
        if(error) throw error
        callback()
    }) 
}

module.exports = {
    findAll, findById, save, updateAndSave, deleteAndSave
}