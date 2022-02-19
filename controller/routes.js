const express = require("express");
const router = express.Router();
const { request, response } = require('express');

const spells_info = require("../static/text/spells-info.js");
const classes = require("../static/text/class.js");
const casting_time = require("../static/text/casting-time.js");
const spells_schools = require("../static/text/spells-school.js");

//layout: false or express will start looking for layout with main.handlebars by default
router.get('/', function (req, res) {
    res.render('index', { title: "Home Page of Somnium" });
})

router.get('/origins', function (req, res) {
    res.render('origin-list', {
        title: "Somnium: Origins",
        regions: [
            {
                name: "Aprana",
                link: "/Aprana",
                icon: "<i class=\"fas fa-coins\"></i>"
            },
            {
                name: "Clivania",
                link: "/Clivania",
                icon: "<i class=\"fas fa-mountain\"></i>"
            },
            {
                name: "Dreavan",
                link: "/Dreavan",
                icon: "<i class=\"fas fa-book-dead\"></i>"
            },
            {
                name: "Ewhil",
                link: "/Ewhil",
                icon: "<i class=\"fas fa-book-dead\"></i>"
            },
            {
                name: "Fruaqua",
                link: "/Fruaqua",
                icon: "<i class=\"fas fa-hat-wizard\"></i>"
            },
            {
                name: "Ofrye",
                link: "/Ofrye",
                icon: "<i class=\"fas fa-tree\"></i>"
            },
            {
                name: "Pandora",
                link: "/Pandora",
                icon: "<i class=\"fas fa-biohazard\"></i>"
            },
            {
                name: "The Boundless Ocean",
                link: "/The-Boundless-Ocean",
                icon: "<i class=\"fas fa-anchor\"></i>"
            },
        ]
    });
})

router.get('/races', function (req, res) {
    res.render('race-list', {
        title: "Somnium: Races",
        races: [
            "Aarakocra",
            "Aasimar",
            "Centaur",
            "Changeling",
            "Dhampir",
            "Dragonborn",
            "Dwarf",
            "Elf",
            "Firbolg",
            "Genasi",
            "Gnome",
            "Goblin",
            "Goliath",
            "Half-elf",
            "Half-orc",
            "Halfling",
            "Human",
            "Kenku",
            "Kitsune",
            "Kobold",
            "Lizardfolk",
            "Minotaur",
            "Orc",
            "Satyr",
            "Sprite",
            "Tabaxi",
            "Tiefling",
            "Tortle",
            "Triton",
            "Warforged",
            "Werewolf",
            "Yuan-ti",
        ]
    });
})

router.get('/subclasses', function (req, res) {
    res.render('subclass-list', {
        title: "Somnium: Subclasses", classes: [
            {
                name: "Barbarian",
                subclasses: [{ name: "Path of Anti Magic", link: "/path-of-anti-magic" }]
            },
            {
                name: "Bard",
                subclasses: [{ name: "College of Symphony", link: "/college-of-symphony" }]
            },
            {
                name: "Cleric",
                subclasses: [{ name: "Emotion Domain", link: "/emotion-domain" }]
            },
            {
                name: "Fighter",
                subclasses: [{ name: "Starglade Blood Battle Style", link: "/starglade-blood-battle-style" }, { name: "Shapeless Style", link: "subclasses/shapeless-style" }]
            },
            {
                name: "Monk",
                subclasses: [{ name: "Way of the Silver Wing", link: "/way-of-the-destruction-style" }, { name: "Way of the Destruction Style", link: "subclasses/way-of-the-silver-wing" }]
            },
            {
                name: "Paladin",
                subclasses: [{ name: "Oath of The Void", link: "/oath-of-the-void" }]
            },
            {
                name: "Rouge",
                subclasses: [{ name: "Pirate", link: "/pirate" }]
            },
            {
                name: "Sorcerer",
                subclasses: [{ name: "Demonic Bloodline", link: "/demonic-bloodline" }]
            },
            {
                name: "Wizard",
                subclasses: [{ name: "School of Chorosurgy", link: "/school-of-chorosurgy" }]
            }
        ]
    });
})

router.get('/spells', function (req, res) {
    res.render('spells', {
        title: "Somnium: Spells", spells: [
            {
                name: "Absorb Elements",
                class: [classes.wizard, classes.druid, classes.ranger, classes.sorcerer, classes.artificer],
                subclass: [`Something something ${classes.wizard}`, `Timely Whimey ${classes.warlock}`],
                level: spells_info.cantrip,
                school: spells_schools.abj,
                time: casting_time.react,
                time_desc: "which you take when you take acid, cold, fire, lightning, or thunder damage",
                range: spells_info.self,
                duration: "1 round",
                spell_desc: [
                    {
                        name: "",
                        main: "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.",
                        sub: []
                    },
                    {
                        name: "At Higher Levels",
                        main: "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
                        sub: []
                    }
                ],
            },
            {
                name: "Draconic Transformation",
                class: [classes.druid, classes.sorcerer, classes.wizard],
                subclass: [`Random random ${classes.druid}`, `Spacey Wacey ${classes.sorcerer}`],
                level: "7th",
                school: spells_schools.trans,
                time: casting_time.bonus,
                time_desc: "",
                range: spells_info.self_foot_cone(60),
                duration: "Concentration, up to 1 minute",
                spell_desc: [
                    {
                        name: "",
                        main: "With a roar, you draw on the magic of dragons to transform yourself, taking on draconic features. You gain the following benefits until the spell ends:",
                        sub: []
                    },
                    {
                        name: "Blindsight",
                        main: "You have blindsight with a range of 30 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature, unless the creature successfully hides from you.",
                        sub: []
                    },
                    {
                        name: "Breath Weapon",
                        main: "When you cast this spell, and as a bonus action on subsequent turns for the duration, you can exhale shimmering energy in a 60-foot cone. Each creature in that area must make a Dexterity saving throw, taking 6d8 force damage on a failed save, or half as much damage on a successful one.",
                        sub: []
                    },
                    {
                        name: "Wings",
                        main: "Incorporeal wings sprout from your back, giving you a flying speed of 60 feet.",
                        sub: []
                    },
                ],
            },

        ]
    });
})

module.exports = router;