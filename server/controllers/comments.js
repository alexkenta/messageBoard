const Comment = require('mongoose').model('Comment')
const Message = require('mongoose').model('Message');

module.exports = {
    create(req, res){
        console.log(req.body)
        const comment = new Comment({
            name: req.body.name,
            comment: req.body.comment
        })
        comment.save(function(err){
            if(err){
                console.log(err)
                res.redirect('/')
            } else {
                console.log("successful comment", req.body.comment)
                Message.update({_id:req.params.id}, {$push: {comments: comment}}, function(err){
                    if(err){
                        console.log(err);
                        res.redirect("/")
                    } else {
                        console.log("successful comment pushed to message");
                        res.redirect("/")
                    }
                })
            }
        })
    }
}