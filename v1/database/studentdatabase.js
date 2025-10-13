const mysql = require("mysql2");



const db = mysql.createConnection({
    host: 'mysql.s2164.sureserver.com',
    user: 'LearningUser',
    password: 'consomoloveri',
    database: 'gjournal_Learning',
    port: 3308
});

db.connect(err => {
    if (err) {
        console.error("❌ MySQL connection error:", err.message);
        return;
    }
    console.log("✅ Connected to MySQL database!");

});

module.exports= db;

