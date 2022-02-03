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

router.get('/dreavan-exiled', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Dreavan Exiled",
        main_title: "Ewhil",
        sub_title: "Dreavan Exiled",
        overview: "Let me tell you something, getting kicked out of the region where dark magic is a common occurrence takes some actual skill. Nevertheless, being exiled from the land of the cursed means that the chance of you being accepted in other places are unlikely so, welcome to Ewhil.",
        boons: [
            { boon_name: "A Little Something From Home", boon_desc: "Increase the spell DC for Necromancy spells casted by you by 1." },
            { boon_name: "Can't Let My Guard Down", boon_desc: "You gain a +2 to your passive Perception." }
        ]
    });
})

router.get('/fruaqua-exiled', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Fruaqua Exiled",
        main_title: "Ewhil",
        sub_title: "Fruaqua Exiled",
        overview: "Selfishness. Your goal for walking in the path of a magic wielder is no longer for the benefit and safety of the innocent. Your own selfish desires have led you astray and all you crave is power and even more power. Fruaqua no longer welcomes you!",
        boons: [
            { boon_name: "All Mine!", boon_desc: "Spell effects that last for more than 1 round last twice as long when casted on you." },
            { boon_name: "Arcane Eye", boon_desc: "You gain proficiency in Arcana." }
        ]
    });
})

router.get('/ofrye-exiled', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Ofrye Exiled",
        main_title: "Ewhil",
        sub_title: "Ofrye Exiled",
        overview: "Ofrye is a quite simple and peaceful place to live in. However, you unfortunately broke its one rule and revealed information about Ofrye to outsiders. You are therefore, exiled and that is considered lucky as the worst punishment could have been death.",
        boons: [
            { boon_name: "On The Run", boon_desc: "You gain a +10ft to your base movement speed." },
            { boon_name: "Cover-up", boon_desc: "You gain proficiency in Persuasion." }
        ]
    });
})

router.get('/pandora-exiled', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Pandora Exiled",
        main_title: "Ewhil",
        sub_title: "Pandora Exiled",
        overview: "You broke a tenet of the gang you once belonged and the result was banishment from Pandora as no other gang would take in an exiled. Your choices are either die among the elements or bring your shame with you to Exiled Land.",
        boons: [
            { boon_name: "I Will Survive", boon_desc: "You gain a +2 to all saving throws." },
            { boon_name: "Not Down Just Yet", boon_desc: "When you roll a 1 on an attack or saving throw, you heal for 3 HP." }
        ]
    });
})

module.exports = router;