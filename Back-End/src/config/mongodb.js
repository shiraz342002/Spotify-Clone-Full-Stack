import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config(); 

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI,);
    console.log("Database Connectedd");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};

export default connectDb;
