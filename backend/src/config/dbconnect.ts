import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://hasithamanohara315:7zv7t2hYB7atVb4c@cluster0.6hlh5fc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const connectToMongoDB = async () => {

   if (!MONGO_URI) {
    console.error('MONGO_URI not defined in .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};
