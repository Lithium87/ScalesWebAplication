const sqlite3 = require("sqlite3");
const { openConnection, closeConnection } = require("../utils/db");

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

db.closeConnection();
