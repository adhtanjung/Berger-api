const mysql = require("mysql");

const db = mysql.createConnection({
	host: "db4free.net",
	user: "berger",
	password: "Asd12345",
	database: "berger",
	port: 3306,
});

module.exports = db;
