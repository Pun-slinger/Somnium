const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/apranian-noble', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Apranian Noble",
        main_title: "Aprana",
        sub_title: "Apranian Noble",
        overview: "You belong to a lineage of high standing nobles living in Aprana. Your family have been doing business in Aprana for decades and you have a standard and reputation to maintain.",
        boons: [
            { boon_name: "Reputable", boon_desc: "You receive a 10% discount in every store you shop at in Aprana." },
            { boon_name: "Politician's Trade", boon_desc: "You gain proficiency in Persuasion." }
        ]
    });
})

router.get('/church-born', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Church Born",
        main_title: "Aprana",
        sub_title: "Church Born",
        overview: "Aprana is the most diverse in terms of religion on Isox and there are churches and temples everywhere in the region. More often than not, churches will adopt orphans from war and  tragedy and raise them as priests and clerics.",
        boons: [
            { boon_name: "Cleric in Training", boon_desc: "You learn 1 Cleric cantrip." },
            { boon_name: "Studious", boon_desc: "You gain proficiency in History." }
        ]
    });
})

router.get('/mana-vein', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Mana Vein",
        main_title: "Aprana",
        sub_title: "Mana Vein",
        overview: "It is said that if you live near a Life Geyser, some of the magic leaking out would be infused within you, granting access to magical abilities that were no possible before. Magic of the world flows through you, it protects and watches over you.",
        boons: [
            { boon_name: "Elemental Compatibility", boon_desc: "Choose 1 of the following damage types: Acid, Cold, Fire, Lightning, Poison, or Thunder. Increase the DC of spells you cast that deal that damage type by 1." },
            { boon_name: "Arcane Incline", boon_desc: "You gain proficiency in ArcanaYou gain proficiency in Arcana." }
        ]
    });
})

router.get('/merchant-in-the-skies', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Merchant in The Skies",
        main_title: "Aprana",
        sub_title: "Merchant in The Skies",
        overview: "The floating market district in Edenbourne is a magical and engineering feat that is astonishing to behold, to be a merchant in said district is even more prestigious and treated with high regards in Aprana. Be careful though, competition's fierce.",
        boons: [
            { boon_name: "Battlefield of Words", boon_desc: "You have advantage on Persuasion and Deception used for bartering." },
            { boon_name: "Funds for The Road", boon_desc: "You start with an extra 100 gp." }
        ]
    });
})

router.get('/scars-of-the-terror', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Scars of The Terror",
        main_title: "Aprana",
        sub_title: "Scars of The Terror",
        overview: "The invasion of The Scouring Terror certainly left its mark on the land and people of Aprana. The lives that were lost, the mental scars that were left, those that grew up during this time knew firsthand the terror of the Leviathans and strive to rise above it.",
        boons: [
            { boon_name: "Not Going Down That Easily", boon_desc: "You gain +5 to your maximum HP." },
            { boon_name: "Is That All You Got?", boon_desc: "You gain a +3 to saving throws against Fear effects." }
        ]
    });
})

router.get('/all-are-invited', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: All are Invited",
        main_title: "Aprana",
        sub_title: "All are Invited",
        overview: "No religion is forbidden in Aprana and there are those that walk the path of multiple deities instead of devoting to one. Gods need followers right? Why not join together and offer a portion of your power? What do you have to lost?",
        boons: [
            { boon_name: "Options, options, options", boon_desc: "Once a week, you may choose to use a Channel Divinity from a Cleric Domain." },
            { boon_name: "Blessed Strikes", boon_desc: "You do 1 extra Radiant damage with every attack." }
        ]
    });
})

module.exports = router;