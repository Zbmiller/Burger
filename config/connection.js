// 
// Set up the code to make the connection to the MySQL Database
// 

var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Slayer666",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL server");
});

module.exports = connection