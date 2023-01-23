const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

PORT = process.env.SERVER_PORT

app.use(cors())

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello World')
})