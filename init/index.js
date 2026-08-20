const mongoose = require("mongoose");
const Listing = require("../model/listing");
const { data } = require("./data");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
}

main()
    .then(async () => {
        await Listing.deleteMany({});
        await Listing.insertMany(data);
        console.log("Sample data inserted");
        await mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });