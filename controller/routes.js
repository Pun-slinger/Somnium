const express = require("express");
const router = express.Router();
const { request, response } = require('express');

const spells_info = require("../static/text/spells-info.js");
const spells_schools = require("../static/text/spells-school.js");
const spells = require("../static/text/spells-list.js");

const classes = require("../static/text/class.js");
const casting_time = require("../static/text/casting-time.js");

//layout: false or express will start looking for layout with main.handlebars by default
router.get('/', function (req, res) {
    res.render('index', { title: "Home Page of Somnium" });
})

router.get('/origins', function (req, res) {
    res.render('origin-list', {
        title: "Somnium: Origins",
        regions: [
            {
                name: "Aprana",
                link: "/Aprana",
                icon: "<i class=\"fas fa-coins\"></i>"
            },
            {
                name: "Clivania",
                link: "/Clivania",
                icon: "<i class=\"fas fa-mountain\"></i>"
            },
            {
                name: "Dreavan",
                link: "/Dreavan",
                icon: "<i class=\"fas fa-book-dead\"></i>"
            },
            {
                name: "Ewhil",
                link: "/Ewhil",
                icon: "<i class=\"fas fa-skull-crossbones\"></i>"
            },
            {
                name: "Fruaqua",
                link: "/Fruaqua",
                icon: "<i class=\"fas fa-hat-wizard\"></i>"
            },
            {
                name: "Ofrye",
                link: "/Ofrye",
                icon: "<i class=\"fas fa-tree\"></i>"
            },
            {
                name: "Pandora",
                link: "/Pandora",
                icon: "<i class=\"fas fa-biohazard\"></i>"
            },
            {
                name: "The Boundless Ocean",
                link: "/The-Boundless-Ocean",
                icon: "<i class=\"fas fa-anchor\"></i>"
            },
        ]
    });
})

router.get('/races', function (req, res) {
    res.render('race-list', {
        title: "Somnium: Races",
        races: [
            "Aarakocra",
            "Aasimar",
            "Centaur",
            "Changeling",
            "Dhampir",
            "Dragonborn",
            "Dwarf",
            "Elf",
            "Firbolg",
            "Genasi",
            "Gnome",
            "Goblin",
            "Goliath",
            "Half-elf",
            "Half-orc",
            "Halfling",
            "Human",
            "Kenku",
            "Kitsune",
            "Kobold",
            "Lizardfolk",
            "Minotaur",
            "Orc",
            "Satyr",
            "Sprite",
            "Tabaxi",
            "Tiefling",
            "Tortle",
            "Triton",
            "Warforged",
            "Werewolf",
            "Yuan-ti",
        ]
    });
})

router.get('/subclasses', function (req, res) {
    res.render('subclass-list', {
        title: "Somnium: Subclasses", classes: classes.all_classes_and_sub
    });
})

router.get('/spells', function (req, res) {
    res.render('spells', {
        title: "Somnium: Spells", spells: spells.all_spells
    });
})

router.get('/homebrew-rules', function (req, res) {
    res.render('homebrew-rules', { title: "Homebrew Rules" });
})

module.exports = router;