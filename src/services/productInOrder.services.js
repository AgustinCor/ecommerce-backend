const models =require("models");

const {productInOrder} =models;

class ProductIOrder {
    static async createOrder(body){
      try{
      const result =await productInOrder.create(body);
      return result;
      }catch(error){
        throw error;
      }
    }
}

module.exports = ProductIOrder;