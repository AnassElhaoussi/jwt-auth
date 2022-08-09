const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()


const app = express()
const PORT = 5000 || process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello world')
})


app.listen(PORT, () => console.log(`App running on port ${PORT}`))