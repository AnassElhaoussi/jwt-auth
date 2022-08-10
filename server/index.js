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
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        res.json({ status: "ok" })
    } catch {
        res.json({ status: "something went wrong" })
    }
})

app.post('/api/login', async(req, res) => {
    console.log(req.body);
    try {
        const user = await User.findOne({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        if (user) {
            res.json({ status: "ok" })
        } else {
            res.json({ status: "error", error: "Account does not exist" })
        }

    } catch {
        console.log('Something went wrong');
    }
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))