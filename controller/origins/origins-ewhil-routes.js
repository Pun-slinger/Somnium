const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/aprana-exiled', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Aprana Exiled",
        main_title: "Ewhil",
        sub_title: "Aprana Exiled",
        overview: "Why break you oath and vow to a higher being? Residing in the religion capital of the continent means that tenets are expected to be followed and upheld. Yet, you treat them as simple words like how a child would treat it and now, you face the consequences of your actions.",
        boons: [
            { boon_name: "Double Down", boon_desc: "You may choose to not follow 2 of the tenets required by your class." },
            { boon_name: "Efficient Rejuvenation", boon_desc: "You gain twice as many HP when spending hit dice to heal during a short rest." }
        ]
    });
})

router.get('/clivania-exiled', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Clivania Exiled",
        main_title: "Ewhil",
        sub_title: "Clivania Exiled",
        overview: "Even though you are exiled from Clivania, there is one thing for certain, you know their methods inside and out. Whenever you chose to rise and take your revenge, the sky is their safe haven no more!",
        boons: [
            { boon_name: "I Know Your Weakness", boon_desc: "Your critical threshold against flying creatures is 19-20." },
            { boon_name: "You are Not My Prey", boon_desc: "Damage you take from non draconic creatures is reduced by 2." }
        ]
    });
})

module.exports = router;