const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Note = require("./Note");
const app = express();

app.use(cors());
app.use(express.json());
// const mongoURI = "mongodb://localhost:27017/trademelistings";
const mongoURI = "mongodb://mongo:27017/trademelistings";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.get("/api/notes", async (req, res) => {
  try {
    const notes = await Note.find();
    res
      .status(200)
      .json({ message: "Fetched notes successfully", data: notes });
  } catch (err) {
    res.status(500).json({ message: "Error fetching notes", error: err });
  }
});

app.post("/api/notes", async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      price: req.body.price,
      closeDate: req.body.closeDate,
      image: req.body.image,
      condition: req.body.condition,
      description: req.body.description,
      paymentOptions: req.body.paymentOptions,
      username: req.body.username,
      reviews: req.body.reviews,
      location: req.body.location,
    });
    const savedNote = await newNote.save();
    res
      .status(201)
      .json({ message: "Note created successfully", data: savedNote });
  } catch (err) {
    res.status(500).json({ message: "Error creating notes", error: err });
  }
});



//-----------------remove from database--------------------//
app.post("/api/notes/remove", async (req, res) => {
  try {
    const itemId = req.body._id;

    console.log(Note.findByIdAndDelete);

    // ---------------------Perform the removal operation using Mongoose-------------//
    const removedNote = await Note.findByIdAndDelete(itemId);

    if (!removedNote) {
      return res.status(404).json({ message: "Listing not found" });
    }

    res
      .status(200)
      .json({ message: "Listing removed successfully", data: removedNote });
  } catch (err) {
    res.status(500).json({ message: "Error removing listing", error: err });
  }
});

app.all("*", (req, res) => {
  res.status(404).send("<h1> 404 | Page not found");
});

app.listen(4000, () => {
  console.log("Server is running or port localhost:4000");
});