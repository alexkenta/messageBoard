const Message = require('mongoose').model('Message');

module.exports = {
    index(req, res) {
        Message.find({},function(err, messages){
            console.log(messages)
            if(err){
                console.log(err);
                res.render('index')
            } else {
                res.render('index', {messages: messages})
            }
        })
    },

    create(req, res) {
        console.log(req.body)
        const message = new Message({
            name: req.body.name,
            message: req.body.message
        })
        message.save(function(err){
            if(err){
                console.log(err)
                res.redirect('/')
            } else {
                console.log("successful data save", req.body.message)
                res.redirect("/")
            }
        })
    },

}