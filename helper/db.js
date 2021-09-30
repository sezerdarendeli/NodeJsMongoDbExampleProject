var mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect("mongodb+srv://sdarendeli:aEeuHA40sjy9njEx@cluster0.hvpad.mongodb.net/myFirstDatabase");
    
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
      });
      mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
      });

    mongoose.Promise = global.Promise;
}

  