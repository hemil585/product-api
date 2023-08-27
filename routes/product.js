const express = require("express");
const productContoller = require("../controller/product");

const router = express.Router();

router
  .post("/", productContoller.createProduct)
  .get("/", productContoller.getAllProduct)
  .get("/:id", productContoller.getProduct)
  .put("/:id", productContoller.replaceProduct)
  .patch("/:id", productContoller.updateProduct)
  .delete("/:id", productContoller.deleteProduct);

exports.router = router;
