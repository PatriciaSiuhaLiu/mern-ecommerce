import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

router.get(
  "/",
  asyncHandler(
    async (req, res) => {
      const products = await Product.find({});
      res.json(products);
    } //products is a js array of objects, res.json changes it to json format
    //and then send
  )
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    //   const product = products.find((product) => product._id === id);
    //using mongoose commands to get data from mongodb

    const product = await Product.findById(id);

    if (product) {
      res.json(product);
    } else {
      //res.status(500).json({ message: "not found" });

      //below will be handled by the errorHandler.js

      res.status(404);
      throw new Error("Product not Found");
    }
  })
);
export default router;
