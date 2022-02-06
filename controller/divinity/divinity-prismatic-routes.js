const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/Bylmos', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Bylmos",
        pantheon: "Prismatic Pantheon",
        name: "Bylmos",
        overview: "The fire within you burns. It fuels your rage. Release it! Let it take over! Give in to the burning rage and crush those standing in your way!",
        domains: [
            "Emotion"
        ],
        symbol: "Bylmos's holy symbol is a red star",
        boons: "+1 Strength",
        lip: "Skill proficiency - Survival",
        cleric_aligns: [
            "Any"
        ],
        alignment: "Chaotic Evil",
        titles: [
            "The Red"
        ],
        imagelink: "/img/arts/divinity/prismatic/Bylmos.jpg"
    });
})

router.get('/Orthoros', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Orthoros",
        pantheon: "Prismatic Pantheon",
        name: "Orthoros",
        overview: "Happiness can come in many forms, from the happy tears upon a long awaited reunion to the scream of joy when victory is achieved. Nothing is more empowering than the smiles brought upon by joy.",
        domains: [
            "Emotion"
        ],
        symbol: "Orthoros's holy symbol is a blue star",
        boons: "+1 Wisdom",
        lip: "Skill proficiency - Nature",
        cleric_aligns: [
            "Any"
        ],
        alignment: "Chaotic Good",
        titles: [
            "The Blue"
        ],
        imagelink: "/img/arts/divinity/prismatic/Orthoros.jpg"
    });
})

router.get('/Qudall', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Qudall",
        pantheon: "Prismatic Pantheon",
        name: "Qudall",
        overview: "At first, we fear what we do not understand, but in fear we gain wisdom. Are you one who instills fear or do you let cowardice take over?",
        domains: [
            "Emotion"
        ],
        symbol: "Qudall's holy symbol is a green star",
        boons: "+1 Wisdom",
        lip: "Skill proficiency - Intimidation",
        cleric_aligns: [
            "Any"
        ],
        alignment: "Lawful Evil",
        titles: [
            "The Green"
        ],
        imagelink: "/img/arts/divinity/prismatic/Qudall.jpg"
    });
})

router.get('/Silanous', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Silanous",
        pantheon: "Prismatic Pantheon",
        name: "Silanous",
        overview: "Love is a fickle thing but it always finds a way, even in the most dire of situations. It is a commitment but it is worth it for love sustains you.",
        domains: [
            "Emotion"
        ],
        symbol: "Silanous's holy symbol is a pink star",
        boons: "+1 Charisma",
        lip: "Skill proficiency - Persuasion",
        cleric_aligns: [
            "Any"
        ],
        alignment: "Neutral Good",
        titles: [
            "The Pink"
        ],
        imagelink: "/img/arts/divinity/prismatic/Silanous.jpg"
    });
})

router.get('/Vyatrix', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Vyatrix",
        pantheon: "Prismatic Pantheon",
        name: "Vyatrix",
        overview: "Can you bear the pain? Can you bear the burden? Can you bear to remember those that have fallen? We shed tears to keep the memories of those gone from this world alive.",
        domains: [
            "Emotion"
        ],
        symbol: "Vyatrix's holy symbol is a yellow star",
        boons: "+1 Charisma",
        lip: "Skill proficiency - Arcana",
        cleric_aligns: [
            "Any"
        ],
        alignment: "Lawful Neutral",
        titles: [
            "The Yellow"
        ],
        imagelink: "/img/arts/divinity/prismatic/Vyatrix.jpg"
    });
})

router.get('/Ylria', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Ylria",
        pantheon: "Prismatic Pantheon",
        name: "Ylria",
        overview: "Why does one do good deeds? Is it because they are good or is it to fuel their own desires? Such is the nature of greed, everyone has it even if you are the mightiest hero.",
        domains: [
            "Emotion"
        ],
        symbol: "Ylria's holy symbol is a purple star",
        boons: "+1 Intelligence",
        lip: "Skill proficiency - Deception",
        cleric_aligns: [
            "Any"
        ],
        alignment: "Chaotic Evil",
        titles: [
            "The Purple"
        ],
        imagelink: "/img/arts/divinity/prismatic/Ylria.jpg"
    });
})

router.get('/Zaiarg', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Zaiarg",
        pantheon: "Prismatic Pantheon",
        name: "Zaiarg",
        overview: "The greatest gift humanity received was hope, for in the face of despair, hope isn't so easily lost.",
        domains: [
            "Emotion"
        ],
        symbol: "Zaiarg's holy symbol is an orange star",
        boons: "+1 Any attribute",
        lip: "Skill proficiency - Medicine",
        cleric_aligns: [
            "Any"
        ],
        alignment: "Neutral",
        titles: [
            "The Orange"
        ],
        imagelink: "/img/arts/divinity/prismatic/Zaiarg.jpg"
    });
})

module.exports = router;