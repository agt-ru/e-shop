// const express = require("express");
// const router = express.Router();
// const { getProducts, getProductById } = require("../controllers/productController");

import express from "express";
const router = express.Router();
import { getProducts, getProductById } from "../controllers/productController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

// module.exports = router;
export default router;
