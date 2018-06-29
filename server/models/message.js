// schemas and models
const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
    name: {
        type: String, 
        required: [true, "You must enter a name"], 
        minlength: [2, "Name must be atleast 2 characters"]
    },
    message: {
        type: String,
        required: [true, "You must enter a message"],
        minlength: [5, "Message must be atleast 5 characters"]
    },
    comments: []
}, {timestamp: true})

module.exports = mongoose.model('Message', MessageSchema);
// mongoose.model('Message', MessageSchema);
// const Message = mongoose.model('Message');