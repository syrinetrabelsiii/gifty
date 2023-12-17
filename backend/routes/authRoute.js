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
} = require("../controller/userCtrl");

const {authMiddleware, isAdmin} = require('../middlwares/authMiddleware');
const router = express.Router();
router.post("/register", createUser);

router.post("/login", loginUserCtrl);
router.get("/refresh", handleRrefreshToken);
router.get("/logout", logout);


router.get('/all-users',getallUser);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);
router.put("/block-user/:id",authMiddleware, isAdmin, blockUser);
router.put("/edit-user",authMiddleware, isAdmin, updatedUser);
router.put("/unblock-user/:id",authMiddleware, isAdmin, unblockUser);

module.exports = router;
