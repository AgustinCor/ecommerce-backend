const {Router} =require("express");
const {createProduct,getAllProducts} = require("../controllers/product.controller");

const router =Router();

/**
 * @openapi
 * /api/v1/product/get:
 *   get:
 *     summary: get all products
 *     tags: [Product]
 *     responses:
 *       201:
 *         description: get products
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               message:
 *               example: ALL products obtained
 * /api/v1/product/create:
 *   post:
 *     summary: create a new product
 *     tags: [Product]
 *     requestBody:
 *       description: Required fields to create a new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schema/create"
 *     responses:
 *       201:
 *         description: create a new product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product created
 */

router.get("/",getAllProducts);
router.post("/",createProduct);

module.exports = router;