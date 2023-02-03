const  transporter  = require("../utils/mailer");
const AuthServices=require("../services/auth.services");
const CartServices = require("../services/cart.services");

const register  =async (req,res,next) =>{
  try{
    const userReg=req.body;
    const result =await AuthServices.registerUser(userReg);
    
    if (result){
      await CartServices.createCart(result.id);
      res.status(201).json({message:"user created"})
       await transporter.sendEmail({
        to:result.email,
        from:"agustin.cordero201@gmail.com",
        subject:"Email confirmation",
        html:"<h1>Wellcome to the eccomerce!</h1>",
       })
    }else{
      res.status(400).json("somethins is wrong");
    }
  }catch(error){
    next(error);
  }
}

const login =async (req,res,next) =>{
  try{
   const {email,password} =req.body;
     if(!email){
      res.status(400).json({
        error:"Missing data",
        message:"not email provided",
      })
     }
     if(!password){
      res.satus(400).json({
        error:"Missing data",
        message:"not password provided",
      })
     }

     const result =await AuthServices.logingSucceded({email,password});

     if(result.isValid){
      const {username,email,password,id} =result.userRegisted;
      const userData ={username,email,password,id};
      const token = await AuthServices.genToken(userData)
      userData.token =token
      res.json(userData);
     }else{
      res.status(400).json({
        message:"user not found"
      });
     }
  }catch(error){
    next(error);
    res.status(400).json(error.message);
  }
}

module.exports ={
  login,
  register}
  ;