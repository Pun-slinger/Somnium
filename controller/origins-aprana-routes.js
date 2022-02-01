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

module.exports = router;