const OrderService = require("../services/order.service");

const getOrder = async(req,res) =>{
  try{
    const {id} =req.params;
    const result =await OrderService.getUserOrder(id)
    res.json({
        message:"Users's order getted",
        data:result
    })
  }catch(error){
    res.status(400).json(error.message);
  }
};

module.exports =getOrder;