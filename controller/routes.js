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
    res.render('race-list', {
        title: "Somnium: Races", races: [
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
            "Halfing",
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
            "Warforced",
            "Werewolf",
            "Yuan-ti",
        ]
    });
})

router.get('/subclasses', function (req, res) {
    res.render('subclass-list', {
        title: "Somnium: Subclasses", classes: [
            {
                name: "Barbarian",
                subclasses: [{ name: "Path of Anti Magic", link: "subclasses/path-of-anti-magic" }]
            },
            {
                name: "Bard",
                subclasses: [{ name: "College of Symphony", link: "subclasses/college-of-symphony" }]
            },
            {
                name: "Cleric",
                subclasses: [{ name: "Emotion Domain", link: "subclasses/emotion-domain" }]
            },
            {
                name: "Fighter",
                subclasses: [{ name: "Starglade Blood Battle Style", link: "subclasses/starglade-blood-battle-style" }, { name: "Shapeless Style", link: "subclasses/shapeless-style" }]
            },
            {
                name: "Monk",
                subclasses: [{ name: "Way of the Silver Wing", link: "subclasses/way-of-the-destruction-style" }, { name: "Way of the Destruction Style", link: "subclasses/way-of-the-silver-wing" }]
            },
            {
                name: "Paladin",
                subclasses: [{ name: "Oath of The Void", link: "subclasses/oath-of-the-void" }]
            },
            {
                name: "Rouge",
                subclasses: [{ name: "Pirate", link: "subclasses/pirate" }]
            },
            {
                name: "Sorcerer",
                subclasses: [{ name: "Demonic Bloodline", link: "subclasses/demonic-bloodline" }]
            },
            {
                name: "Wizard",
                subclasses: [{ name: "School of Chorosurgy", link: "subclasses/" }]
            }
        ]
    });
})

module.exports = router;