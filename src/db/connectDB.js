import mongoose from "mongoose";
import "dotenv/config";

const getConnectionString = () => {
  let connectionURL;
  if (process.env.NODE_ENV === "development") {
    connectionURL = process.env.DATABASE_LOCAL;
    connectionURL = connectionURL.replace("<username>", process.env.DB_USER);
    connectionURL = connectionURL.replace("<password>", process.env.DB_PASS);
  } else {
    connectionURL = process.env.DATABASE_PROD;
  }
  return connectionURL;
};

const connectDB = async () => {
  console.log("Connecting Database ...");

  const MongooseURI = getConnectionString();
  await mongoose.connect(MongooseURI, { dbName: process.env.DB_NAME });
  console.log("Database Connecting Successful");
};

export default connectDB;
