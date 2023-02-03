const ProductInCartServices = require("../services/productInCart.services");

const addProduct = async(req,res)=>{
  try{
    const body =req.body;
    const result =await ProductInCartServices.AddProductIncart(body);
    res.json(result);
  }catch(error){
    throw error;
  }
};

module.exports =addProduct;
