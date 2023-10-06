const express = require("express");
const { getPosts, createPost } = require("../controllers/postController");
const router = express.Router();

// get all posts
router.get("/", getPosts);

// create posts
router.post("/", createPost);

module.exports = router;
