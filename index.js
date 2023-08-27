const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const server = express();

const productRouter = require("./routes/product");

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Successfully connected!!!");
  } catch (e) {
    console.error("Error: ", e);
  }
};
connectionToDB();

server.use(express.json());
server.use("/products", productRouter.router);

server.listen(process.env.PORT,()=>{
  console.log(`server is alive at http://localhost:${process.env.PORT}`);
});
