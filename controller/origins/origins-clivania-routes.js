const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/beast-hunter', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Beast Hunter",
        main_title: "Clivania",
        sub_title: "Beast Hunter",
        overview: "Living within the mountain range are a wide variety of monsters and there are those that took to the skies with their wyvern companion and hunt these beasts. Some do it for the materials, others for the money and there are those just doing it for the thrill.",
        boons: [
            { boon_name: "Where Do You Think You're Going?", boon_desc: "You have advantage on attacks of opportunity against Beast and Monstrosity type creatures." },
            { boon_name: "Let Nature Guide You", boon_desc: "You gain proficiency in Nature." }
        ]
    });
})

router.get('/draconic-legacy', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Draconic Legacy",
        main_title: "Clivania",
        sub_title: "Draconic Legacy",
        overview: "Given the Dragon Civil War, Ayrveog and the remaining good dragons do not take lightly to those that wishes to attempt and give rise to the Mad Dragons once again. Specific individuals are chosen to hunt and shut down any attempts to free that madness that once plague the world.",
        boons: [
            { boon_name: "Favored Enemy", boon_desc: "You deal an extra 3 damage to Draconic enemies." },
            { boon_name: "Bloodline Resistance", boon_desc: "You gain resistant to 1 of the following damage type: Acid, Cold, Fire, Lightning, Poison, or Thunder." }
        ]
    });
})

router.get('/forge-in-flames', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Forge in Flames",
        main_title: "Clivania",
        sub_title: "Forge in Flames",
        overview: "You are living in the land of the dwarves, seeing a forge is not rare. The sound of hammering, the smell of a fresh forge, the silence of absolute concentration and the chatting of customers, they all are familiar to you. Weapons and armors are part of your daily life and you will be damned to see them being misused or not utilized to their fullest potential.",
        boons: [
            { boon_name: "My Armor is My Skin", boon_desc: "Your AC increases by 1." },
            { boon_name: "Travel Kit", boon_desc: "You gain proficiency in Smith’s Tools." }
        ]
    });
})

router.get('/lowlander', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Lowlander",
        main_title: "Clivania",
        sub_title: "Lowlander",
        overview: "You settled down near the bottom of the mountain range, among the plains. Life is calmer but by no means, boring. Your body is honed to deal with threats hidden among the trees and beneath the ground, just because there isn't things assaulting you every second doesn't mean you can slack off.",
        boons: [
            { boon_name: "Peaceful Life", boon_desc: "You gain +5 to your maximum HP." },
            { boon_name: "Take in The Scenery", boon_desc: "You gain proficiency in Nature." }
        ]
    });
})

router.get('/mountainbound', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Mountainbound",
        main_title: "Clivania",
        sub_title: "Mountainbound",
        overview: "The plains of Clivania can be noisy and distracting. On the other hand, life among the mountain peaks is dangerous: the monsters are deadly, the air is incredibly thin and of course, falling would not be ideal and yet peaceful for those willing to put on their climbing gear.",
        boons: [
            { boon_name: "One Too Many", boon_desc: "Falling damage taken by you between 10 and 60 feet are halved." },
            { boon_name: "All In The Grip", boon_desc: "You gain proficiency in Athletics." }
        ]
    });
})

router.get('/scholar-in-training', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Scholar in Training",
        main_title: "Clivania",
        sub_title: "Scholar in Training",
        overview: "The Silvered Institution comprises of members who's only hungry for knowledge. To join them is to follow Ayrveog's teachings to pursue knowledge hidden from the plain eye and share them with others.",
        boons: [
            { boon_name: "Knowledge is Power", boon_desc: "You have advantage on your first knowledge check in combat." },
            { boon_name: "Arcane Attuned", boon_desc: "You gain proficiency in Arcana." }
        ]
    });
})

router.get('/wyvern-trainer', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Wyvern Trainer",
        main_title: "Clivania",
        sub_title: "Wyvern Trainer",
        overview: "A wyvern in Clivania is a prized possession and taking care of them is no simple task. Wyverns are ferocious and the most difficult task is training a wyvern for combat and hunting so, are you ready?",
        boons: [
            { boon_name: "The Bestfriend An Adventurer Can Have", boon_desc: "You gain a Wyvern companion that is combat ready." },
            { boon_name: "Bite Marks", boon_desc: "You are resistant to Poison damage." },
            { boon_name: "Calm Down Buddy", boon_desc: "You gain proficiency in Animal Handling." }
        ]
    });
})

module.exports = router;