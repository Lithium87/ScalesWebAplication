const express = require("express");

const router = express.Router();

const { getAllMeasurements } = require("../controllers/measurement");

router.get("/measurements", getAllMeasurements);
//router.get();

module.exports = router;
