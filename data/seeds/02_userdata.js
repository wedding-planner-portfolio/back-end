const bcrypt = require("bcryptjs");
const password = bcrypt.hashSync("test", 14);

exports.seed = function(knex) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          id: 1,
          firstName: "Ronny",
          lastName: "Alvarado",
          email: "Rsalvarado777@gmail.com",
          password: `${password}`,
          phone: "9999999999"
        },
        {
          id: 2,
          firstName: "test",
          lastName: "test",
          email: "test",
          password: `${password}`,
          phone: "test"
        }
      ]);
    });
};
