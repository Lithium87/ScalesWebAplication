const sqlite3 = require("sqlite3");
const { openConnection } = require("./utils/db");

let db = openConnection();

exports.listAllOperators = (req, res) => {
  let sql = `SELECT operator_id id, zveno_id zveno, operator_name name FROM Operators`;
  let params = [];

  db.all(sql, params, (err, rows) => {
    if (err) return res.status(400).json({ err: error.message });
    res.json({
      message: "success",
      data: rows,
    });
  });
};
