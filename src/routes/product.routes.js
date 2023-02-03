const {Router} =require("express");
const {createProduct,getAllProducts} = require("../controllers/product.controller");

const router =Router();

router.get("/get",getAllProducts);
router.post("/create",createProduct);

module.exports = router;