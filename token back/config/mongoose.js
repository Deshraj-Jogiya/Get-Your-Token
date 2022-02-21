const mongoose = require('mongoose');

require('dotenv').config();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
};

mongoose.connect(process.env.MONGO_URL, options).then(() => {
    console.log("Database connected successfully.");
}).catch(error => {
    console.log("Something Wrong",error);
});

const db = mongoose.connection;


module.exports = db;

