const express = require('express')
const mysql = require('mysql2')

const app = express()

//create connection to database:
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345'
})

//connect to the connection:
db.connect((error) => {
    if(error)
        console.log(error)
    console.log('Connected to mysql database.');
})

//create database:
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE todoapp'
    db.query(sql, (error, result) => {
        if(error) throw error
        console.log(result)
        res.send('database created!')
    })
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})