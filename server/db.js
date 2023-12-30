const mongoose = require("mongoose");


const mongoURI = "mongodb+srv://sameer:sameer@foodie.rb6qndi.mongodb.net/?retryWrites=true&w=majority";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to DataBase Successfully");

    const fetched_data = await mongoose.connection.db.collection("food");
    fetched_data.find({}).toArray(function(err,data){
      if(err) console.log(err);
      else console.log("");
    })

  
  } catch (err) {
    console.error("---", err);
  }
};


module.exports=mongoDB;
