const {Router} =require("express");
const getOrder = require("../controllers/order.controller");
const router =Router();

/**
 * @openapi
 * /api/v1/user/{id}/order:
 *   get:
 *     summary: get all user's orders
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user's order
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: get orders
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               message:
 *               example: ALL orders obtained
 */

router.get("/:id/order",getOrder);

module.exports =router;