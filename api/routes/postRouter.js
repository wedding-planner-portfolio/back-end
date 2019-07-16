const router = require("express").Router();

const Post = require("./postModel");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.getAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving all posts" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const postsById = await Post.getAllPostsById(id);
    res.status(200).json(postsById);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving posts by Id" });
  }
});

router.post("/", async (req, res) => {
  const post = req.body;
  try {
    const addedNewPost = await Post.insert(post);
    res.status(201).json(addedNewPost);
  } catch (err) {
    res.status(500).json({ message: "Error posting data" });
  }
});

router.delete("/:postId", async (req, res) => {
  const { postId } = req.params;
  try {
    const deletedPost = await Post.remove(postId);
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json({ error: "Error deleting post" });
  }
});

router.put("/:postId", async (req, res) => {
  const { postId } = req.params;
  try {
    const updatedPost = await Post.update(postId, req.body);
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ error: "Error updating post" });
  }
});

module.exports = router;
