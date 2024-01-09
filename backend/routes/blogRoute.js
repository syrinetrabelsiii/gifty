const express = require("express");
const { createBlog,
    getBlog,
    getAllBlogs,
    deleteBlog,
    uploadImages
} = require("../controller/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlwares/authMiddleware");
const {blogImgResize, uploadPhoto} = require("../middlwares/uploadImages");
const router = express.Router();


router.post("/", authMiddleware, isAdmin, createBlog);

router.put("/upload/:id",
authMiddleware,
isAdmin,
uploadPhoto.array("images", 3),
uploadImages
);

router.get("/:id", getBlog);
router.get("/", getAllBlogs);


router.delete("/:id", authMiddleware, isAdmin, deleteBlog);


module.exports = router;
