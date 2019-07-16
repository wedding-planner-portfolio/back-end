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

module.exports = router;
