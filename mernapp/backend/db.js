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
    console.log(data);
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};
module.exports=mongoDB;