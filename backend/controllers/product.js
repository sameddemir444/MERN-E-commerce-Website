const Product = require("../models/product.js");

const allProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

const detailProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json({ product });
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
};

const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  product.remove();
  res.status(200).json({ message: "Product deleted" });
};

const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ product });
};

module.exports = {
  allProducts,
  detailProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
