const {Router} =require("express");
const getOrder = require("../controllers/order.controller");
const router =Router();

router.get("/:id/order",getOrder);

module.exports =router;