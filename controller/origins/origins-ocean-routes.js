const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/calling-of-the-coin', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Calling of The Coin",
        main_title: "The Boundless Ocean",
        sub_title: "Calling of The Coin",
        overview: "You reason for stepping on a boat is simple and straightforward, you are chasing all of the hidden gold and treasures out there bury in caves and shipwrecks. The greed within you is strong and to those that look down on you because you \"are not following the sailor's way\", what makes the world go round?",
        boons: [
            { boon_name: "Golden Touch", boon_desc: "You earn an extra 10% more gold from mission rewards." },
            { boon_name: "You Have To Dig Deeper", boon_desc: "You gain proficiency in Investigation." }
        ]
    });
})

router.get('/mist-strider', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Mist Strider",
        main_title: "The Boundless Ocean",
        sub_title: "Mist Strider",
        overview: "Every sailor knows that a thick veil of mist covers what lies beyond the boundaries of Isox. Those that were brave or foolish enough to venture through the mist never return to tell the tale. You belong to a group of thrill seekers, sailing right at the border of the mists and see what kind of mystery is hiding within it.",
        boons: [
            { boon_name: "6th Sense", boon_desc: "You gain a danger sense that alerts you to potential enemies within 15ft radius and have advantage on Perception checks to locate those enemies once detected." },
            { boon_name: "I've Been Struck By The Unimaginable", boon_desc: "You gain a +2 to Dex saving throws." }
        ]
    });
})

module.exports = router;