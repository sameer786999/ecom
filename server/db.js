const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://sameer:sameer@foodie.rb6qndi.mongodb.net/?retryWrites=true&w=majority";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to DataBase Successfully");

    const fetched_data = mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection(
      "foodCategory"
    );
    foodCategory.find({}).toArray(function (err, catData) {
      if (err) console.log(err);
      else {
        global.food_items = data;
        global.foodCategory = catData;
      }
    });
  } catch (err) {
    console.error("---", err);
  }
};

module.exports = mongoDB;
