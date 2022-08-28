const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./models/usermodel')

require('dotenv').config()


const app = express()
app.use(cors())
app.use(express.json())

const PORT = 5000 || process.env.PORT

mongoose.connect('mongodb+srv://AnassELH7:ansx142@mern-cluster.vrzmoko.mongodb.net/mern-db?retryWrites=true&w=majority')

app.post('/api/register', async(req, res) => {
    const { name, email, password } = req.body

    try {
        await User.create({
            name,
            email,
            password
        })

        res.json({ status: "ok" })
        console.log('ok in register')
    } catch {

        if (!name || !email || !password) console.log('credentials not complete')
        else console.log('You used the same email')

    }
})

app.post('/api/login', async(req, res) => {
    const { name, email, password } = req.body
    try {
        const user = await User.findOne({
            name,
            email,
            password
        })

        if (user) {
            res.json({ status: "ok" })
        } else {
            res.json({ status: "error", error: "Account does not exist" })
        }

    } catch {
        res.json({ status: "error", error: "Crendentials are not complete" })
    }
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))