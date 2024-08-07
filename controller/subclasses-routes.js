const express = require("express");
const router = express.Router();
const { request, response } = require('express');

//layout: false or express will start looking for layout with main.handlebars by default
router.get('/path-of-anti-magic', function (req, res) {
    res.render('subclasses/Barbarian/path-of-anti-magic', { title: "Somnium: Path of Anti Magic" });
})

router.get('/college-of-symphony', function (req, res) {
    res.render('subclasses/Bard/college-of-symphony', { title: "Somnium: College of Symphony" });
})

router.get('/emotion-domain', function (req, res) {
    res.render('subclasses/Cleric/emotion-domain', { title: "Somnium: Emotion Domain" });
})

router.get('/shapeless-style', function (req, res) {
    res.render('subclasses/Fighter/shapeless-style', { title: "Somnium: Shapeless Style" });
})

router.get('/starglade-blood-battle-style', function (req, res) {
    res.render('subclasses/Fighter/starglade-blood-battle-style', { title: "Somnium: Starglade Blood Battle Style" });
})

router.get('/way-of-the-destruction-style', function (req, res) {
    res.render('subclasses/Monk/way-of-the-destruction-style', { title: "Somnium: Way of the Destruction Style" });
})

router.get('/way-of-the-silver-wing', function (req, res) {
    res.render('subclasses/Monk/way-of-the-silver-wing', { title: "Somnium: Way of the Silver Wing" });
})

router.get('/way-of-the-tactician', function (req, res) {
    res.render('subclasses/Monk/way-of-the-tactician', { title: "Somnium: Way of the Tactician" });
})

router.get('/oath-of-the-void', function (req, res) {
    res.render('subclasses/Paladin/oath-of-the-void', { title: "Somnium: Oath of The Void" });
})

router.get('/oath-of-sacrifice', function (req, res) {
    res.render('subclasses/Paladin/oath-of-sacrifice', { title: "Somnium: Oath of Sacrifice" });
})

router.get('/pirate', function (req, res) {
    res.render('subclasses/Rogue/pirate', { title: "Somnium: Pirate" });
})

router.get('/demonic-bloodline', function (req, res) {
    res.render('subclasses/Sorcerer/demonic-bloodline', { title: "Somnium: Demonic Bloodline" });
})

router.get('/school-of-chorosurgy', function (req, res) {
    res.render('subclasses/Wizard/school-of-chorosurgy', { title: "Somnium: School of Chorosurgy" });
})

router.get('/planetary-observer', function (req, res) {
    res.render('subclasses/Ranger/planetary-observer', { title: "Somnium: Planetary Observer" });
})

router.get('/marionettist', function (req, res) {
    res.render('subclasses/Warlock/marionettist', { title: "Somnium: Marionettist" });
})

router.get('/circle-of-decay', function (req, res) {
    res.render('subclasses/Druid/circle-of-decay', { title: "Somnium: Circle of Decay" });
})

router.get('/serpent-whisperer', function (req, res) {
    res.render('subclasses/Ranger/serpent-whisperer', { title: "Somnium: Serpent Whisperer" });
})

module.exports = router;