const mysql = require("mysql")
const util = require("util")

const conn = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "",
    database : "internship"
})
const exe = util.promisify(conn.query).bind(conn)

module.exports = exe