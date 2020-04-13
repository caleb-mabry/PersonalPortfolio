const mongoose = require('mongoose')

const user = {
    "username": { "type": "String" },
    "salt": { "type": "String" },
    "password": { "type": "String" },
    "email": { "type": "String" }
}
let userSchema = new mongoose.Schema(user)
let User = mongoose.model('User', userSchema)
module.exports = User