const express = require("express");

const router = express.Router();

const { listAllScales, getScaleById } = require("../controllers/scale");

router.get("/scales", listAllScales);
router.get("/scale/:scale_id", getScaleById);

module.exports = router;
