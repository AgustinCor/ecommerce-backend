const {Router} =require("express");
const cartProducts= require("../controllers/cart.controller");
const router =Router()

router.get("/:id/cart",cartProducts);

module.exports =router;