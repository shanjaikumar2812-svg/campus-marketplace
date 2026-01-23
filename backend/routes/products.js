const express = require("express");
const Product = require("../models/product");

const router = express.Router();

// add product
router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// get products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
