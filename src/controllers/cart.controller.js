const CartServices = require("../services/cart.services");

const cartProducts =async(req,res) =>{
  try{
    const {id} =req.params;
    const result = await CartServices.getCartProducts(id);
    res.json({
        message:"User's cart getted",
        data:result
    })
  }catch(error){
    res.status(400).json(error.message);
  }
}

module.exports =
  cartProducts;