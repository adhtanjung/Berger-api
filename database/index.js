const mysql = require("mysql");

const db = mysql.createConnection({
	host: "db4free.net",
	user: "bergerdb",
	password: "Asd12345",
	database: "berger",
	port: 3306,
});
// const db = mysql.createConnection({
// 	host: "localhost",
// 	user: "adhitanjung",
// 	password: "asd123",
// 	database: "berger",
// 	port: 3306,
// });

module.exports = db;
