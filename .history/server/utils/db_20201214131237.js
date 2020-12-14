const sqlite3 = require("sqlite3");

let database;

exports.openConnection = () => {
  database = new sqlite3.Database("./server/db/Scales.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to Scales DB.");
  });
};

exports.closeConnection = () => {
  database.close((err) => {
    if (err) console.log(err.message);
    console.log("Close the DB connection.");
  });
};
