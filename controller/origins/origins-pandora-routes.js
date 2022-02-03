const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/brass-eagles', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Brass Eagles",
        main_title: "Pandora",
        sub_title: "Brass Eagles",
        overview: "To say that fighting from a far away distance is a coward's method of fighting is to be narrow-minded. To the Eagles, distance is just a concept, nothing is too far away to strike and you miss every shot you don't take.",
        boons: [
            { boon_name: "Well Prepared Offense and Defense", boon_desc: "You deal an extra 2 damage with projectile weapons and damage from projectile weapons dealt to you are reduced by 2." },
            { boon_name: "Nothing is Too Far Away", boon_desc: "Range weapons wielded by you gain a +20ft to their effective range." }
        ]
    });
})

router.get('/brotherhood-of-thunder', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Brotherhood of Thunder",
        main_title: "Pandora",
        sub_title: "Brotherhood of Thunder",
        overview: "You belong to the outcast gang of Pandora. In the bloodbath that is the constant conflicts between the gangs, the Brotherhood of Thunder follows the path of pacifism and non lethal combat.",
        boons: [
            { boon_name: "Broad Side of The Blade", boon_desc: "All melee damage you deal are non lethal." },
            { boon_name: "Dodge and Weave", boon_desc: "You gain +1 AC while wielding a weapon." },
            { boon_name: "Field Medic", boon_desc: "You do not need to roll a Medicine check to stabilize an unconscious creature." },
            { boon_name: "See Through The Lies", boon_desc: "You gain proficiency in Insight." }
        ]
    });
})

router.get('/cobalt-lions', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Cobalt Lions",
        main_title: "Pandora",
        sub_title: "Cobalt Lions",
        overview: "Being raised within the confines of the strongest gang in Pandora comes with its benefits. You are trained in the art of the sword since a young age and your weapon is not a separate tool, it is an extension of your body.",
        boons: [
            { boon_name: "One With My Sword", boon_desc: "You have advantage on rolls against attempts to disarm you." },
            { boon_name: "Unsheathed, On Guard", boon_desc: "You gain a +2 to your initiative roll." },
            { boon_name: "Precise Strikes", boon_desc: "Attacked made with a sword deals an extra 2 damage." },
        ]
    });
})

router.get('/gangless', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Gangless",
        main_title: "Pandora",
        sub_title: "Gangless",
        overview: "Unfortunately, you were not raised under the roof of a gang. Maybe you were abandoned or simply a wanderer in nature, lost among the wasteland. You have no one to depend on, only yourself versus the elements.",
        boons: [
            { boon_name: "Quick Recovery", boon_desc: "You heal equal to your Constitution modifier when you roll a 1 on a saving throw, skill check or attack roll." },
            { boon_name: "Make Do With What You Have", boon_desc: "You gain proficiency with improvised weapons." },
            { boon_name: "No Cover, No Problem", boon_desc: "You gain a burrow speed of 20 ft." },
        ]
    });
})

router.get('/jade-serpents', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Jade Serpents",
        main_title: "Pandora",
        sub_title: "Jade Serpents",
        overview: "Who has time for protocols and flashy techniques? All you need is a weapon and a will to fight! Once you start moving, nothing will stop you! Let the joy of combat fuels you and crush your enemies.",
        boons: [
            { boon_name: "Battle Scars", boon_desc: "You are resistant to 1 non magical damage type of the following: Bludgeoning, Piercing or Slashing." },
            { boon_name: "Feast Upon Their Blood", boon_desc: "Whenever you defeat an enemy with a melee weapon, you heal an amount equal to their Constitution modifier." },
        ]
    });
})

router.get('/violet-whisperers', function (req, res) {
    res.render('region-suborigin', {
        title: "Somnium: Violet Whisperers",
        main_title: "Pandora",
        sub_title: "Violet Whisperers",
        overview: "Some prefer to fight from the background instead of the frontline. The Whisperers specialized in hit and run tactics. You strike fast and keep your enemies guessing.",
        boons: [
            { boon_name: "Tactical Retreat", boon_desc: "The first attack of opportunity from an enemy against you have disadvantage." },
            { boon_name: "Fade Into The Background", boon_desc: "You can take the Hide action as a bonus action." },
        ]
    });
})

module.exports = router;