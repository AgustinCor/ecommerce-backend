const bcrypt =require("bcrypt");
const jwt =require("jsonwebtoken");
const models = require("../models");
require("dotenv").config();

const {user} =models;

class AuthServices {
  static async registerUser(userReg){
    try{
     const result =await user.create(userReg);
     return result;
    }catch(error){
      throw error;
    }
  }

  static async logingSucceded(credentials){
    try{
      const {email,password} = credentials;

      const userRegisted= await user.findOne({
        where:{email}
      })
      if(userRegisted){
        const isValid=bcrypt.compareSync(password, userRegisted.password);
        return isValid ? {isValid,userRegisted} : {isValid};
      }
      return {isValid:false};
    }catch(error){
      throw error
    }
  }

  static genToken(data){
    try{
      const token=jwt.sign(data, process.env.JWT_SECRET,{
        algorithm:"HS512",
      });
      return token;
    }catch(error){
      throw error;
    }
  }
}

module.exports = AuthServices;