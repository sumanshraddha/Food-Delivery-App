const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://sumanshraddha:JBSepTub88RwRF$@cluster0.dcf7x.mongodb.net/gofood";
//mongodb+srv://sumanshraddha:JBSepTub88RwRF$@cluster0.dcf7x.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0
const mongoDB = async () => {
  console.log(process.env.PORT);
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`Connected to MongoDB Database`);
    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    //console.log(data);
    global.food_items = data;
    const fetched_data2 = await mongoose.connection.db.collection(
      "food_category"
    );
    const catData = await fetched_data2.find({}).toArray();
    global.food_category = catData;
    //console.log(catData);
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};
module.exports = mongoDB;
