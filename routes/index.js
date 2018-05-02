const express = require('express');
const router = express.Router();
const Restaurant = require("../models/Restaurant")

router.get("/detail/:id", (req, res) => {
    res.render("detail", req.params);
});

router.get("/new", (req, res) => {
    res.render("new");
});

/* GET home page */
router.get('/', (req, res, next) => {
    Restaurant.find()
        .limit(10)
        .then(restaurants => {
            res.render('index', { restaurants })
        })
        .catch(e => next(e));
});

module.exports = router;