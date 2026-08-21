const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Listing = require("./model/listing.js");
const ejs = require("ejs");
const path = require("path")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
}
main()
.then((res) => console.log(res))
.catch(err => console.log(err));



// const newListing = new Listing({
//     title: "Beautiful Beach House",
//     description: "A beautiful house near the beach.",
//     image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
//     price: 2500,
//     location: "Goa",
//     country: "India"
// });
// newListing.save()
// .then((res) => console.log(res))
// .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("hello");
})
// listen route
app.get("/listing", async(req, res) => {
    const allListing = await Listing.find({});
    console.log(allListing)
    res.render("listing/showlisting", { allListing })
})
// add new listing 
app.get("/listing/new", (req, res) => {
    res.render("listing/listingnew")
});
app.post("/listing", async(req, res) => {
    let listing = new Listing(req.body);
    await listing.save();
    res.redirect("/listing");
})
// show individual listing info
app.get("/listing/:id", async(req, res) => {
    try{
        let { id } = req.params;
        let listing =  await Listing.findById(id);
        console.log("ID:", id);
        console.log("Listing:", listing);
        if (!listing) {
            return res.status(404).send("Listing not found");
        }
    
        res.render("listing/show", { listing });
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
    })  
// start server
app.listen(8080 , (req, res) => {
    console.log("start listening port 8080");
})