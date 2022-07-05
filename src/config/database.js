const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const mongoURL = process.env.MONGO_DEV;
mongoose.connect(
    mongoURL,

    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: true,
    },
    (err) => {
        if (err) throw err;
        console.log("Connection Database Successful");
    }
);