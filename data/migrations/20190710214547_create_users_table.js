exports.up = async function(knex) {
  await knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string("firstName", 150).notNullable();
    tbl.string("lastName", 150).notNullable();
    tbl
      .string("email", 250)
      .notNullable()
      .unique();
    tbl
      .string("phone", 20)
      .notNullable()
      .unique();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users");
};
