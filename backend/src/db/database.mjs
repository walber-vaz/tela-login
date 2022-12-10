import * as dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_URI = process.env.MONGO_URI;

mongoose.set('strictQuery', true);
const connectionDatabase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Database');
  } catch (error) {
    console.error(error);
  }
};

export default connectionDatabase;
