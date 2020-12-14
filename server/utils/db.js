const sqlite3 = require("sqlite3");

let db;

exports.openConnection = () => {
  db = new sqlite3.Database("./db/Scales.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to Scales DB.");
  });
};

exports.closeConnection = () => {
  db.close((err) => {
    if (err) console.log(err.message);
    console.log("Close the DB connection.");
  });
};
