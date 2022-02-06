const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/Arsyn', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Arsyn",
        pantheon: "Viridi Pantheon",
        name: "Arsyn",
        overview: "Governing the four seasons is no easy task. Arsyn is constantly at work to maintain the balance of nature. She is a very serious god with only one main focus being her duties. Often she is called out by other gods for being too uptight but who has time for such words when a slight mistake can lead to the fundamental aspects of nature falling apart.",
        domains: [
            "Nature",
            "Order",
            "Life"
        ],
        symbol: "Arsyn's holy symbol is a cloak with the color of the four seasons",
        boons: "+1 Constitution",
        lip: "Skill proficiency - Medicine",
        cleric_aligns: [
            "Neutral",
            "Lawful Neutral",
            "Chaotic Neutral",
            "Neutral Good",
            "Lawful Good",
            "Chaotic Good"
        ],
        alignment: "Chaotic Neutral",
        titles: [
            "Lady of Four",
        ],
        imagelink: "/img/arts/divinity/viridi/Arsyn.png"
    });
})

router.get('/Durages', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Durages",
        pantheon: "Viridi Pantheon",
        name: "Durages",
        overview: "Durages is the god of weather and one of the aspect of nature. Durages is a god of few words and instead let his actions speak for themselves. Despite this, pleasing him is not a difficult task. Durages holds his fellow nature deities at a high regard and so, wishes his followers to also pay their respect to his colleagues.",
        domains: [
            "Nature",
            "Peace",
            "Tempest"
        ],
        symbol: "Durages's holy symbol is a pair of twin white greatswords",
        boons: "+1 Constitution",
        lip: "Skill proficiency - Acrobatics",
        cleric_aligns: [
            "Any"
        ],
        alignment: "Neutral",
        titles: [
            "Tempest",
            "The Skylord"
        ],
        imagelink: "/img/arts/divinity/viridi/Durages.jpg"
    });
})

router.get('/Iana', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Iana",
        pantheon: "Viridi Pantheon",
        name: "Iana",
        overview: "Iana serves as the guardian of all vegetation. She watches over their life cycle and make sure that when they fall, life may be born anew. Her only priority is the well being of her children and she does not hold disdain towards humanity as Iana understands that they also play a part in the ecosystem. She is however, grateful towards those that chose to walk the path of the green and communicate to them via the leaves flowing in the wind.",
        domains: [
            "Nature",
            "Life",
            "Peace"
        ],
        symbol: "Iana's holy symbol is a green oak leaf",
        boons: "+1 Constitution",
        lip: "Skill proficiency - Nature",
        cleric_aligns: [
            "Any"
        ],
        alignment: "Neutral",
        titles: [
            "Greenmother",
            "The Caretaker"
        ],
        imagelink: "/img/arts/divinity/viridi/Iana.jpg"
    });
})

router.get('/Myst', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Myst",
        pantheon: "Viridi Pantheon",
        name: "Myst",
        overview: "The goddess of animals, a caring deity that is always observing the actions of human kind towards her children. Like Iana, Myst finds humanity to be untrustworthy but she does not hate them. The two goddesses work together to maintain balance and constantly evolve and adapt. Those that serve the Protector knows that she is closer than one might think, providing insight via the many animal forms she can take.",
        domains: [
            "Nature",
            "Trickery",
            "War"
        ],
        symbol: "Myst's holy symbol is a wooden eagle mask",
        boons: "+1 Dexterity",
        lip: "Skill proficiency - Animal Handling",
        cleric_aligns: [
            "Neutral",
            "Lawful Neutral",
            "Chaotic Neutral",
        ],
        alignment: "Neutral",
        titles: [
            "One but Many",
            "The Protector"
        ],
        imagelink: "/img/arts/divinity/viridi/Myst.jpg"
    });
})

module.exports = router;