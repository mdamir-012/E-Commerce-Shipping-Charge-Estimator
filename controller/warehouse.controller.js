const { warehouseModel } = require("../models/warehous.model");




const getWarehouses = async (req, res) => {
    try {
        const warehouses = await warehouseModel.find();
        res.status(200).json(warehouses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const addWarehouse = async (req, res) => {
    try {
        const { name, location } = req.body;
        
        const addwarehousedata = new warehouseModel({
            name,
            location
        });

        await addwarehousedata.save();
        res.status(201).json({ message: "added successfully", warehouse: addwarehousedata });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const updateWarehouse = async (req, res) => {
    try {
        const {id } = req.params;
        const updateData = req.body;

        const updatedWarehouse = await warehouseModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true } 
        );

        if (!updatedWarehouse) {
            return res.status(404).json({ message: "not found" });
        }

        res.status(200).json({ message: "updated successfully", warehouse: updatedWarehouse });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const deleteWarehouse = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deleted = await warehouseModel.findByIdAndDelete(id);
        
        if (!deleted) {
            return res.status(404).json({ message: "not found" });
        }

        res.status(200).json({ message: "deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports={getWarehouses,addWarehouse,deleteWarehouse}