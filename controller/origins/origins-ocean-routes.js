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

router.get('/navigator', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Navigator",
        main_title: "The Boundless Ocean",
        sub_title: "Navigator",
        overview: "Every ship needs a navigator, to guide them to safety and away from a deadly storm, to follow a map towards the treasure. A crew is truly incomplete without the guide. A compass are your eyes, a map is your home field, lead us to glory!",
        boons: [
            { boon_name: "Charting Expert", boon_desc: "You gain proficiency in Survival and with Cartographer’s Tools." },
            { boon_name: "The Stars Lead, I Follow", boon_desc: "You always know which direction is North." }
        ]
    });
})

router.get('/ship-born', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Ship Born",
        main_title: "The Boundless Ocean",
        sub_title: "Ship Born",
        overview: "Oh would you look at that! A new member was born on the ship. Starting this day, they are your family. You learned how to maneuver like a sailor cause the last thing the captain needs is a slacker. They even taught you how to fight in a pinch, make use what you can. These sailors can be questionable but you can't get enough of them, the energy of the ship life is truly unique.",
        boons: [
            { boon_name: "In a Pinch, This Will Do", boon_desc: "You are proficient with improvised weapons." },
            { boon_name: "Can Still Throw a Punch", boon_desc: "You can use Dexterity instead of Strength for your Unarmed Strikes." },
            { boon_name: "Time To Get Out!", boon_desc: "You gain proficiency in Acrobatics." }
        ]
    });
})

router.get('/shipwreck-isle', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Shipwreck Isle",
        main_title: "The Boundless Ocean",
        sub_title: "Shipwreck Isle",
        overview: "Among the countless shipwrecks scattered across the Boundless Ocean, who knows what might be hiding beneath the rubble. Besides, no one is going to complain about you taking their belongings.",
        boons: [
            { boon_name: "Dive In", boon_desc: "You gain a swimming speed of 40 ft and can hold your breathe for up to 30 minutes." },
            { boon_name: "Some Have Locks", boon_desc: "You gain proficiency in Thieves Tools." }
        ]
    });
})

module.exports = router;