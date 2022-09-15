// const express = require("express");
// const dotenv = require("dotenv"); //below 14.6 node verion use require
import express from "express";
//import products from "./data/products.js"; //file needs to be appended with js
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();
const app = express();
//const products = require("./data/products"); //common js use require

app.get("/", (req, res) => {
  res.send("API is running");
});

// app.use((req, res, next) => {
//   console.log(req.originalUrl);
//   next();
// });

app.use("/api/products", productRoutes);

app.use(notFound);

//For error hadler middleware over write the normal middle ware by passing err first
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`)
);
