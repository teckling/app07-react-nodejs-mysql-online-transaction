const express = require("express");
const mysql = require("mysql2");
const router = express.Router();

const db = require("../config/db");

/* GET service reports listing. */
router.get("/", function (req, res, next) {
  const conn = mysql.createConnection(db);
  conn.connect((err) => {
    if (err) throw err;

    const dummyReport = {
      customer_name: "John",
      service_summary:
        "Replace capacitor in power supply unit of Lenovo notebook ",
      service_completion: "1968-01-02",
    };
    conn.query(
      "insert into service_reports set ?",
      dummyReport,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  });
  res.send("This route is supposed to send a listing of service reports");
});

module.exports = router;
