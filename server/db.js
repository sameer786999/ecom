const mongoose = require("mongoose");


const mongoURI = "mongodb+srv://sameer:sameer@foodie.rb6qndi.mongodb.net/?retryWrites=true&w=majority";
const mongoDB=async()=>{
   await mongoose
     .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => {
       console.log("Connected to the database");
       // Your code logic here
     })
     .catch((error) => {
       console.error("Error connecting to the database:", error.message);
     });
}


module.exports=mongoDB;

