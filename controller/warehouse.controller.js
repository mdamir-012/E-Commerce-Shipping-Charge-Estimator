const { warehouseModel } = require("../models/warehous.model");




const getWarehouses = async (req, res) => {
    try {
        const warehouses = await warehouseModel.find();
        res.status(200).json(warehouses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



module.exports={getWarehouses}