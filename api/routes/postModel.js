const db = require("../../data/dbConfig");

module.exports = {
  getAll,
  getAllPostsById,
  insert
};

function getAll() {
  return db("posts");
}

function getAllPostsById(id) {
  return db("posts")
    .where({ userId: id })
    .join("users", "posts.userId", "=", "users.id")
    .select(
      "posts.*",
      "users.firstName",
      "users.lastName",
      "users.email",
      "users.phone"
    );
}

function insert(post) {
  return db("posts").insert(post);
}
