import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({path: './config/.env'});


const Connection = async () => {
    try {
      await mongoose.connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB Connected Successfully!");
    } catch (err) {
      console.error("MongoDB Connection Error: ", err.message);
      process.exit(1); // Exit the app if the DB connection fails
    }
  };
  
  Connection();