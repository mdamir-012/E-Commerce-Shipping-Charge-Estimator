const mongoose= require("mongoose");

const connection = mongoose.connect("mongodb+srv://mdamir42984:mdamir42984@cluster0.ofqcc.mongodb.net/ecommerce-shipping");


module.exports={connection};
