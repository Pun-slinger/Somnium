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

module.exports = router;