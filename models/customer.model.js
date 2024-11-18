const mongoose = require("mongoose");

const ourCustomerSchema = mongoose.Schema({
  name: { type: String },
  phoneNumber: { type: String },
  location: { lat: Number, lng: Number },
});


const customerModel= mongoose.model("customer",ourCustomerSchema);

module.exports={customerModel};