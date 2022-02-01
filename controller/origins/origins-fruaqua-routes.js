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

module.exports = router;