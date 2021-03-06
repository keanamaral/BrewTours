//This file makes connection to mySQL Database called brew_db

// ===============================================================================
// Step1: GET DEPENDENCIES
// ===============================================================================
// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        root: 3306,
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'brew_db',
    });
};

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

