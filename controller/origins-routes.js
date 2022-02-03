const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/Aprana', function (req, res) {
    res.render('origin-region', {
        title: "Somnium: Aprana",
        main_title: "Origins",
        sub_title: "Aprana",
        overview: "Aprana is a land filed with the conversations of trade, ruled by The Council of chosen champions from each pantheon. This is where you come for business and to learn more about those of higher power watching over us.",
        boons: [
            { boon_name: "Charming Since Birth", boon_desc: "You gain +1 to Charisma." },
            { boon_name: "Mark of The Land", boon_desc: "You gain proficiency in Religion." }
        ],
        region_suborigins: [
            { suborigin_name: "Apranian Noble", link: "/apranian-noble" },
            { suborigin_name: "Church Born", link: "/church-born" },
            { suborigin_name: "Mana Vein", link: "/mana-vein" },
            { suborigin_name: "Merchant In the Skies", link: "/merchant-in-the-skies" },
            { suborigin_name: "Scars of the Terror", link: "/scars-of-the-terror" },
            { suborigin_name: "All Are Invited", link: "/all-are-invited" },
        ]
    });
})

router.get('/Clivania', function (req, res) {
    res.render('origin-region', {
        title: "Somnium: Clivania",
        main_title: "Origins",
        sub_title: "Clivania",
        overview: "Known for the massive mountain range covering half of the region, Clivania is filled with hard working folks either in the forge or in the skies with their wyvern companion.",
        boons: [
            { boon_name: "Flying Pal", boon_desc: "You are proficient in Wyvern riding." },
            { boon_name: "Native Tongue", boon_desc: "You can speak, read and understand Dwarvish." },
            { boon_name: "Dwarven Fortitude", boon_desc: "You gain +1 to Constitution." },
            { boon_name: "It's a Warzone Out There", boon_desc: "You gain proficiency in Survival." }
        ],
        region_suborigins: [
            { suborigin_name: "Beast Hunter", link: "/beast-hunter" },
            { suborigin_name: "Draconic Legacy", link: "/draconic-legacy" },
            { suborigin_name: "Forge In Flames", link: "/forge-in-flames" },
            { suborigin_name: "Lowlander", link: "/lowlander" },
            { suborigin_name: "Mountainbound", link: "/mountainbound" },
            { suborigin_name: "Scholar In Training", link: "/scholar-in-training" },
            { suborigin_name: "Wyvern Trainer", link: "/wyvern-trainer" }
        ]
    });
})

router.get('/Dreavan', function (req, res) {
    res.render('origin-region', {
        title: "Somnium: Dreavan",
        main_title: "Origins",
        sub_title: "Dreavan",
        overview: "Dreavan is the land of the cursed, filled with dark techniques and those that are willing to dive in what others would consider to be blasphemous. Here lies the people that were shunned by the rest of the continent for their \"cursed\" nature but they have a home here, under the umbrella of The Void.",
        boons: [
            { boon_name: "Quick Witted", boon_desc: "You gain +1 to Wisdom." },
            { boon_name: "Tongue of the undead", boon_desc: "You can speak, read and understand Undeath." },
            { boon_name: "Paranoid", boon_desc: "You gain +3 to your passive Perception and Investigation." },
            { boon_name: "The Tainted Soil", boon_desc: "You suffer 1 drawback for as living in these cursed lands has its toll." }
        ],
        region_suborigins: [
            { suborigin_name: "Behind The Veil", link: "/behind-the-veil" },
            { suborigin_name: "Gravetender", link: "/gravetender" },
            { suborigin_name: "Howling Woods", link: "/howling-woods" },
            { suborigin_name: "In Plain SIght", link: "/in-plain-sight" },
            { suborigin_name: "Lineage of The Cursed", link: "/lineage-of-the-cursed" },
            { suborigin_name: "Void Blessed", link: "/void-blessed" },
        ]
    });
})

router.get('/Ewhil', function (req, res) {
    res.render('origin-region', {
        title: "Somnium: Ewhil",
        main_title: "Origins",
        sub_title: "Ewhil",
        overview: "Ewhil is known most commonly as \"The Land of The Exiled\". If you are exiled from any location on Isox, your new home is now Ewhil. To live here is to follow a simple rule: DON'T bring your troubles here! In the occasion that you are exiled from exiled land, may the gods have mercy on your soul.",
        boons: [
            { boon_name: "Surrounding Versatility", boon_desc: "You gain +1 to any attribute." },
            { boon_name: "There are More Locks Than You'd Think", boon_desc: "You gain proficiency with Thieves Tools." },
            { boon_name: "Skilled", boon_desc: "You gain proficiency in 1 skill of your choice." }
        ],
        region_suborigins: [
            { suborigin_name: "Aprana Exiled", link: "/aprana-exiled" },
            { suborigin_name: "Clivania Exiled", link: "/clivania-exiled" },
            { suborigin_name: "Dreavan Exiled", link: "/dreavan-exiled" },
            { suborigin_name: "Fruaqua Exiled", link: "/fruaqua-exiled" },
            { suborigin_name: "Ofrye Exiled", link: "/ofrye-exiled" },
            { suborigin_name: "Pandora Exiled", link: "/pandora-exiled" },
        ]
    });
})

