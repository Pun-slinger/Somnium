const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/behind-the-veil', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Behind The Veil",
        main_title: "Dreavan",
        sub_title: "Behind The Veil",
        overview: "Why bother to put up a facade and blend in when you can simply fade into the background where no one would notice? Besides, business behind the scenes are better, attracts less eyes and ears.",
        boons: [
            { boon_name: "Fast on Your Feet", boon_desc: "You gain +1 to Dexterity." },
            { boon_name: "Don't Slip Again", boon_desc: "When you roll a 1 or 2 on a Stealth check, you may choose to reroll that but your movement speed is decreased by 10ft until your stealth is broken." },
            { boon_name: "Bullshit Your Way Out When Caught", boon_desc: "You gain proficiency in Deception." },
            { boon_name: "No One Cares About The Past", boon_desc: "You can not gain proficiency in History." }
        ]
    });
})

router.get('/gravetender', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Gravetender",
        main_title: "Dreavan",
        sub_title: "Gravetender",
        overview: "Scatter across Dreavan are graveyards built for those have passed due to the harsh living environment and those graves requires watching and being taken care of.",
        boons: [
            { boon_name: "Resilience", boon_desc: "You gain +1 to Constitution." },
            { boon_name: "Undead Whisperer", boon_desc: "You can cast Speak With Dead once per day without expending a spell slot." },
            { boon_name: "Tending Wounds", boon_desc: "You gain proficiency in Medicine." },
            { boon_name: "Deadmen Tell No Lies", boon_desc: "You can not gain proficiency in Deception." }
        ]
    });
})

module.exports = router;