const express = require("express");

const router = express.Router();

const { listAllScales } = require("../controllers/scale");

router.get("/scales", listAllScales);

module.exports = router;
