const mongoose = require("mongoose");
const PostModel = require("../models/postModel");

// get all posts
const getPosts = async (req, res) => {
  const posts = await PostModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(posts);
};

// create post
const createPost = async (req, res) => {
  const { body, author } = req.body;

  try {
    await PostModel.create({
      body,
      author,
    });
    res.status(201).json({ message: "Created successfully" });
  } catch (error) {
    res.json({ error: error });
  }
};

module.exports = { getPosts, createPost };
