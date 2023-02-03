const models = require("../models");
const {productInCart} =models;

class ProductInCartServices {
  static async AddProductIncart(body){ 
    try{
     const result=await productInCart.create(body)
      return result
    }catch(error){
        throw error
    }
  }
}

module.exports =ProductInCartServices;