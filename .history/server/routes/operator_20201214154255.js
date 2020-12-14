const express = require("express");

const router = express.Router();

const { listAllOperators } = require("../controllers/operator");

router.get("/operators", listAllOperators);

module.exports = router;
