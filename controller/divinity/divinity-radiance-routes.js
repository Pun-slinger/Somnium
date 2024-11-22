const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/Cylena', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Cylena",
        pantheon: "Radiance Pantheon",
        name: "Cylena",
        overview: "Broken free from being imprisoned by the Mad Prophet, Cylena fought back along with the other captives and in the end, they managed to heavily wound the Mad Prophet and escaped from his grasp. After the escape, Cylena was determined to find the maniac that had tortured her and put an end to his reign. It was this determination and drive that not long after, Cylena earned her spot among the other gods in the Radiance Pantheon. Despite ascending to a higher postion, Cylen remains down to earth with her goal remains the same till this day and that is to find where the Mad Prophet is hiding and bring him to justice.",
        domains: [
            "Forge",
            "Peace",
            "War"
        ],
        symbol: "Cylena's holy symbol is a white sword wrapped in chains",
        boons: "+1 Strength",
        lip: "Skill proficiency - Athletics",
        cleric_aligns: [
            "Neutral",
            "Lawful Neutral",
            "Chaotic Neutral",
            "Neutral Good",
            "Lawful Good",
            "Chaotic Good"
        ],
        alignment: "Chaotic Good",
        titles: [
            "No Longer Tethered",
            "Soar The Sky",
            "The Unbound"
        ],
        imagelink: "/img/arts/divinity/radiance/Cylena.jpg"
    });
})

router.get('/Quieza', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Quieza",
        pantheon: "Radiance Pantheon",
        name: "Quieza",
        overview: "Dreams are fragile yet they hold so much. Every dream is a source for self reflection, a vision of the future, a thread from the Web of Fate. Each action made is a ripple in the Web and Quieza provides prophecies based on that. These prophecies are not set in stone but they allow one to see a glimpse of what lies ahead.",
        domains: [
            "Knowledge",
            "Peace",
            "Life"
        ],
        symbol: "Quieza's holy symbol is a cracked white mirror in a web pattern",
        boons: "+1 Wisdom",
        lip: "Skill proficiency - Insight",
        cleric_aligns: [
            "Neutral",
            "Lawful Neutral",
            "Chaotic Neutral",
            "Neutral Good",
        ],
        alignment: "Neutral",
        titles: [
            "The Dream Weaver",
            "The Holder of Fate",
            "The Web"
        ],
        imagelink: "/img/arts/divinity/radiance/Quieza.jpg"
    });
})

router.get('/Tavlous', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Tavlous",
        pantheon: "Radiance Pantheon",
        name: "Tavlous",
        overview: "A white room, a being in a white suit sitting in the middle of it, quietly writing in his journal. That is the description of the Realm Beyond or the Spirit Realm, as it is more commonly known as. Those that have reached the end of their life end up in there, where they will have their souls judged by Tavlous and be allowed to pass on or be left lingering until their unfinished business is dealt with. Before he came around, souls whether they have unfinished business or not were forced to pass on but Tavlous is a kind god, he wants to give those souls a chance like his wife was.",
        domains: [
            "Death",
            "Peace",
            "Life"
        ],
        symbol: "Tavlous's holy symbol is a journal with a white dove on the cover",
        boons: "+1 Charisma",
        lip: "Skill proficiency - Any skill",
        cleric_aligns: [
            "Neutral",
            "Lawful Neutral",
            "Neutral Good",
            "Lawful Good",
        ],
        alignment: "Neutral Good",
        titles: [
            "The Man in White",
            "The Last Visage",
            "The White Dove"
        ],
        imagelink: "/img/arts/divinity/radiance/Tavlous.png"
    });
})

module.exports = router;