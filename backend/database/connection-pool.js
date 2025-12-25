const mysql = require("mysql2");
const db = require("../config/db");
const dbConnectionPool = {
  pool: null,
  init: function () {
    this.pool = mysql.createPool(db);
  },
  getPoolConnection: function () {
    return this.pool;
  },
};

module.exports = dbConnectionPool;
