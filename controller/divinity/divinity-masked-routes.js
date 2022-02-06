const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/Absolute', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Absolute",
        pantheon: "Masked Pantheon",
        name: "Absolute",
        overview: "Absolute is the embodiment of balance, the equal distribution of all things. He does not normally intervene unless it is an absolutely needed situation and balance might be threatened. One of the few cases where he used his powers was when he stopped the war between Nova and Vyon and united the Masked Pantheon. While not a lot of information is known about Absolute, he silently observes the mortal plane and judges their actions.",
        domains: [
            "Life",
            "Order",
            "Balance"
        ],
        symbol: "Absolute's holy symbol is a black and white balanced scale",
        boons: "+1 Intelligence",
        lip: "Skill proficiency - Any skill",
        cleric_aligns: [
            "Neutral",
            "Chaotic Neutral",
            "Lawful Neutral",
        ],
        alignment: "Neutral",
        titles: [
            "The Judge",
            "Equality",
            "The Black and White Coin"
        ],
        imagelink: "/img/arts/divinity/masked/Absolute.png"
    });
})

router.get('/Illumi', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Illumi",
        pantheon: "Masked Pantheon",
        name: "Illumi",
        overview: "Redemption is a difficult process. Learning to redeem yourself for those you hold close and your own sake is a journey that not everyone can complete. Some lack the conviction, others descend down an even darker path than before trying to reach the end. Illumi serves as the guiding light, ever watchful of those wishing to be forgiven. The Lord of Redemption along with his brother Koga, observe the mortals under their light and darkness.",
        domains: [
            "Knowledge",
            "Light",
            "Life"
        ],
        symbol: "Illumi's holy symbol is a white star",
        boons: "+1 Wisdom",
        lip: "Skill proficiency - Insight",
        cleric_aligns: [
            "Any"
        ],
        alignment: "Lawful Neutral",
        titles: [
            "The Redeemer",
            "The Guiding Light",
        ],
        imagelink: "/img/arts/divinity/masked/Illumi.png"
    });
})

router.get('/Koga', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Koga",
        pantheon: "Masked Pantheon",
        name: "Koga",
        overview: "Darkness is feared for hiding the true nature of things but Koga grants wisdom hidden within the shadows to those that possess the courage. He also serves as the guide for those who have fallen, especially during battle, into the afterlife, ensuring that death is nothing to be feared.",
        domains: [
            "Grave",
            "Death",
            "Twilight"
        ],
        symbol: "Koga's holy symbol is a mask of shadow",
        boons: "+1 Wisdom",
        lip: "Skill proficiency - Stealth",
        cleric_aligns: [
            "Neutral",
            "Neutral Good",
            "Lawful Neutral",
        ],
        alignment: "Lawful Neutral",
        titles: [
            "The First Shadow",
            "The Guide",
            "Lord of Darkness"
        ],
        imagelink: "/img/arts/divinity/masked/Koga.png"
    });
})

router.get('/Nova', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Nova",
        pantheon: "Masked Pantheon",
        name: "Nova",
        overview: "Nova is the god of fire, battle and blacksmith. Nova grants his blessings to those that wield his fire in the forge and those that wield the weapons created into battle.",
        domains: [
            "Tempest",
            "Forge",
            "War"
        ],
        symbol: "Nova's holy symbol is a hand holding fire",
        boons: "+1 Strength",
        lip: "Skill proficiency - Athletics",
        cleric_aligns: [
            "Any"
        ],
        alignment: "Neutral",
        titles: [
            "The Fire Keeper",
            "Forge Father",
            "The Unrelenting Battle"
        ],
        imagelink: "/img/arts/divinity/masked/Nova.png"
    });
})

router.get('/Vyon', function (req, res) {
    res.render('divinity', {
        title: "Somnium: Vyon",
        pantheon: "Masked Pantheon",
        name: "Vyon",
        overview: "The sea is an unpredictable force. It can bring a sailor a calm journey with beautiful weather or bring down the heaviest of storms with the largest of waves. Vyon embodies this chaotic force. He brings one good fortune in their matter but do not let that fool you, Vyon's anger will bring down the worst disasters known to history.",
        domains: [
            "Tempest",
            "Arcana",
            "War"
        ],
        symbol: "Vyon's holy symbol is an anchor with his spear as the center part",
        boons: "+1 Dexterity",
        lip: "Skill proficiency - Acrobatics",
        cleric_aligns: [
            "Chaotic Neutral",
            "Chaotic Good",
            "Chaotic Evil",
        ],
        alignment: "Chaotic Neutral",
        titles: [
            "Lord of Waves",
            "The Spear of Chaos",
            "Fortune Favors"
        ],
        imagelink: "/img/arts/divinity/masked/Vyon.png"
    });
})

module.exports = router;