const express = require ("express");
const {
  createProduct,
} = require ("../controller/productCtrl");
const { authMiddleware, isAdmin } = require("../middlwares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);


module.exports = router;