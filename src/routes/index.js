const authRoutes =require("./auth.routes");
const productRoutes=require("./product.routes");
const cartRoutes=require("./cart.routes");
const orderRoutes=require("./order.routes");
const productInCartRoutes =require("./productInCart.routes")

const routerApi= (app) =>{
    app.use("/api/v1/auth/",authRoutes);//registra un user /logea un user
    app.use("/api/v1/product/get",productRoutes);// obtiene todos los productos
    app.use("/api/v1/product/create",productRoutes);//crea un product
    app.use("/api/v1/user/",cartRoutes);// obtiene el carrito de un user
    app.use("/api/v1/user/",orderRoutes);// obtiene las ordenes de un user
    app.use("/api/v1/cart/addProduct",productInCartRoutes);// aniade productos a un carrito
}

module.exports= routerApi;