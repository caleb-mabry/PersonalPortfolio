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

    // Check to see if a user with that username already exists
    User.find({ "username": req.body.uname }).exec(function (err, login) {
        console.log(login.length)
        if (login.length) {
            res.send({
                "Status": -1,
                "Error": "User " + req.body.uname + " already exists"
            })
        } else {
            user.save(function (err) {
                if (err) res.send({
                    "Status": -1,
                    "Error": err
                })
                else {
                    res.send({
                        "Status": 1,
                        "Description": "User created successfully"
                    })
                }
            })
        }
    })


})
router.post('/li', (req, res) => {
    console.log(req.body.name)
})

module.exports = router