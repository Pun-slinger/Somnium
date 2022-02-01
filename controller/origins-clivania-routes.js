const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/beast-hunter', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Beast Hunter",
        main_title: "Clivania",
        sub_title: "Beast Hunter",
        overview: "Living within the mountain range are a wide variety of monsters and there are those that took to the skies with their wyvern companion and hunt these beasts. Some do it for the materials, others for the money and there are those just doing it for the thrill.",
        boons: [
            { boon_name: "Where Do You Think You're Going?", boon_desc: "You have advantage on attacks of opportunity against Beast and Monstrosity type creatures." },
            { boon_name: "Let Nature Guide You", boon_desc: "You gain proficiency in Nature." }
        ]
    });
})

router.get('/draconic-legacy', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Draconic Legacy",
        main_title: "Clivania",
        sub_title: "Draconic Legacy",
        overview: "Given the Dragon Civil War, Ayrveog and the remaining good dragons do not take lightly to those that wishes to attempt and give rise to the Mad Dragons once again. Specific individuals are chosen to hunt and shut down any attempts to free that madness that once plague the world.",
        boons: [
            { boon_name: "Favored Enemy", boon_desc: "You deal an extra 3 damage to Draconic enemies." },
            { boon_name: "Bloodline Resistance", boon_desc: "You gain resistant to 1 of the following damage type: Acid, Cold, Fire, Lightning, Poison, or Thunder." }
        ]
    });
})

module.exports = router;