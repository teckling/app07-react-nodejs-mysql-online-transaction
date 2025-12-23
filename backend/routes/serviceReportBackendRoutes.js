const express = require("express");
const mysql = require("mysql2");
const router = express.Router();

const db = require("../config/db");

/* GET service reports listing. */
router.get("/", function (req, res, next) {
  const conn = mysql.createConnection(db);
  conn.connect((err) => {
    if (err) throw err;
    console.log("connected to database");
  });
  res.send("This route is supposed to send a listing of service reports");
});

module.exports = router;
