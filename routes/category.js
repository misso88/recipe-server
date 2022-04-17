const express = require('express');
const db = require('../config/db.js');
const router = express.Router();

router.post('/list', (req, res) => {
    var sql = "SELECT ct_name, ct_img FROM category"
        + " WHERE ct_yn = 'Y'"
        + " ORDER BY ct_order";
    db.query(sql, (error, rows) => {
        if (error) {
            console.log('categoryList : no');
            throw error;
        }
        console.log('categoryList : ok');
        res.send(rows);
    });
});

module.exports = router