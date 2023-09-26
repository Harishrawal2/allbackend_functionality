const mongoose = require("mongoose");

const MongoDBConnection = async () => {
  try {
    const DB = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connection Successfully: ${DB.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Connection Failed: ${error}`);
  }
};

module.exports = MongoDBConnection;
