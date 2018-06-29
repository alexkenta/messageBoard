const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');


//absolute path to the models in the server dir
const modelsPath = path.join(__dirname, './../models');

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/messageBoard');
mongoose.connection.on('connected', function(){
    console.log('connected to mongoDB')
})

fs.readdirSync(modelsPath).forEach(function(file) {
  if(file.indexOf('.js') >= 0){
      require(modelsPath + '/' + file);
  }
});

