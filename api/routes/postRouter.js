const router = require("express").Router();

const Post = require("./postModel");

const restricted = require("../../auth/restricted-middleware");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.getAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving all posts" });
  }
});

router.get("/:userId", restricted, async (req, res) => {
  const { id } = req.params;
  try {
    const postsByUserId = await Post.getAllPostsById(id);
    res.status(200).json(postsByUserId);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving posts by Id" });
  }
});

router.post("/", restricted, validBody, async (req, res) => {
  const post = req.body;
  try {
    const addedNewPost = await Post.insert(post);
    const getAllPosts = await Post.getAll();
    console.log(getAllPosts);
    res.status(201).json(getAllPosts);
  } catch (err) {
    res.status(500).json({ message: "Error posting data" });
  }
});

router.delete("/:postId", restricted, async (req, res) => {
  const { postId } = req.params;
  try {
    const deletedPost = await Post.remove(postId);
    const getAllPosts = await Post.getAll();
    res.status(200).json(getAllPosts);
  } catch (err) {
    res.status(500).json({ error: "Error deleting post" });
  }
});

router.put("/:postId", restricted, async (req, res) => {
  const { postId } = req.params;
  try {
    const updatedPost = await Post.update(postId, req.body);
    const getAllPosts = await Post.getAll();
    res.status(200).json(getAllPosts);
  } catch (err) {
    res.status(500).json({ error: "Error updating post" });
  }
});

function validBody(req, res, next) {
  const { userId, imageURL, description, location, theme, pricing } = req.body;

  if (userId && imageURL && description && location && theme && pricing) {
    next();
  } else {
    res.status(400).json({ error: "Please enter all required data" });
  }
}

module.exports = router;
