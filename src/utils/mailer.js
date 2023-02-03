
const nodemailer =require('nodemailer');

require("dotenv").config();

const transporter = nodemailer.createTransport({
  host:"manolo@gmail.com",
  port:"435",
  secure:true,
  auth:{
    user:"agustin.cordero201@gmail.com",
    pass:process.env.G_PASSWORD,
  }
});

module.exports = transporter;
