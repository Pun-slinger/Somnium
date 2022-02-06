const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/Cutia', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Cutia",
        pantheon: " Shroud Pantheon",
        name: "Cutia",
        overview: "The Void holds many mysteries. Some say that only the most terrifying undead roam within this plane of darkness while others believe that there is nothing but emptiness and silence. There is one fact for certain, the being guarding this domain does not take kindly to uninvited visitors in her realm. She holds command over all undead but she also watches over the wounded and the diseased. Those that have been afflicted with a horrible wound or incurable disease and are on the last leg of their life will tend to look towards the path of anti life. Cutia sees pity in these individuals and will offer what she can if they choose to serve under her as a servant of the Void.",
        domains: [
            "Death",
            "Twilight",
            "Arcana"
        ],
        symbol: "Cutia's holy symbol is a bloodied dagger",
        boons: "+1 Constitution",
        lip: " Skill proficiency - Medicine",
        cleric_aligns: [
            "Chaotic Evil",
            "Chaotic Neutral",
            "Chaotic Good",
            "Neutral Evil",
            "Neutral Good",
            "Neutral"
        ],
        alignment: "Neutral Evil",
        titles: [
            "Queen of the Undeath",
            "The Nothingness",
            "Guardian of the Black"
        ],
        imagelink: "/img/arts/divinity/shroud/Cutia.jpg"
    });
})

module.exports = router;