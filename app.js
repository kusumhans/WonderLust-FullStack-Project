const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Listing = require("./model/listing.js");
const ejs = require("ejs");
const path = require("path")
const methodOverride = require("method-override");
const ejsmate = require("ejs-mate");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsmate);
app.use(express.static(path.join(__dirname, "public")));

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
// New listing
app.get("/listing/new", (req, res) => {
    res.render("listing/listingnew.ejs");
});

// Create listing
app.post("/listing", async (req, res) => {
    let listing = new Listing(req.body);
    await listing.save();

    res.redirect("/listing");
});

// Edit page
app.get("/listing/:id/edit", async (req, res) => {
    let { id } = req.params;

    let listing = await Listing.findById(id);

    res.render("listing/listingedit.ejs", { listing });
});

// Update
app.put("/listing/:id", async (req, res) => {
    let { id } = req.params;

    await Listing.findByIdAndUpdate(id, req.body, {
        runValidators: true,
        new: true
    });

    res.redirect(`/listing/${id}`);
});

// Delete
app.delete("/listing/:id", async (req, res) => {
    let { id } = req.params;

    await Listing.findByIdAndDelete(id);

    res.redirect("/listing");
});

// Show individual listing
app.get("/listing/:id", async (req, res) => {
    let { id } = req.params;

    let listing = await Listing.findById(id);

    res.render("listing/show.ejs", { listing });
});

// Show all listings
app.get("/listing", async (req, res) => {
    let allListing = await Listing.find();

    res.render("listing/showlisting.ejs", { allListing });
}); 
// start server
app.listen(8080 , (req, res) => {
    console.log("start listening port 8080");
})