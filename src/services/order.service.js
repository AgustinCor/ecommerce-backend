
const models = require("../models");

const {order,user} = models;

class OrderService {
  static async createOrder (id) {
    try{
      const result =await order.create({
        totalPrice:0,
        status:true,
        userId:id,
      }) 
      return result;
    }catch(error){
      throw error;
    }
  }

  static async getUserOrder(id){
    try{
      const result =await user.findOne({
        where:{id},
        include:{
          model:order,
          as:"orders"
        }
      });
      return result;
    }catch(error){
        throw error
    }
  }
}

module.exports =OrderService;