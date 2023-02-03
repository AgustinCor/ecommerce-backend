
const models = require("../models");

const {cart,user,productInCart} =models;

class CartServices{
  static async createCart(id){
    try{
      const result=await cart.create({
        totalPrice:0,
        userId:id,
      })
      return result
    }catch(error){
      throw error;
    }
  }

  static async getCartProducts(id){
    try{
      const result= await user.findOne({
        where:{id},
        include:{
          model:cart,
          as:"home",
          include:{
            model:productInCart,
            as:"productInCarts"
          }
        }
      });
      return result;
    }catch(error){
        throw error;
    }
  }
}

module.exports =CartServices;