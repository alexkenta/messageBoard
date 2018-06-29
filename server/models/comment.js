// schemas and models
const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    name: {
        type: String,
        required: [true, "You must enter a name"],
        minlength: [2, "Name must be atleast 2 characters"]
    },
    comment: {
        type: String,
        required: [true, "Comment cannot be blank"],
        minlength: [5, "gotta be longer"]   
    }
}, {timestamp: true})

module.exports = mongoose.model('Comment', CommentSchema);

// mongoose.model('Comment', CommentSchema);
// const Comment = mongoose.model('Comment')