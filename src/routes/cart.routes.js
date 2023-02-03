const {Router} =require("express");
const cartProducts= require("../controllers/cart.controller");
const router =Router()

/**
 * @openapi
 * /api/v1/user/{id}/cart:
 *   get:
 *     summary: get all user products
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user's cart
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: Products in cart getted
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: produdcts in cart getted
 */

router.get("/:id/cart",cartProducts);

module.exports =router;