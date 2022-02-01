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
    res.render('subclass-list', {
        title: "Somnium: Subclasses", classes: [
            {
                name: "Barbarian",
                subclasses: [{ name: "Path of Anti Magic", link: "#" }]
            },
            {
                name: "Bard",
                subclasses: [{ name: "College of Symphony", link: "#" }]
            },
            {
                name: "Cleric",
                subclasses: [{ name: "Emotion Domain", link: "#" }]
            },
            {
                name: "Fighter",
                subclasses: [{ name: "Starglade Blood Battle Style", link: "#" }, { name: "Shapeless Style", link: "#" }]
            },
            {
                name: "Monk",
                subclasses: [{ name: "Way of the Silver Wing", link: "#" }, { name: "Way of the Destruction Style", link: "#" }]
            },
            {
                name: "Paladin",
                subclasses: [{ name: "Oath of The Void", link: "#" }]
            },
            {
                name: "Rouge",
                subclasses: [{ name: "Pirate", link: "#" }]
            },
            {
                name: "Sorcerer",
                subclasses: [{ name: "Demonic Bloodline", link: "#" }]
            },
            {
                name: "Wizard",
                subclasses: [{ name: "School of Chorosurgy", link: "#" }]
            }
        ]
    });
})

module.exports = router;