const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/apothecary', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Apothecary",
        main_title: "Ofrye",
        sub_title: "Apothecary",
        overview: "In Ofrye, master apothecaries are treated the same way a high ranking priest of a church is in other parts of the continent. They are an integral part of the Ofrye society as the high quality of potions produced is necessary for large hunts for dangerous creatures. Even a novice apothecary in Ofrye is taught the techniques to maximize the essence of the materials and create beautiful potions with them.",
        boons: [
            { boon_name: "Maximized Potions", boon_desc: "Rolls for healing potions crafted by you are rolled at minimum half of the dice (I.e for a 2d4+2 Healing potion, the minimum you can roll on the d4 is a 3)." },
            { boon_name: "Treatment Specialized", boon_desc: "You gain proficiency in Medicine." }
        ]
    });
})

router.get('/beyond-the-canopy', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Beyond The Canopy",
        main_title: "Ofrye",
        sub_title: "Beyond The Canopy",
        overview: "While most denizens of Ofrye resides among the trees, some rose above and settled on the canopy level. The ecosystem is even more diverse in the canopy and with it comes the intense weather. To live in this environment, you will need to become attuned to the harsh temperatures and persistent since as long as you are here, it is survival of the fittest.",
        boons: [
            { boon_name: "Agile", boon_desc: "You gain an extra 5 ft of movement." },
            { boon_name: "Harsh Temperature Veteran", boon_desc: "You reduce Cold and Fire damage you take by 3." }
        ]
    });
})

router.get('/close-to-home', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Close To Home",
        main_title: "Ofrye",
        sub_title: "Close To Home",
        overview: "You chose to settle among the trees, beneath the canopy of the massive jungle that is Ofrye. Life here is both dangerous yet peaceful. The flora are ever changing and the creatures roaming the jungle are unpredictable and yet, you learn to shift along with them and adapt.",
        boons: [
            { boon_name: "Commune with The Flora", boon_desc: "You can cast Speak with Plants once per day without expending a spell slot." },
            { boon_name: "Expert Tracker", boon_desc: "You have advantage on Survival checks to track a creature." },
            { boon_name: "Eyes of The Night", boon_desc: "You have disadvantage with Perception checks made in the sunlight." }
        ]
    });
})

router.get('/druid-in-training', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Druid in Training",
        main_title: "Ofrye",
        sub_title: "Druid in Training",
        overview: "The Druidic Circle is closely related to the King of Ofrye and it is not uncommon to see druids appearing within Ofrye to take care of the surrounding wildlife but also to train new recruits. To walk the path of a druid is to honor the life that has fallen in order to make way for new life to bloom.",
        boons: [
            { boon_name: "Druidic Recruit", boon_desc: "You learn 2 Druid cantrip." },
            { boon_name: "Animal Companion", boon_desc: "You gain proficiency in Animal Handling." }
        ]
    });
})

router.get('/jungle-scout', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Jungle Scout",
        main_title: "Ofrye",
        sub_title: "Jungle Scout",
        overview: "There exists an elite team comprising of Ofrye's best rangers. They are trained to effortlessly maneuver through any harsh terrain and are extremely comfortable with the paths within Ofrye. They work with extreme efficiency and precision in order to detect any possible threat. More often that not, a ranger will also acts as the guide for outsiders traversing through Ofrye.",
        boons: [
            { boon_name: "Efficient Movement", boon_desc: "Your movement speed is reduced by 5 ft instead of half in difficult terrain." },
            { boon_name: "Nothing's Too High", boon_desc: "You have advantage for climbing checks." }
        ]
    });
})

module.exports = router;