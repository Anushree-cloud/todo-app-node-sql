const express = require('express')
const router = require('./routes/api/todos')

const app = express()

app.use(router.todoRouter)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})
