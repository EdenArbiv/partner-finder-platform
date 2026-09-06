const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const filter = {};

    if (req.query.category && req.query.category !== "all") {
      filter.category = req.query.category;
    }

    const posts = await Post.find(filter).sort({ createdAt: -1 }).lean();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Could not load posts." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).lean();

    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    res.json(post);
  } catch (error) {
    res.status(400).json({ message: "Invalid post id." });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, description, category, location, authorName, contact } = req.body;

    if (!title || !description || !authorName) {
      return res.status(400).json({
        message: "Title, description and author name are required.",
      });
    }

    const post = await Post.create({
      title,
      description,
      category,
      location,
      authorName,
      contact,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message || "Could not create post." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Post not found." });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: "Invalid post id." });
  }
});

module.exports = router;
