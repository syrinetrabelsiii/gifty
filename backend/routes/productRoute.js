const express = require ("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  addToWishlist,
  rating,
  deleteProduct,
} = require ("../controller/productCtrl");
const {  isAdmin, authMiddleware } = require("../middlwares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);

router.get("/:id", getaProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

router.get("/", getAllProduct);

module.exports = router;