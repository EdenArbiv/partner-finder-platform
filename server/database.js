const mongoose = require("mongoose");

const connectToMongoDatabase = async () => {
  const mongoUri =
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017/partner_finder";

  await mongoose.connect(mongoUri);
  console.log("Connected to MongoDB");
};

module.exports = {
  connectToMongoDatabase,
};
