const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

let db = new sqlite3.Database("./db/Scales.db", (err) => {
    if (err) console.error(err.message);
    console.log("Connected to Scales DB.");
});

// scales routes
app.get("/api/scales", (req, res) => {
    let sql = `SELECT DISTINCT scale_id id, scale_address address, scale_no scale FROM Scales ORDER BY scale`;
    let params = [];

    db.all(sql, params, (err, rows) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json({
            message: "success",
            data: rows,
        });
    });
});

app.get("/api/scale/:scale_id", (req, res) => {
    let sql = `SELECT scale_id FROM Scales WHERE scale_id = ?`;
    let params = [req.params.scale_id];
    db.get(sql, params, (err, row) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json({
            message: "success",
            data: row,
        });
    });
});

// measurements routes
app.get("/api/measurements", (req, res) => {
    let sql = `SELECT scale_id, grid_id id, grid_name name, operator_name, measurement_time, measurement_date, weight FROM Measurements`;
    let params = [];

    db.all(sql, params, (err, rows) => {
        if (err) return res.status(400).json({ error: err.message });

        res.json({
            message: "success",
            data: rows,
        });
    });
});

app.get("/api/measurements/:scale_id", (req, res) => {
    let sql = `SELECT measurement_id, scale_id, grid_name, operator_name, measurement_time, measurement_date, weight, density, mixer, byrkalo, penetration, status FROM Measurements WHERE scale_id = ?`;
    let params = [req.params.scale_id];
    db.all(sql, params, (err, rows) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json({
            message: "success",
            data: rows,
        });
    });
});

// TODO: measurementsPerScale server
// POST request to /api/measurements/:scale_id

// operators routes
app.get("/api/operators", (req, res) => {
    let sql = `SELECT operator_id id, zveno_id zveno, operator_name name FROM Operators`;
    let params = [];

    db.all(sql, params, (err, rows) => {
        if (err) return res.status(400).json({ err: error.message });
        res.json({
            message: "success",
            data: rows,
        });
    });
});

// db.close((err) => {
//   if (err) console.log(err.message);
//   console.log("Close the DB connection.");
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));