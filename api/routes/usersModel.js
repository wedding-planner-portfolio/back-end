const db = require("../../data/dbConfig");

module.exports = {
  getAll,
  getBy,
  insert,
  update,
  remove
};

function getAll() {
  return db("users");
}

function getBy(filter) {
  return db("users")
    .where({ filter })
    .first();
}

function insert(user) {
  return db("users").insert(user);
}

function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}
