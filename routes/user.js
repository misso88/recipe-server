const express = require('express');
const db = require('../config/db.js');
const router = express.Router();

router.get('/get', (req, res) => {
  var userSql = "SELECT * FROM test";
  db.query(userSql, (error, rows) => {
    if (error) {
      console.log('get : no');
      throw error;
    }
    res.send(rows);
  });
});

module.exports = router