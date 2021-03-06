const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc FEtch all Products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const product = await Product.find({});
  res.json(product);
});
// @desc FEtch all Products
// @route GET /api/products/:id
// @access Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = { getProducts, getProductsById };
