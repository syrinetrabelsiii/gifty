const express = require('express');
const  {
    createUser,
    loginUserCtrl,
    getallUser,
    getaUser,
    deleteaUser,
    updatedUser,
    blockUser,
    unblockUser,
    handleRrefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    getWishlist,
    loginAdmin,
    createOrder,
    getOrders,
    getAllOrders,
} = require("../controller/userCtrl");

const {authMiddleware, isAdmin} = require("../middlwares/authMiddleware");
const router = express.Router();
router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);

router.put("/reset-password/:token", resetPassword);


router.put("/password", authMiddleware, updatePassword);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);



router.get("/get-orders", authMiddleware, getOrders);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getAllOrders);


router.get("/refresh", handleRrefreshToken);
router.get("/logout", logout);

router.get("/wishlist", authMiddleware, getWishlist);


router.get("/all-users",getallUser);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);


router.put("/block-user/:id",authMiddleware, isAdmin, blockUser);
router.put("/edit-user",authMiddleware, isAdmin, updatedUser);
router.put("/unblock-user/:id",authMiddleware, isAdmin, unblockUser);

module.exports = router;
