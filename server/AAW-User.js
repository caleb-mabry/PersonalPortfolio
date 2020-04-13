const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const crypto = require('crypto')
const moment = require("moment");
const startOfWeek = moment()
    .startOf("week")
    .format("MM/DD/YYYY");


const DAYLOOKUP = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
};
const LABEL = [
    "Sunday", // 0
    "Monday-AM", // 1
    "Monday-PM", // 2
    "Tuesday-AM", // 3
    "Tuesday-PM", // 4
    "Wednesday-AM", // 5
    "Wednesday-PM", //6
    "Thursday-AM", //7
    "Thursday-PM", //8
    "Friday-AM", //9
    "Friday-PM", //10
    "Saturday-AM", //11
    "Saturday-PM" //12
]

const Data = require('./Models/Data')
const User = require('./Models/User')
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
    const data = new Data({
        username: username,
        date: new Date(startOfWeek),
        data: [null, null, null, null, null, null, null, null, null, null, null, null, null]
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
                    data.save(function (err) {
                        if (err) res.send({
                            "Status": -1,
                            "Error": err
                        })
                    })
                    res.send({
                        "Status": 1,
                        "Description": "User created successfully"
                    })
                }
            })
        }
    })
})
router.post('/lu', (req, res) => {
    const username = req.body.uname
    const password = req.body.password
    User.findOne({ "username": username }).exec((err, document) => {
        if (err) res.send({
            "Status": -1,
            "Error": "Unable to find a user with that name"
        })
        if (document) {
            const salt = document.salt
            const hashPassword = document.password
            const computedPassword = crypto.createHash('sha256').update(password + document.salt).digest('hex')
            if (computedPassword == hashPassword) {
                res.send({
                    "Status": 1,
                    "User": username
                })
            } else {
                res.send({
                    "Status": -1,
                    "Error": "Username or password is incorrect"
                })
            }
        } else {
            res.send({
                "Status": -1,
                "Error": "An account with that username is not found."
            })
        }

    })
})
router.post('/ad', (req, res) => {
    const userDay = req.body.day
    const username = req.body.uname
    const value = req.body.value
    const label = "data." + LABEL.indexOf(userDay)
    console.log(userDay, username, value)
    Data.update(
        { username: username, date: { "$gte": new Date(startOfWeek) } },
        {
            $set: { [label]: value }
        }, function (err) {
            if (err) res.send({
                "Status": -1,
                "Error": err
            })
            else res.send({
                "Status": 1,
                "Description": "User value update successfully"
            })
        })
})
router.get('/alld', (req, res) => {
    Data.find({}, (err, data) => {
        res.send(data)
    })
})
router.post('/li', (req, res) => {
    console.log(req.body.name)
})

module.exports = router