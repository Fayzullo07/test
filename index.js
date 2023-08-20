const express = require('express')
const app = express()
require("dotenv")
const port = process.env.PORT | 3000

app.get('/', (req, res) => {
    res.json({ api: 'Hello World!' })
})

app.get('/api', (req, res) => {
    res.json({ test: 'Hello World!', hello: 'Hello World!' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})