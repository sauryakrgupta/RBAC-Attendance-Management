const sql = require("mysql");
const db = sql.createConnection
({
    host:"localhost",
    user:"root",
    password:"arkesh",
    database:"attendance"
});

module.exports = db;