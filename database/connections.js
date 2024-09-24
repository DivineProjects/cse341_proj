const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async()=>{
    const URL = "mongodb+srv://jigudivinea:Dateng2018.@cluster0.7pmui.mongodb.net/";
    await mongoose.connect(URL);
    console.log('our db has connected');
}
/// connect to mongodb

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = {
    connectDb,
    connectDB
};

