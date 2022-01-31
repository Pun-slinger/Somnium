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

router.get('/races/aarakocra', function (req, res) {
    res.render('race', {
        title: "Somnium: Aarakocra",
        main_title: "Races",
        sub_title: "Aarakocra",
        ab_score: "Dex +2; Wis +1",
        size_desc: "Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds.",
        size: "Medium",
        speed: "25 ft., fly 50 ft.",
        age: "Aarakocra reach maturity by age 3. Compared to humans, aarakocra don't usually live longer than 30 years.",
        alignment: "Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.",
        language: "You can speak, read, and write Common, Aarakocra, and Auran.",
        additional_ab: [
            { ab_name: "Flight", ab_desc: "You have a flying speed of 50 feet. To use this speed, you can't be wearing medium or heavy armor." },
            { ab_name: "Talons", ab_desc: "Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike." }
        ]
    });
})

router.get('/races/werewolf', function (req, res) {
    res.render('race', {
        title: "Somnium: Werewolf",
        main_title: "Races",
        sub_title: "Werewolf",
        ab_score: "Con +2, Str +1",
        size_desc: "Your normal form is around 5-6 ft tall while your werewolf form average out at around 6-7 feet tall.",
        size: "Medium for both forms",
        speed: "Your base walking speed is 30 feet. Your base speed increases by 5 feet when you transform.",
        age: "Werewolves tend to have the same life expentancy as humans. They tend to live around 80 years.",
        alignment: "Werewolves will tend to lean toward chaotic and neutral.",
        language: "You can speak, read, and write Common, Sylvan.",
        additional_ab: [
            {
                ab_name: "Shapechanger",
                ab_desc: "As an action, you can transform into your werewolf form. You revert to your original form when you take an action to revert back, or if you are reduced to 0 hit points. While you are transformed, you have access to:",
                sub_ab: [
                    {
                        ab_name: "Wicked Resistance",
                        ab_desc: "When you take damage and you are in your werewolf form, you can, as a reaction, gain resistance to bludgeoning, piercing and slashing damage from nonmagical attacks not made with silvered weapons for 1 turn. You must finish a short or long rest before using this trait again."
                    },
                    {
                        ab_name: "Darkvision",
                        ab_desc: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray. You only have darkvision in hybrid and wolf form, and is seen in shades of red, not grey."
                    },
                    {
                        ab_name: "Clawed",
                        ab_desc: "You have sharp claws which you can use to make unarmed strikes. On a hit, they deal 1d6 slashing damage + your Strength modifier."
                    },
                    {
                        ab_name: "Silver Wound",
                        ab_desc: "You are vulnerable to attacks made from silver weapons."
                    }
                ]
            },
            {
                ab_name: "Perks of the Predator",
                ab_desc: "You gain proficiency in the Perception and Survival."
            }
        ]
    });
})

router.get('/subclasses', function (req, res) {
    res.render('subclass-list', { title: "Somnium: Subclasses" });
})

module.exports = router;