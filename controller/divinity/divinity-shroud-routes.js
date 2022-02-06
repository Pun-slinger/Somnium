const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/Cutia', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Cutia",
        pantheon: "Shroud Pantheon",
        name: "Cutia",
        overview: "The Void holds many mysteries. Some say that only the most terrifying undead roam within this plane of darkness while others believe that there is nothing but emptiness and silence. There is one fact for certain, the being guarding this domain does not take kindly to uninvited visitors in her realm. She holds command over all undead but she also watches over the wounded and the diseased. Those that have been afflicted with a horrible wound or incurable disease and are on the last leg of their life will tend to look towards the path of anti life. Cutia sees pity in these individuals and will offer what she can if they choose to serve under her as a servant of the Void.",
        domains: [
            "Death",
            "Twilight",
            "Arcana"
        ],
        symbol: "Cutia's holy symbol is a bloodied dagger",
        boons: "+1 Constitution",
        lip: "Skill proficiency - Medicine",
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

router.get('/Ezreus', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Ezreus",
        pantheon: "Shroud Pantheon",
        name: "Ezreus",
        overview: "Some would think it is beyond ironic that the Lord of Hell is also the god of truth. To Ezreus, the truth is not simply just not lying but also the possibility of omitting details within said truth. Let's not get confused here, the truth isn't just sunshine and happiness because like everything else in life, there are 2 sides to this coin. Whether or not you can handle the dark truth, would you like to find out?",
        domains: [
            "Knowledge",
            "Trickery",
            "War"
        ],
        symbol: "Ezreus's holy symbol is a phantasmal crown",
        boons: "+1 Charisma",
        lip: "Skill proficiency - Perception",
        cleric_aligns: [
            "Lawful Evil",
            "Lawful Neutral",
            "Lawful Good",
        ],
        alignment: "Lawful Evil",
        titles: [
            "The Dark Truth",
            "The Fool",
            "The Link Between",
            "The Lord of Hell"
        ],
        imagelink: "/img/arts/divinity/shroud/Ezreus.png"
    });
})

router.get('/Omen', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Omen",
        pantheon: "Shroud Pantheon",
        name: "Omen",
        overview: "In the light there are dreams, in the dark there are nightmares. Omen is the counterpart to Quieza and his goal is to severe the threads of dreams and to spread nightmare upon the mortal realm. These nightmares bring with them suffering, fear and despair but they are also visions of future or pieces of wisdom granted by the Lord of Nightmares himself.",
        domains: [
            "Knowledge",
            "Death",
            "Twilight"
        ],
        symbol: "Omen's holy symbol is a pair of black scissors with shadows leaking out",
        boons: "+1 Wisdom",
        lip: "Skill proficiency - Intimidation",
        cleric_aligns: [
            "Lawful Evil",
            "Lawful Neutral",
            "Lawful Good",
        ],
        alignment: "Lawful Evil",
        titles: [
            "Father Fear",
            "Lord of Nightmares",
            "The Severed Thread",
        ],
        imagelink: "/img/arts/divinity/shroud/Omen.jpg"
    });
})

router.get('/Vora', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Vora",
        pantheon: "Shroud Pantheon",
        name: "Vora",
        overview: "One would never thought the manifestation of anarchy would be a beautiful maiden but Vora was not always the way she is now. Vora was once a ruthless goddess, hungry for conflict that would bring ruin upon the world. Things changed when Absolute came to stop her from causing even more damage to the lands and it was at that point that Vora was entranced by Absolute himself and his powers. Fueled by her love, Vora's mission now is to be the guardian of her domain but deep down, one day she will tipped the black and white scale of balance and have Absolute all to herself.",
        domains: [
            "Arcana",
            "Trickery",
            "War"
        ],
        symbol: "Vora's holy symbol is a witch hat with a white brim",
        boons: "+1 Charisma",
        lip: "Skill proficiency - Arcana",
        cleric_aligns: [
            "Chaotic Evil",
            "Chaotic Neutral",
            "Chaotic Good",
        ],
        alignment: "Chaotic Evil",
        titles: [
            "The Voice of Ruin",
            "The Witch Queen",
        ],
        imagelink: "/img/arts/divinity/shroud/Vora.png"
    });
})

router.get('/Wozotz', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Wozotz",
        pantheon: "Shroud Pantheon",
        name: "Wozotz",
        overview: "When cornered, one would walk down a darker path in order to gain the upper hand. Wozotz takes advantage of this, always watching, listening and whispering. Within madness lies knowledge, within madness lies guidance from the Mad One.",
        domains: [
            "Knowledge",
            "Trickery",
            "Arcana"
        ],
        symbol: "Wozotz's holy symbol is a eyeless face smiling",
        boons: "+1 Intelligence",
        lip: "Skill proficiency - Insight",
        cleric_aligns: [
            "Chaotic Evil",
            "Chaotic Neutral",
            "Neutral",
            "Lawful Neutral"
        ],
        alignment: "Chaotic Evil",
        titles: [
            "The Dark Side",
            "The Mad One",
            "The Questionable"
        ],
        imagelink: "/img/arts/divinity/shroud/Wozotz.jpg"
    });
})

module.exports = router;