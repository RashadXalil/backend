const mongoose = require("mongoose")


const User = mongoose.model(
    "User",
    new mongoose.Schema({
        name: String,
        surname: String,
        age: Number,
        isDeleted: {
            type: Boolean,
            require: true
        }

    })
)
module.exports = { User }