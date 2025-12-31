const express = require("express");
const router = express.Router();
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const mysql = require("mysql2");
const db = require("../config/db");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// const http = require("http");
// const server = http.createServer((req, res) => {
//   const motorbike = {
//     // will get motorbike from database later
//     brand: "Yamaha",
//     model: "120Y",
//     color: "blue",
//     manufactured: 1974,
//     price: 2000,
//   };
//   res.setHeader("Content-Type", "application/json");
//   res.write(JSON.stringify(motorbike));
//   res.end();
// });
// server.listen(8000);

app.get("/database", function (req, res, next) {
  const conn = mysql.createConnection(db);
  conn.connect((err) => {
    if (err) throw err;
    console.log("connection success");
    conn.query("select * from service_reports", (err, result) => {
      console.log(result);
    });
  });
  res.send("Hello database");
});

// app.get("/create", function (req, res, next) {
//   const conn = mysql.createConnection(db);
//   conn.connect((err) => {
//     if (err) throw err;

//     const dummyReport = {
//       customer_name: "Lee",
//       service_summary: "replace hard disk",
//       service_completion: "1982-01-01",
//     };

//     conn.query(
//       "insert into service_reports set ?",
//       dummyReport,
//       (err, result) => {
//         console.log(result);
//       }
//     );
//   });
//   res.send("Hello database");
// });

app.post("/create", function (req, res, next) {
  // const conn = mysql.createConnection(db);
  // conn.connect((err) => {
  //   if (err) throw err;

  //   conn.query("insert into service_reports set ?", req.body, (err, result) => {
  //     console.log(result);
  //   });
  // });
  res.send("Hello 123 database");
  console.log(JSON.parse(req.body));
});

app.get("/", function (req, res, next) {
  res.send("Hello World!");
});

app.listen(8000, (err) => {
  if (err) console.log(err);
  console.log("Server listening on PORT 8000");
});
