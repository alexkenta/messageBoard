const express = require("express");
const bodyParser = require("body-parser")
// const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
// const { Schema } = mongoose;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

require('./server/config/database');
require('./server/config/routes')(app);

// get routes
// root route
// app.get('/', function(req, res){
    
// })

// // post routes
// // grab data from message form
// app.post('/processMessage', function(req, res){
    
// })
// // grab data from comments and update message
// app.post('/processComment/:id', function(req, res){
    
// })

//make schemas



//make models




// connect to mongoDB


app.listen(port, function(){
    console.log(`listening on port: ${port}`)
})
