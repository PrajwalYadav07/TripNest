const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust";

main().then(res => {
    console.log("connected");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "6a7ab8e6d4ef3ec53830c5aa" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();