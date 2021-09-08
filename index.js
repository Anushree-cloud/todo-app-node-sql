const express = require('express')
const todoRouter = require('./routes/api/todos')
const userRouter = require('./routes/api/users')

const app = express()

app.use(todoRouter)
app.use(userRouter)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})
