const express = require("express");
const router = express.Router();
const { request, response } = require('express');

//layout: false or express will start looking for layout with main.handlebars by default
router.get('/', function (req, res) {
    res.render('index', { title: "Home Page of Somnium" });
})

router.get('/origins', function (req, res) {
    res.render('origin-list', { title: "Somnium: Origins" });
})

router.get('/races', function (req, res) {
    res.render('race-list', { title: "Somnium: Races" });
})

router.get('/subclasses', function (req, res) {
    res.render('subclass-list', { title: "Somnium: Subclasses" });
})

module.exports = router;