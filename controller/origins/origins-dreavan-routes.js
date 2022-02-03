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

router.get('/howling-woods', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Howling Woods",
        main_title: "Dreavan",
        sub_title: "Howling Woods",
        overview: "The Black Forest is filled with beasts that was thought to only exists in nightmares and yet, they could not be more real. You are at constant mercy of the forest as those foolish enough to enter rarely walk out the same.",
        boons: [
            { boon_name: "Quick on Your Feet", boon_desc: "You gain a +2 to initiative rolls." },
            { boon_name: "I've Seen Worse", boon_desc: "You gain a +3 to saving throws against Fear effects." },
            { boon_name: "High Alert", boon_desc: "You gain proficiency in Perception." },
            { boon_name: "Tainted Soil", boon_desc: "You suffer a -1 to an ability score of your choosing." }
        ]
    });
})

router.get('/in-plain-sight', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: In Plain Sight",
        main_title: "Dreavan",
        sub_title: "In Plain Sight",
        overview: "You are living in a region filled with deception and lies, it's best that you do the same and blend in. Too show your true nature in Dreavan is a gamble, who knows what will appear at your door.",
        boons: [
            { boon_name: "A bit of a Talker", boon_desc: "You gain +1 to Charisma." },
            { boon_name: "Let's Put On a Mask", boon_desc: "You can cast Disguise Self once per day without expending a spell slot." },
            { boon_name: "Let's Make It Convincing", boon_desc: "You can mimic any voice after hearing it at least once." },
            { boon_name: "No Time for The Holy", boon_desc: "You can not gain proficiency in Religion." }
        ]
    });
})

router.get('/lineage-of-the-cursed', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Lineage of The Cursed",
        main_title: "Dreavan",
        sub_title: "Lineage of The Cursed",
        overview: "You chose the path of dark techniques used by those that called themselves visionaries and master of the dark arts. Studying from witches, warlocks, demons, you will learn that normal boundaries are not present in this land and all that is left is to push your knowledge to its limits.",
        boons: [
            { boon_name: "Dive Into The Dark", boon_desc: "You gain +1 to Intelligence." },
            { boon_name: "Channel The Undead", boon_desc: "You learn 2 Necromancy cantrips." },
            { boon_name: "Arcane Mastery", boon_desc: "Your spell save DC increases by 1." },
            { boon_name: "The Dark Side Has Its Cost", boon_desc: "Healing effects on you are reduced by 3, to a minimum of 1." }
        ]
    });
})

router.get('/void-blessed', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Void Blessed",
        main_title: "Dreavan",
        sub_title: "Void Blessed",
        overview: "You were raised near a Void gate and thus, a portion of the goddess Cutia's power is granted upon you, marking you as being blessed by the undead.",
        boons: [
            { boon_name: "Void Strength", boon_desc: "You gain +1 to Strength." },
            { boon_name: "Undead Body", boon_desc: "All necrotic damage you take are reduced by 3." },
            { boon_name: "One of Us", boon_desc: "You can sense the presence of undead creatures within 15 ft of you." },
            { boon_name: "Outside The Circle of Nature", boon_desc: "You can not gain proficiency in Nature." }
        ]
    });
})

module.exports = router;