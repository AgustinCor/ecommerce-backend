const authRoutes =require("./auth.routes");
const productRoutes=require("./product.routes");
const cartRoutes=require("./cart.routes");
const orderRoutes=require("./order.routes");
const productInCartRoutes =require("./productInCart.routes")

const routerApi= (app) =>{
    app.use("/api/v1/auth",authRoutes);
    app.use("/api/v1/product",productRoutes);
    app.use("/api/v1/user",cartRoutes);
    app.use("/api/v1/user",orderRoutes);
    app.use("/api/v1/cart",productInCartRoutes);
}

module.exports= routerApi;