const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/brass-eagles', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Brass Eagles",
        main_title: "Pandora",
        sub_title: "Brass Eagles",
        overview: "To say that fighting from a far away distance is a coward's method of fighting is to be narrow-minded. To the Eagles, distance is just a concept, nothing is too far away to strike and you miss every shot you don't take.",
        boons: [
            { boon_name: "Well Prepared Offense and Defense", boon_desc: "You deal an extra 2 damage with projectile weapons and damage from projectile weapons dealt to you are reduced by 2." },
            { boon_name: "Nothing is Too Far Away", boon_desc: "Range weapons wielded by you gain a +20ft to their effective range." }
        ]
    });
})

router.get('/brotherhood-of-thunder', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Brotherhood of Thunder",
        main_title: "Pandora",
        sub_title: "Brotherhood of Thunder",
        overview: "You belong to the outcast gang of Pandora. In the bloodbath that is the constant conflicts between the gangs, the Brotherhood of Thunder follows the path of pacifism and non lethal combat.",
        boons: [
            { boon_name: "Broad Side of The Blade", boon_desc: "All melee damage you deal are non lethal." },
            { boon_name: "Dodge and Weave", boon_desc: "You gain +1 AC while wielding a weapon." },
            { boon_name: "Field Medic", boon_desc: "You do not need to roll a Medicine check to stabilize an unconscious creature." },
            { boon_name: "See Through The Lies", boon_desc: "You gain proficiency in Insight." }
        ]
    });
})

module.exports = router;