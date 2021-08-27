const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const messageSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        lowercase: true
    },
    content: {
        type: Text,
        required: true,
        minlength: 1
    },
    date: {
        type: Date,
        required: true
    }
})



const Message = mongoose.model('message', messageSchema)

module.exports = Message;