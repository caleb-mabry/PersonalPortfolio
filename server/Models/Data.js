const mongoose = require('mongoose')

const data = {
    "username": "String",
    "date": "Date",
    "data": {
        "type": ["Mixed"]
    }
}
const dataSchema = new mongoose.Schema(data)
module.exports = mongoose.model("Data", dataSchema)