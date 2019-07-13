const knex = require("knex");
const knexConfig = require("../knexfile");

const environment = process.env.ENVIRONMENT || "production";

module.exports = knex(knexConfig[environment]);
