//require the library  
const mongoose = require('mongoose');

//connect to database
const url = "mongodb+srv://kushalrao103:u61WuUdnLhDjJK24@cluster0.peevqcr.mongodb.net/?retryWrites=true&w=majority";

const connectioParams={
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(url)
.then(()=>console.info('Conected to mongo db'))
.catch((err)=>console.log("error: ",err))