const express = require("express");
const router = express.Router();
const connectionPool = require("../database/connection-pool");
const ServiceReportQueries = require("../database/service-report-queries");

let serviceReportQueries = new ServiceReportQueries(connectionPool);

router.get("/:id", function (req, res) {
  serviceReportQueries.get(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json(err.toString());
    } else {
      res.status(200).json(result);
    }
  });
});

router.put("/:id", function (req, res) {
  serviceReportQueries.update(req.params.id, req.body, (err, result) => {
    if (err) {
      res.status(500).json(err.toString());
    } else {
      //      console.log("the request id and body are", req.params.id, req.body);
      res.sendStatus(200);
    }
  });
});

router.delete("/:id", function (req, res) {
  serviceReportQueries.delete(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json(err.toString());
    } else {
      res.sendStatus(200);
    }
  });
});

router.post("/", function (req, res) {
  // console.log(req.body);
  serviceReportQueries.save(req.body, (err, result) => {
    if (err) {
      res.status(500).json(err.toString());
    } else {
      res.sendStatus(200);
    }
  });
});

router.get("/", function (req, res) {
  serviceReportQueries.getAll((err, result) => {
    if (err) {
      res.status(500).json(err.toString());
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
