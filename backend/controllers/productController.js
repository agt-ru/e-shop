// const asyncHandler = require("express-async-handler");
// const Product = require("../models/productModel");

import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    // if we didn't have custom error handler
    // res.status(404).json({ message: "Product not found" });

    res.status(404);
    throw new Error("Product not found");
  }
});

// module.exports = {getProducts, getProductById};

export { getProducts, getProductById };
