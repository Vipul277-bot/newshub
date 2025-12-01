const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost:27017/test";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
    }
};

module.exports = connectToMongo;
