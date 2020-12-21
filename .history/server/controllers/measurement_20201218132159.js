const sqlite3 = require("sqlite3");
const { openConnection } = require("../utils/db");

let db = openConnection();

exports.getAllMeasurements = (req, res) => {
  let sql = `SELECT scale_id, grid_id id, grid_name name, operator_name, measurement_time, measurement_date, weight FROM Measurements`;
  let params = [];

  db.all(sql, params, (err, rows) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({
      message: "success",
      data: rows,
    });
  });
};

exports.getMeasurementsByScale = (req, res) => {
  let sql = `SELECT measurement_id, scale_id, grid_name, operator_name, measurement_time, measurement_date, weight, density, mixer, byrkalo, penetration, status FROM Measurements WHERE scale_id = ?`;
  let params = [req.params.scale_id];

  db.all(sql, params, (err, rows) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({
      message: "success",
      data: rows,
    });
  });
};
