const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "qudcks26", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
