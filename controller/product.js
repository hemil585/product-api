const mongoose = require("mongoose");
const model = require("../model/product");
const Product = model.Product;

exports.createProduct = (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};

exports.replaceProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOneAndDelete({ _id: id });
    res.status(204).json(product);
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};
