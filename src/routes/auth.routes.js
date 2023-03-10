const {Router} =require("express");
const  {register,login}= require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auht.middleware");

const router =Router();

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: create a new user into aplication
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/register'
 *     responses:
 *       201:
 *         description: Create a user
 *         content:
 *  
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user created
 * /api/v1/auth/login:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Login an existing user into the app
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to login a existing user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schema/login"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schema/loginResponse"
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user not found / something wrong /not password or email provided
 * 
 */

router.post("/register",register);
router.post("/login",authMiddleware,login)

module.exports =router;