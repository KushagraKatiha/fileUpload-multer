const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI

const connectToDB = () => {
    mongoose.connect(MONGO_URI)
    .then((conn)=>{
        console.log(`DB connected to: ${conn}`);
    })
    .catch((err)=>{
        console.log(`DB connection error: ${err}`);
    })
}