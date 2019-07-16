const db = require("../../data/dbConfig");

module.exports = {
  getAll,
  getAllPostsById,
  insert,
  remove,
  update
};

function getAll() {
  return db("posts")
    .join("users", "posts.userId", "=", "users.id")
    .select(
      "posts.*",
      "users.firstName",
      "users.lastName",
      "users.email",
      "users.phone"
    );
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

function remove(postId) {
  return db("posts")
    .where({ id: postId })
    .del();
}

function update(postId, changes) {
  return db("posts")
    .where({ id: postId })
    .update(changes);
}
