const path       = require('path');
      modelsPath = path.join(__dirname, '/../models');
      mongoose   = require('mongoose');
      fs         = require('fs');

// Required to remove deprecation warning
mongoose.Promise = global.Promise;

// Create connection to database
mongoose.connect("mongodb://localhost/MBB4");

// Listen for connected event and log a message
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

fs.readdirSync(modelsPath).forEach(function(file){
if(file.indexOf('.js') > 0){
require(modelsPath + '/' + file);
}
})