const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/Ataris', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Ataris",
        pantheon: "Grey Pantheon",
        name: "Ataris",
        overview: "Conversations, gold being exchanged, products being sold, all parts of the life of a merchant. Merchants all over Isox look to Ataris for his guidance as well as his blessing for a good day's trade. Ataris is a difficult god to understand, for he, like a coin, has 2 sides. He is fair but sometimes, you have to be mischievous to secure a deal.",
        domains: [
            "Order",
            "War",
            "Trickery"
        ],
        symbol: "Ataris's holy symbol is a gold coin an owl on both sides",
        boons: "+1 Intelligence",
        lip: "Skill proficiency - Persuasion",
        cleric_aligns: [
            "Any"
        ],
        alignment: "Neutral",
        titles: [
            "The Shopkeeper",
            "The Coin Lord",
        ],
        imagelink: "/img/arts/divinity/grey/Ataris.jpg"
    });
})

router.get('/Ayrveog', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Ayrveog",
        pantheon: "Grey Pantheon",
        name: "Ayrveog",
        overview: "One of the first dragons, Ayrveog. Unlike his companions, he seek knowledge. To him, knowledge is power and nothing is more terrifying than ignorance. The All Knowing is one of the few deities that is physically manifested on Isox and resides within a library hidden deep within the region of Clivania containing all the knowledge that he has collected over his lifetime.",
        domains: [
            "Knowledge",
            "Light",
            "Arcana"
        ],
        symbol: "Ayrveog's holy symbol is a book with dragon claws on the cover",
        boons: "+1 Intelligence",
        lip: "Skill proficiency - History",
        cleric_aligns: [
            "Neutral",
            "Neutral Good",
            "Lawful Neutral"
        ],
        alignment: "Neutral",
        titles: [
            "Dragon Father",
            "The Sage",
            "The All Knowing",
            "The Silver One"
        ],
        imagelink: "/img/arts/divinity/grey/Ayrveog.jpg"
    });
})

router.get('/Enn', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Enn",
        pantheon: "Grey Pantheon",
        name: "Enn",
        overview: "The ticking of the clock is constant, the flowing of the sands never stops. Time is a valuable resource and it waits for no one. Countless have asked for more time, even just a little but as much as they would plead, Enn silently observes and continue maintaining the flow of time. A common rumor is that Enn is a heartless goddess that has grown cold over however long she has been the keeper of time. The truth is far from these silly rumors as Enn is empathetic and understanding for them. She wept for them, feeling powerless every time she would witness time runs out for someone. Enn carries with her this burden as she continues watching the grains of sands fall.",
        domains: [
            "Life",
            "Death",
            "Order"
        ],
        symbol: "Enn's holy symbol is an hourglass with black and white sand",
        boons: "+1 Wisdom",
        lip: "Skill proficiency - Investigation",
        cleric_aligns: [
            "Neutral",
            "Neutral Good",
            "Lawful Neutral",
            "Lawful Good"
        ],
        alignment: "Lawful Neutral",
        titles: [
            "Lady Time",
            "Time Keeper",
            "Mistress of Flowing Sands",
        ],
        imagelink: "/img/arts/divinity/grey/Enn.jpg"
    });
})

router.get('/Oryx', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Oryx",
        pantheon: "Grey Pantheon",
        name: "Oryx",
        overview: "The god of thieves only has one goal on his mind, take from the wealthy and distribute to the poor. A calculating and careful god, always plotting behind the veil. His tenets for his followers are simple: work towards unraveling the inequality in wealth and always show kindness to the poor.",
        domains: [
            "Life",
            "Trickery",
            "Grave"
        ],
        symbol: "Oryx's holy symbol is a gold coin stabbed by a dagger",
        boons: "+1 Dexterity",
        lip: "Skill proficiency - Sleight of Hand",
        cleric_aligns: [
            "Neutral",
            "Chaotic Neutral",
            "Chaotic Good",
            "Chaotic Evil"
        ],
        alignment: "Chaotic Neutral",
        titles: [
            "Fortune Thief",
            "The Hand from the Shadows",
        ],
        imagelink: "/img/arts/divinity/grey/Oryx.jpg"
    });
})

router.get('/Vati', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Vati",
        pantheon: "Grey Pantheon",
        name: "Vati",
        overview: "On the continent of Isox, music is a force of nature. It is one of the building blocks of society. Vati was the first being that wielded music and her music captivated all those that was fortunate enough to hear it. She was always a restless one, constantly wanting to travel the world. Her motivation? Part of it is curiosity about the world and part of it is her desire to spread the joy of music to as many as possible.",
        domains: [
            "Knowledge",
            "Peace",
            "Arcana"
        ],
        symbol: "Vati's holy symbol is a music note hair pin",
        boons: "+1 Charisma",
        lip: "Skill proficiency - Performance",
        cleric_aligns: [
            "Neutral",
            "Chaotic Neutral",
        ],
        alignment: "Chaotic Neutral",
        titles: [
            "The Conductor",
            "Maiden of Harmony",
        ],
        imagelink: "/img/arts/divinity/grey/Vati.jpg"
    });
})

module.exports = router;