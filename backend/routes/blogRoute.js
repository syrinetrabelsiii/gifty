const express = require("express");
const { createBlog,
    updateBlog,
    getBlog,
    getAllBlogs,
    deleteBlog,
    likeBlog,
    dislikeBlog,
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
blogImgResize,
uploadImages
);


router.put("/likes", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, dislikeBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);


router.get("/:id", getBlog);
router.get("/", getAllBlogs);


router.delete("/:id", authMiddleware, isAdmin, deleteBlog);


module.exports = router;
