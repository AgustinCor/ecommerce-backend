const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
    apis:["./src/routes/auth.routes.js",
          "./src/models/user.js",

          "./src/routes/productInCart.routes.js",
          "./src/models/productIncart.js",
           
           "./src/routes/cart.routes.js",
           "/src/routes/product.routes.js"
        ],
    definition: {
      openapi: "3.0.0",
      info: {
              title: "Chat API",
              version: "1.0.0",
              description: "API para ecommerce" 
          },
    }
  };

const swaggerSpec =swaggerJSDoc(options);

const swaggerDocs = (app,port) => {
  //generar la ruta donde se mostrara la documentacion
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get("/api/v1/docs.json", (req,res) => {
    res.setHeader({"Content-Type" : "application/json"})
    res.send(swaggerSpec)
  });

  console.log(`La documentacion esta disponible en ${process.env.URL} : ${port}/api/v1/docs`)
}

module.exports =swaggerDocs;
