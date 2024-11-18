const mongoose = require("mongoose");

const oursellerSchema = mongoose.Schema({
  name: { type: String },
  products: [productSchema],
});
const productSchema = mongoose.Schema({
  name: { type: String },
  weight: { type: String },
  dimensions: { type: String },
});


const sellerModel= mongoose.model("seller",oursellerSchema);

module.exports={sellerModel};