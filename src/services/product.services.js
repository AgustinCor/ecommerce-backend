const models=require("../models");
const {Op} =require("sequelize");

const {product, user}= models;

class ProductServices{
  static async getAll(){
    try{
     const result =await product.findAll({
      where: {
        availableQty: { [Op.gt]: 0}
      },
        include:{
           attributes:['username'],
           model:user,
         as:"user",
        },
     });
     return result;
    }catch(error){
      throw error
    }
  }

  static async getById(id){
    try{
      const result=await product.findByPk(id)
      return result
    }catch(error){
      throw error;
     } 
    }

  static async add(body){
    try{
      const result =await product.create(body);
      return result;
    }catch(error){
      throw error
    }
}
}

module.exports =ProductServices;