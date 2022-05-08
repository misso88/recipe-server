const express = require('express');
const db = require('../config/db.js');
const router = express.Router();

router.post('/list', (req, res) => {
    var sql = "SELECT r.rp_seq, rp_title, rp_contents, rp_img1, rp_view_cnt, rp_like_cnt, CAST(rp_crdate AS char(10)) AS rp_crdate, CAST(rp_uddate AS char(10)) rp_uddate, us_img, us_nickname, ct_img, rl_seq"
        + " FROM recipe r"
        + " LEFT JOIN user u ON r.us_seq = u.us_seq"
        + " LEFT JOIN category c ON r.ct_seq = c.ct_seq"
        + " LEFT JOIN recipe_like rl ON r.rp_seq = rl.rp_seq AND r.us_seq = rl.us_seq"
        + " WHERE rp_yn = 'Y' AND rp_share_yn = 'Y'"
        + " ORDER BY rp_uddate"
        + " LIMIT " + req.body.limit + " OFFSET " + req.body.offset;
    db.query(sql, (error, rows) => {
        if (error) {
            console.log('recipeList : no');
            throw error;
        }
        console.log('recipeList : ok');
        res.send(rows);
    });
});

router.post('/myList', (req, res) => {
    var sql = "SELECT r.rp_seq, rp_title, rp_contents, rp_img1, CAST(rp_crdate AS char(10)) AS rp_crdate, CAST(rp_uddate AS char(10)) rp_uddate, ct_img, rl_seq"
        + " FROM recipe r"
        + " LEFT JOIN user u ON r.us_seq = u.us_seq"
        + " LEFT JOIN category c ON r.ct_seq = c.ct_seq"
        + " LEFT JOIN recipe_like rl ON r.rp_seq = rl.rp_seq AND r.us_seq = rl.us_seq"
        + " WHERE rp_yn = 'Y' AND r.us_seq = " + req.body.us_seq
        + " ORDER BY rp_uddate"
        + " LIMIT " + req.body.limit + " OFFSET " + req.body.offset;
    db.query(sql, (error, rows) => {
        if (error) {
            console.log('recipMyeList : no');
            throw error;
        }
        console.log('recipMyeList : ok');
        res.send(rows);
    });
});

router.post('/one', (req, res) => {
    var sql = "SELECT r.*, us_nickname, ct_img, rl_seq"
        + " FROM recipe r"
        + " LEFT JOIN user u ON r.us_seq = u.us_seq"
        + " LEFT JOIN category c ON r.ct_seq = c.ct_seq"
        + " LEFT JOIN recipe_like rl ON r.rp_seq = rl.rp_seq AND r.us_seq = rl.us_seq"
        + " WHERE r.rp_seq = " + req.body.rp_seq;
    db.query(sql, (error, rows) => {
        if (error) {
            console.log('recipeOne : no');
            throw error;
        }
        console.log('recipeOne : ok');
        res.send(rows);
    });
});

router.post('/ingredientList', (req, res) => {
    var sql = "SELECT ri.* FROM recipe_ingredient ri"
        + " WHERE rp_seq = " + req.body.rp_seq;
    db.query(sql, (error, rows) => {
        if (error) {
            console.log('ingredientList : no');
            throw error;
        }
        console.log('ingredientList : ok');
        res.send(rows);
    });
});

router.post('/orderList', (req, res) => {
    var sql = "SELECT ro.* FROM recipe_order ro"
        + " WHERE rp_seq = " + req.body.rp_seq
        + " ORDER BY ro_order";
    db.query(sql, (error, rows) => {
        if (error) {
            console.log('orderList : no');
            throw error;
        }
        console.log('orderList : ok');
        res.send(rows);
    });
});

module.exports = router