const express = require("express");
const {
  allProducts,
  detailProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.js");

const router = express.Router();

router.get("/products", allProducts);
router.get("/products/:id", detailProduct);
router.post("/product/new", createProduct);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", updateProduct);

module.exports = router;
