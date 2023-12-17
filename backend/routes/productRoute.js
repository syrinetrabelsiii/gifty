const express = require("express");
const { createProduct,
    getaProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
}= require("../controller/productCtrl"); 
const { updatedUser } = require("../controller/userCtrl");
const { isAdmin, authMiddleware } = require("../middlwares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);

router.get("/:id", getaProduct);

router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

router.get("/", getAllProduct);

module.exports = router;