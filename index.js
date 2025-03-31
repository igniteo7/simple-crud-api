const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute); //routes

// app.get("/", (req, res) => {
//   res.send("Hell
mongoose
  .connect(
    "mongodb+srv://atharv:admin123@backenddb.kmhqbcc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("Failed to connect");
  });
