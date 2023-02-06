const {Router} =require('express');
const addProduct = require('../controllers/productInCart.controller');

const router =Router();

/**
 * @openapi
 * /api/v1/cart/addProduct:
 *   post:
 *     summary: add a new product
 *     tags:
 *       - Cart
 *     requestBody:
 *       description: Required fields to add somethinf to the cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/addProduct'
 *     response:
 *       201:
 *         description: Product addead
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product added
 *     responses:
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product not found /
 * 
 */

router.post("/",addProduct);

module.exports =router;