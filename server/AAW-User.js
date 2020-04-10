const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const crypto = require('crypto')

const User = require('./Schemas/User')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })



//Create User
router.post('/cu', (req, res) => {
    const username = req.body.uname
    const email = req.body.email
    const salt = crypto.randomBytes(16).toString('hex')
    const password = crypto.createHash('sha256').update(req.body.password + salt).digest('hex')
    const user = new User({
        username: username,
        salt: salt,
        password: password,
        email: email
    })
    user.save(function (err, data) {
        if (err) return { "Status": 500, "Error": err }
        res.send('Successfully wrote' + data)
    })
})
router.post('/li', (req, res) => {
    console.log(req.body)
})

module.exports = router