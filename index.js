const express = require('express')
const app = express()
require("dotenv").config();
const { env } = process;

app.use(express.json())

const port = env.PORT | 5000;

app.get('/', (req, res) => {
    res.json({ api: 'Hello World!' })
})

app.get('/api', (req, res) => {
    res.json({ test: 'Hello World!', hello: 'Hello World!' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})