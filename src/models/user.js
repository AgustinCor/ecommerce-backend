const Sequelize = require('sequelize');
const bcrypt=require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  return user.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schema:
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Jorge,
 *         email:
 *           type: string
 *           example: jorge@gmail.com
 *         password:
 *           type: string
 *           example: 66677
 *     login:
 *        type: object
 *        properties:
 *          email:
 *            type: string
 *            examples: jorge@gmail.com
 *          password:
 *            type: string
 *            example: 1234
 *     loginResponse:
 *        type: object
 *        properties:
 *         username:
 *           type: string
 *           example: Jorge
 *         email:
 *           type: string
 *           example: jorge@gmail.com
 *        token:
 *          type: string
 *          example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJTdGV2ZW4iLCJsYXN0bmFtZSI6IlJ1aXoiLCJpZCI6MiwiZW1haWwiOiJyb2JlcnRAZ21haWwuY29tIiwiaWF0IjoxNjc0ODY4ODM4LCJleHAiOjE2NzQ4Njk0Mzh9.f10accjngD34QlJ8CJ8czY4NVe_eL6WT-uTHFyRyqpKzHUYTJEB
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

class user extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "user_email_key"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks:{
      beforeCreate:(user,options)=>{
        const {password} =user;
        const hash =bcrypt.hashSync(password,10);
        user.password =hash;
       },
    },
    sequelize,
    tableName: 'user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
