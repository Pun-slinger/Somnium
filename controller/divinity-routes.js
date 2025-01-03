const express = require("express");
const router = express.Router();
const { request, response } = require('express');

//layout: false or express will start looking for layout with main.handlebars by default
router.get('/Radiance-pantheon', function (req, res) {
    res.render('divnity-list', {
        title: "Somnium: Radiance Pantheon",
        name: "Radiance",
        overview: "This pantheon consists of deities that represents the goodly aspects that govern every mortal creature and also act as the balancing force towards the evil side of the spectrum.",
        gods: [
            "Cylena",
            "Quieza",
            "Tavlous",
        ]
    });
})

router.get('/Shroud-pantheon', function (req, res) {
    res.render('divnity-list', {
        title: "Somnium: Shroud Pantheon",
        name: "Shroud",
        overview: "This pantheon consists of deities that represents the aspects that one might consider to be evil but are no less a necessary part of the world.",
        gods: [
            "Cutia",
            "Ezreus",
            "Omen",
            "Vora",
        ]
    });
})

router.get('/Masked-pantheon', function (req, res) {
    res.render('divnity-list', {
        title: "Somnium: Masked Pantheon",
        name: "Masked",
        overview: "This pantheon consists of deities characterized by their unique armors. This pantheon is unique in the fact that it is comprised of all previously mortal beings that ascended to godhood.",
        gods: [
            "Absolute",
            "Illumi",
            "Koga",
            "Nova",
            "Vyon",
        ]
    });
})

router.get('/Prismatic-pantheon', function (req, res) {
    res.render('divnity-list', {
        title: "Somnium: Prismatic Pantheon",
        name: "Prismatic",
        overview: "This pantheon consists of beings that represent emotions from the emotional spectrum and are tie to one of 7 colors. These entities are not necessarily gods but possesses enough power to be considered equal to gods.",
        gods: [
            "Bylmos",
            "Orthoros",
            "Qudall",
            "Silanous",
            "Vyatrix",
            "Ylria",
            "Zaiarg",
        ]
    });
})

router.get('/Grey-pantheon', function (req, res) {
    res.render('divnity-list', {
        title: "Somnium: Grey Pantheon",
        name: "Grey",
        overview: "This pantheon consists of deities that represent more ambiguous concepts and tend to lean on the neutrality aspect of mortalkind.",
        gods: [
            "Ataris",
            "Ayrveog",
            "Enn",
            "Vati",
            "Arsyn",
            "Myst",
        ]
    });
})

module.exports = router;