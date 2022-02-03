const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/arcane-student', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Arcane Student",
        main_title: "Fruaqua",
        sub_title: "Arcane Student",
        overview: "The headquarters of the Mages Assembly is located in Fruaqua and to be enrolled as a disciple is just the beginning. You must prove your worth to stand among the continent's most elite of spellcasters and magic users. Get ready and try not to fall behind.",
        boons: [
            { boon_name: "Utility Spells", boon_desc: "You learn 2 Wizard cantrips." },
            { boon_name: "Versatility", boon_desc: "You gain 1 skill proficiency of your choice." },
            { boon_name: "Mana Sense", boon_desc: "You can cast Detect Magic at will." },
            { boon_name: "Fragile Frame", boon_desc: "You take an extra 3 damage from physical attacks when you are below your maximum hit points." }
        ]
    });
})

router.get('/barrier-operator', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Barrier Operator",
        main_title: "Fruaqua",
        sub_title: "Barrier Operator",
        overview: "In order to be qualified as a town or city barrier operator, defensive magic must be your speciality. Your knowledge and skills are what is keeping the people safe from the bombardment of destructive elemental rain. Your will must be strong and your magic stronger, to maintain the wall of defense.",
        boons: [
            { boon_name: "Defense Expert", boon_desc: "You learn a 1st level Abjuration spell that is not from your class." },
            { boon_name: "Innate Defense Ward", boon_desc: "Whenever you cast a spell, you gain 3 temp HP." },
            { boon_name: "My Magic Will Protect Me", boon_desc: "You gain -1 max HP per level." }
        ]
    });
})

router.get('/eye-of-the-storm', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Eye of The Storm",
        main_title: "Fruaqua",
        sub_title: "Eye of The Storm",
        overview: "Fruaqua is struck by a magic storm once a year and those that took shelter in the city at the center of the storm have told stories of unimaginable events. They claim that spells are alive in the air, deceased relatives walking among the streets, whatever wish they made came true. You can take all those claims with a grain of salt but one thing for sure, those people came out of the storm with magic beyond their regular capabilities.",
        boons: [
            { boon_name: "Paranoid", boon_desc: "You gain a +2 to your passive Perception." },
            { boon_name: "Your Tricks Can't Fool Me", boon_desc: "You have advantage on saving throws against Illusion spells/effects." },
            { boon_name: "Untamed", boon_desc: "Every leveled spell you cast has a 5% chance to go wild." }
        ]
    });
})

router.get('/maddening-whispers', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Maddening Whispers",
        main_title: "Fruaqua",
        sub_title: "Maddening Whispers",
        overview: "There are those that swore they can hear the whispers of a mad man in their mind, telling them to pursue their goals at all cost and that he would help. Some say that they are insane while others believe that it is the whispers of The Mad Prophet, an insane immortal wizard.",
        boons: [
            { boon_name: "Mana Drain", boon_desc: "You heal equal to your Proficiency bonus whenever you kill an enemy with a spell." },
            { boon_name: "Lie To Hide Your Intentions", boon_desc: "You gain proficiency in Deception." },
            { boon_name: "Vulnerable in The Mind", boon_desc: "You have disadvantage against being Charmed." }
        ]
    });
})

router.get('/wandering-in-the-rain', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Wandering In The Rain",
        main_title: "Fruaqua",
        sub_title: "Wandering In The Rain",
        overview: "To not take shelter during elemental rain is simply foolish and yet there are those without a home, living in the wilds, out of the safety of a barrier. They are shaped to withstand the damaging rain and from that, forge a formidable warrior that can take on the elements.",
        boons: [
            { boon_name: "Element Skin", boon_desc: "You are resistant to 1 damage type that is not Piercing, Slashing or Bludgeoning." },
            { boon_name: "Veteran Reflexes", boon_desc: "You gain a +2 to Dexterity saving throws against spells." },
            { boon_name: "Everyone On Their Own", boon_desc: "You can not benefit from the Help action." }
        ]
    });
})

module.exports = router;