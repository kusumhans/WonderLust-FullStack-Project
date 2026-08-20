const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Listing = require("./model/listing.js");
main()
.then((res) => console.log(res))
.catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderLust')
}

const newListing = new Listing({
    title: "Beautiful Beach House",
    description: "A beautiful house near the beach.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    price: 2500,
    location: "Goa",
    country: "India"
});
newListing.save()
.then((res) => console.log(res))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(8080 , (req, res) => {
    console.log("start listening port 8080");
})