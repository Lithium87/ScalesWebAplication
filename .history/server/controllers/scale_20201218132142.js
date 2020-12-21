const sqlite3 = require("sqlite3");
const { openConnection } = require("../utils/db");

let db = openConnection();

exports.listAllScales = (req, res) => {
  let sql = `SELECT DISTINCT scale_id id, scale_address address, scale_no scale FROM Scales ORDER BY scale`;
  let params = [];

  db.all(sql, params, (err, rows) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({
      message: "success",
      data: rows,
    });
  });
};

exports.getScaleById = (req, res) => {
  let sql = `SELECT scale_id FROM Scales WHERE scale_id = ?`;
  let params = [req.params.scale_id];

  db.get(sql, params, (err, row) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({
      message: "success",
      data: row,
    });
  });
};