router.get('/Fruaqua', function (req, res) {
    res.render('origin-region', {
        title: "Somnium: Fruaqua",
        main_title: "Origins",
        sub_title: "Fruaqua",
        overview: "Magic is actively wild in these lands, Vora's latent magic is still running rampant and forcing denizens to live in magical barriers to avoid be hit with the rain contorted by magic. However, magic here is more advance than any other region and life may be overwhelming to outsiders.",
        boons: [
            { boon_name: "Magic At My Behest", boon_desc: "You are able to choose the damage type of spells (This must be determined by the first time you cast a spell and can not be changed)." },
            { boon_name: "Knowledge is Power", boon_desc: "You gain +1 to Intelligence." },
            { boon_name: "Magic in Your Veins", boon_desc: "You gain proficiency in Arcana." },
            { boon_name: "Always At Risk", boon_desc: "You gain 1 disadvantage due to the constant danger of the environment you live in." }
        ],
        region_suborigins: [
            { suborigin_name: "Arcane Student", link: "/arcane-student" },
            { suborigin_name: "Barrier Operator", link: "/barrier-operator" },
            { suborigin_name: "Eye of The Storm", link: "/eye-of-the-storm" },
            { suborigin_name: "Maddening Whispers", link: "/maddening-whispers" },
            { suborigin_name: "Wandering In The Rain", link: "/wandering-in-the-rain" }
        ]
    });
})

router.get('/Ofrye', function (req, res) {
    res.render('origin-region', {
        title: "Somnium: Ofrye",
        main_title: "Origins",
        sub_title: "Ofrye",
        overview: "Ofrye is completely comprised of a massive jungle and what makes it unique is the fact that there is little to none information about life and the environment within this massive jungle.",
        boons: [
            { boon_name: "Dexterous", boon_desc: "You gain +1 to Dexterity." },
            { boon_name: "Like The Back of My Hand", boon_desc: "You can never get lost in the Ofrye jungle." },
            { boon_name: "Native Tongue", boon_desc: "You can speak, read and understand Elvish." },
            { boon_name: "One with The Surroundings", boon_desc: "You gain proficiency in Nature." }
        ],
        region_suborigins: [
            { suborigin_name: "Apothecary", link: "/apothecary" },
            { suborigin_name: "Beyond The Canopy", link: "/beyond-the-canopy" },
            { suborigin_name: "Close To Home", link: "/close-to-home" },
            { suborigin_name: "Druid in Training", link: "/druid-in-training" },
            { suborigin_name: "Jungle Scout", link: "/jungle-scout" }
        ]
    });
})

router.get('/Pandora', function (req, res) {
    res.render('origin-region', {
        title: "Somnium: Pandora",
        main_title: "Origins",
        sub_title: "Pandora",
        overview: "Pandora was torn apart by The Divine War and what was left is a deserted wasteland and in this ruthless battlefield, you are either the hunter or you are the hunted. It is survival of the fittest in these lands and you bettter not waste time worrying about others because you have to watch your own back first.",
        boons: [
            { boon_name: "Your Surroundings Shaped You", boon_desc: "You gain +1 to Constitution." },
            { boon_name: "Toughness", boon_desc: "You gain +10 to your maximum HP." },
            { boon_name: "Watchful Gaze", boon_desc: "You gain proficiency in Perception." }
        ],
        region_suborigins: [
            { suborigin_name: "Brass Eagles", link: "/brass-eagles" },
            { suborigin_name: "Brotherhood of Thunder", link: "/brotherhood-of-thunder" },
            { suborigin_name: "Cobalt Lions", link: "/cobalt-lions" },
            { suborigin_name: "Gangless", link: "/gangless" },
            { suborigin_name: "Jade Serpents", link: "/jade-serpents" },
            { suborigin_name: "Violet Whisperers", link: "/violet-whisperers" }
        ]
    });
})

router.get('/The-Boundless-Ocean', function (req, res) {
    res.render('origin-region', {
        title: "Somnium: The Boundless Ocean",
        main_title: "Origins",
        sub_title: "The Boundless Ocean",
        parent_link: "The-Boundless-Ocean",
        overview: "The clashing of the waves, crewmates singing shanties, the captain yelling out directions, life on the sea is surely something else. The people sailing the Boundless Ocean don't give a damn about your past, as long as you are on their boat, you are family.",
        boons: [
            { boon_name: "Fast Hands on Deck", boon_desc: "You gain +1 to Dexterity." },
            { boon_name: "We Don't Need a Wimp", boon_desc: "You gain proficiency in Athletics." },
            { boon_name: "Personal Treasure", boon_desc: "You start with 100 gp." }
        ],
        region_suborigins: [
            { suborigin_name: "Calling of The Coin", link: "/calling-of-the-coin" },
            { suborigin_name: "Mist Strider", link: "/mist-strider" },
            { suborigin_name: "Navigator", link: "/navigator" },
            { suborigin_name: "Ship Born", link: "/ship-born" },
            { suborigin_name: "Shipwreck Isle", link: "/shipwreck-isle" }
        ]
    });
})

module.exports = router;