const mongoose = require('mongoose');


//connect to the database
// mongoose.connect(mongodb://127.0.0.1/${env.db});
const DB = "mongodb+srv://kushalrao103:u61WuUdnLhDjJK24@cluster0.peevqcr.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database :: MongoDB");

});

module.exports = db;