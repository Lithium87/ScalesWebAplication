const express = require("express");

const router = express.Router();

const {
  getAllMeasurements,
  getMeasurementsByScale,
} = require("../controllers/measurement");

router.get("/measurements", getAllMeasurements);
//router.get("/measurements/:scale_id", getMeasurementsByScale);

module.exports = router;
