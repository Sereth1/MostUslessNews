const express = require("express");
const {
  register,
  getRegister,
  findUserId,
  UpdateUser,
} = require("../rootController/rootControls");
const router = express.Router();
router
  .post("/api/register", register)
  .get("/api/login", getRegister)
  .get("/api/login/:id", findUserId)
  .put("/api/login/:id", UpdateUser);

module.exports = router;
