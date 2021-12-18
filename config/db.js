const mysql = require('mysql');
const connectDB  = mysql.createConnection({ // DB 커넥션 생성
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : '1478',
    database : 'recipe',
  });
  
connectDB.connect( // DB 접속
  err => {
    if (err) {
      console.log(err.message);
    }
  }
);

module.exports = connectDB;