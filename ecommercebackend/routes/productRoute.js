// productRoutes.js
const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
