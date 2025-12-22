var express = require("express");
var router = express.Router();

/* GET service reports listing. */
router.get("/", function (req, res, next) {
  res.send("This route is supposed to send a listing of service reports");
});

module.exports = router;
