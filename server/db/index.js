import mongoose from "mongoose";
import config from '../config/config.js';


const initializeDb = async() => {
    try {

        console.log("Connecting to DB ...");

        const DB_URL = config.MONGO_DB_URL;
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log('Connetion to DB established!');

    } catch (error) {
        console.log("Connection to DB unsuccessful: ", error);
    }
};

export default initializeDb;