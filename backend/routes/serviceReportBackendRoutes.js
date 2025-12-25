const express = require("express");
const router = express.Router();
const dbConnectionPool = require("../database/connection-pool");
const ServiceReport = require("../database/service-report-queries");

let serviceReport = new ServiceReport(dbConnectionPool);

router.get("/:id", function (req, res) {
  serviceReport.get(req.params.id);
  console.log("report id is", req.params.id);
  res.sendStatus(200);
});

router.put("/:id", function (req, res) {
  serviceReport.update(req.params.id, req.body);
  res.sendStatus(200);
  console.log("the request body is", req.body);
  res.sendStatus(200);
});

router.delete("/:id", function (req, res) {
  serviceReport.delete(req.params.id);
  res.sendStatus(200);
});

router.post("/", function (req, res) {
  serviceReport.save(req.body);
  res.sendStatus(200);
});

router.get("/", function (req, res) {
  serviceReport.getAll();
  res.sendStatus(200);
});

module.exports = router;
