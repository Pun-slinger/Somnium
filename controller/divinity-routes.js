const express = require("express");
const router = express.Router();
const { request, response } = require('express');

//layout: false or express will start looking for layout with main.handlebars by default
router.get('/Radiance-pantheon', function (req, res) {
    res.render('divnity-list', {
        title: "Somnium: Radiance Pantheon",
        name: "Radiance",
        overview: "Created as the first Warforged and once the Divine War was over, 00 was chosen to be a Warforged representative and acts as Nova’s right hand when it comes to matters relating the Warforged and other races. Thus, 00 is the only being other than Nova with the ability to create other Warforged. 00 represents creativity and its limitless potential. This is represented clearly in the Warforged created by 00 as they are much more complex in terms of design and functions.",
        gods: [
            "Alan",
            "Cylena",
            "Quieza",
            "Tavlous",
            "Zinia",
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
            "Wozotz",
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

router.get('/Viridi-pantheon', function (req, res) {
    res.render('divnity-list', {
        title: "Somnium: Viridi Pantheon",
        name: "Viridi",
        overview: "This pantheon consists of deities that governs the various aspects of nature.",
        gods: [
            "Arsyn",
            "Durages",
            "Iana",
            "Myst",
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
            "Oryx",
            "Vati",
        ]
    });
})

module.exports = router;