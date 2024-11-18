const mongoose= require("mongoose");

const warehouseSchema= mongoose.Schema({
    name:{type:String},
    location:{lat:Number,lng:Number}
})


const warehouseModel= mongoose.model("warehouse",warehouseSchema);

module.exports={warehouseModel};
