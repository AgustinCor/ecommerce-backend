const express=require ("express");
const cors=require("cors");
const morgan =require("morgan");
const db=require("./utils/database");
const routerApi = require("./routes");
//const transporter=require("./utils/mailer");

const app =express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));


routerApi(app);

db.authenticate()
  .then (() => console.log("Base de dato autenticada"))
  .catch((error) => console.log(error));

db.sync({alter:false})
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error))

/*const sendEmail =async ()=>{
   await transporter.sendMail({
    from: "agustin.cordero201@gmail.com",
    to:"agustin.cordero201@gmail.com",
    subject:"Prueba de nodemailer",
    text:"Hola steven estuvo aqui",
    html:'<h1>Hola no soy steven</h1>'
   });
}*/


//sendEmail();
 // transporter.verify()
   // .then(() => console.log("transporter is ok"))
 //   .catch((error) => console.log(error));

app.get("/",(req,res) => {
    res.json({message:"welcome to my server"});
});

module.exports =app;