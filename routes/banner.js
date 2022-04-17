const express = require('express');
const db = require('../config/db.js');
const router = express.Router();

router.post('/list', (req, res) => {
    var sql = "SELECT bn_img FROM banner"
        + " WHERE bn_yn = 'Y'"
        + " ORDER BY bn_order";
    db.query(sql, (error, rows) => {
        if (error) {
            console.log('bannerList : no');
            throw error;
        }
        console.log('bannerList : ok');
        res.send(rows);
    });
});

module.exports = router