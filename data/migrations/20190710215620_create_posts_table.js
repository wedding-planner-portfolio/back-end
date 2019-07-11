exports.up = async function(knex) {
  await knex.schema.createTable("posts", tbl => {
    tbl.increments();
    tbl
      .integer("userId", 150)
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.string("imageURL", 250).notNullable();
    tbl.string("description", 500).notNullable();
    tbl.string("location", 50).notNullable();
    tbl.string("theme", 20).notNullable();
    tbl.string("pricing", 20).notNullable();
    tbl.string("features", 250);
    tbl.string("vendors", 250);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("posts");
};
