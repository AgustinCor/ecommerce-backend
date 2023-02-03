const ProductServices = require("../services/product.services");

const getAllProducts =async (req,res) =>{
    try{
      const result =await ProductServices.getAll();
      res.json(result);
    }catch(error){
      res.status(400).json(error.message);
    }
}

const createProduct = async (req,res) =>{
    try{
      const body =req.body
      const result =await ProductServices.add(body);
      res.json({
        message:"Product created",
        data:result
      })
    }catch(error){
      res.status(400).json(error.message);
    }
}

module.exports = {
  createProduct,
  getAllProducts,
};