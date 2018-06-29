const messageController = require('../controllers/messages')
const commentController = require('../controllers/comments')

module.exports = function(app){
    // get routes
    // root route
    app.get('/', messageController.index)
    // post routes
    // grab data from message form
    app.post('/processMessage', messageController.create)
    // grab data from comments and update message
    app.post('/processComment/:id', commentController.create)
}