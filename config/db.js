const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI)
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } 
    }
    module.exports = connectDB;