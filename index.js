const express = require('express')
const mysql = require('mysql2')
const { title } = require('process')
const readline = require('readline')

const app = express()
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

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

//insert todo:
app.get('/todos/add', (req, res) => {
    rl.question('Enter Todo: ', title => {
        rl.question('Is it Completed?(yes-1, no-0): ', isCompleted => {
            let todo = {
                title: title,
                is_completed: isCompleted
            }
            let sql = 'INSERT INTO todos SET ?'
            let query = db.query(sql, todo, (error, result) => {
                if(error) throw error
                console.log(result)
                res.send('data inserted!')
            })
        })
    })
})

//get all todos:
app.get('/todos', (req, res) => {
    let sql = 'SELECT * FROM todos'
    let query = db.query(sql, (error, results) => {
        if(error) throw error
        console.log(results)
        res.send('data fetched!')
    })
})

//get single todo:
app.get('/todos/:id', (req, res) => {
    let sql = `SELECT * FROM todos WHERE id = ${req.params.id}`
    let query = db.query(sql, (error, result) => {
        if(error) throw error
        console.log(result)
        res.send(`data fetched with id: ${req.params.id}`)
    })
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})






/*
res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(
            `<tr>
                <th>ID</th>
                <th>title</th>
                <th>is_Completed</th>
                <th>Created At</th>
            </tr>
            ${
                results.map((textRow) => {
                    return(
                        <tr>
                            <td>{textRow.id}</td>
                            <td>{textRow.title}</td>
                            <td>{textRow.is_completed}</td>
                            <td>{textRow.created_at}</td>
                        </tr>
                    )
                })
            }  
        `)
        res.end()
*/