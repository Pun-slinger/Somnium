const express = require("express");
const router = express.Router();
const { request, response } = require('express');

router.get('/Aarakocra', function (req, res) {
    res.render('race', {
        title: "Somnium: Aarakocra",
        main_title: "Races",
        sub_title: "Aarakocra",
        ab_score: "Dex +2; Wis +1",
        size_desc: "Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds.",
        size: "Medium",
        speed: "25 ft., fly 50 ft.",
        age: "Aarakocra reach maturity by age 3. Compared to humans, aarakocra don't usually live longer than 30 years.",
        alignment: "Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.",
        language: "You can speak, read, and write Common, Aarakocra, and Auran.",
        additional_ab: [
            { ab_name: "Flight", ab_desc: "You have a flying speed of 50 feet. To use this speed, you can't be wearing medium or heavy armor." },
            { ab_name: "Talons", ab_desc: "Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike." }
        ]
    });
})

router.get('/Aasimar', function (req, res) {
    res.render('race', {
        title: "Somnium: Aasimar",
        main_title: "Races",
        sub_races: [
            {
                sub_title: "Aasimar (Fallen)",
                ab_score: "Cha +2; Str +1",
                size_desc: "Aasimar have the same range of height and weight as humans.",
                size: "Medium",
                speed: "30 ft.",
                age: "Aasimar mature at the same rate as humans, but they can live up to 160 years.",
                alignment: "Imbued with celestial power, most aasimar are good. Outcast aasimar are most often neutral or even evil.",
                language: "You can speak, read, and write Common and Celestial.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Blessed with a radiant soul, your vision can easily cut through darkness. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Celestial Resistance", ab_desc: "You have resistance to necrotic damage and radiant damage." },
                    { ab_name: "Healing Hands", ab_desc: "As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest." },
                    { ab_name: "Light Bearer", ab_desc: "You know the light cantrip. Charisma is your spellcasting ability for it." },
                    {
                        ab_name: "Necrotic Shroud",
                        sub_ab: [
                            {
                                ab_desc: "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to turn into pools of darkness and two skeletal, ghostly, flightless wings to sprout from your back. The instant you transform, other creatures within 10 feet of you that can see you must succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your next turn."
                            },
                            {
                                ab_desc: "Your transformation lasts for 1 minute or until you end it as a bonus action. During it, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level."
                            },
                            {
                                ab_desc: "Once you use this trait, you can't use it again until you finish a long rest."
                            }
                        ]
                    }
                ]
            },
            {
                sub_title: "Aasimar (Protector)",
                ab_score: "Cha +2; Wis +1",
                size_desc: "Aasimar have the same range of height and weight as humans.",
                size: "Medium",
                speed: "30 ft.",
                age: "Aasimar mature at the same rate as humans, but they can live up to 160 years.",
                alignment: "Imbued with celestial power, most aasimar are good. Outcast aasimar are most often neutral or even evil.",
                language: "You can speak, read, and write Common and Celestial.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Blessed with a radiant soul, your vision can easily cut through darkness. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Celestial Resistance", ab_desc: "You have resistance to necrotic damage and radiant damage." },
                    { ab_name: "Healing Hands", ab_desc: "As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest." },
                    { ab_name: "Light Bearer", ab_desc: "You know the light cantrip. Charisma is your spellcasting ability for it." },
                    {
                        ab_name: "Radiant Soul",
                        sub_ab: [
                            {
                                ab_desc: "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back."
                            },
                            {
                                ab_desc: "Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level."
                            },
                            {
                                ab_desc: "Once you use this trait, you can't use it again until you finish a long rest."
                            }
                        ]
                    }
                ]
            },
            {
                sub_title: "Aasimar (Scourge)",
                ab_score: "Cha +2; Con +1",
                size_desc: "Aasimar have the same range of height and weight as humans.",
                size: "Medium",
                speed: "30 ft.",
                age: "Aasimar mature at the same rate as humans, but they can live up to 160 years.",
                alignment: "Imbued with celestial power, most aasimar are good. Outcast aasimar are most often neutral or even evil.",
                language: "You can speak, read, and write Common and Celestial.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Blessed with a radiant soul, your vision can easily cut through darkness. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Celestial Resistance", ab_desc: "You have resistance to necrotic damage and radiant damage." },
                    { ab_name: "Healing Hands", ab_desc: "As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest." },
                    { ab_name: "Light Bearer", ab_desc: "You know the light cantrip. Charisma is your spellcasting ability for it." },
                    {
                        ab_name: "Radiant Consumption",
                        sub_ab: [
                            {
                                ab_desc: "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you."
                            },
                            {
                                ab_desc: "Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level."
                            },
                            {
                                ab_desc: "Once you use this trait, you can't use it again until you finish a long rest."
                            }
                        ]
                    }
                ]
            }
        ]

    });
})

router.get('/Centaur', function (req, res) {
    res.render('race', {
        title: "Somnium: Centaur",
        main_title: "Races",
        sub_title: "Centaur",
        ab_score: "Str +2; Wis +1",
        size_desc: "Centaurs stand between 6 and 7 feet tall, with their equine bodies reaching about 4 feet at the withers.",
        size: "Medium",
        speed: "40 ft.",
        age: "Centaurs mature and age at about the same rate as humans.",
        alignment: "Centaurs are inclined toward neutrality. Lagonna centaurs tend to be more lawful, while Pheres centaurs are more often chaotic.",
        language: "You can speak, read, and write Common and Sylvan.",
        additional_ab: [
            { ab_name: "Fey", ab_desc: "Your creature type is fey, rather than humanoid." },
            { ab_name: "Charge", ab_desc: "If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves." },
            { ab_name: "Hooves", ab_desc: "Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike." },
            { ab_name: "Equine Build", ab_desc: "You count as one size larger when determining your carrying capacity and the weight you can push or drag. In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot." },
            { ab_name: "Survivor", ab_desc: "You have proficiency in one of the following skills of your choice: Animal Handling, Medicine, Nature, or Survival." }
        ]
    });
})

router.get('/Changeling', function (req, res) {
    res.render('race', {
        title: "Somnium: Changeling",
        main_title: "Races",
        sub_title: "Changeling",
        ab_score: "Cha +2; Choose any other +1",
        size_desc: "",
        size: "Medium",
        speed: "30 ft.",
        age: "Changelings mature slightly faster than humans but share a similar lifespan—typically a century or less. While a changeling can transform to conceal their age, the effects of aging affect them similarly to humans.",
        alignment: "Changelings tend toward pragmatic neutrality, and few changelings embrace evil.",
        language: "You can speak, read, and write Common and two other languages of your choice.",
        additional_ab: [
            { ab_name: "Shapechanger", ab_desc: "As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another race, though none of your game statistics change. You can't duplicate the appearance of a creature you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait. You stay in the new form until you use an action to revert to your true form or until you die." },
            { ab_name: "Changeling Instincts", ab_desc: "You gain proficiency with two of the following skills of your choice: Deception, Insight, Intimidation, and Persuasion." },
        ]
    });
})

router.get('/Dhampir', function (req, res) {
    res.render('race', {
        title: "Somnium: Dhampir",
        main_title: "Races",
        sub_title: "Dhampir",
        ab_score: "Choose any +2; choose any other +1",
        size_desc: "",
        size: "Medium",
        speed: "35 ft., climb 35 ft.",
        age: "Dhampirs mature at roughly the same rate as humans but do not age further after reaching maturity, and they do not die of old age.",
        alignment: "Any",
        language: "You can speak, read, and write Common and Undeath.",
        additional_ab: [
            {
                ab_name: "Darkvision",
                ab_desc: "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light."
            },
            {
                ab_name: "Spider Climb",
                ab_desc: "You have a climbing speed equal to your walking speed. In addition, at 3rd level, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free."
            },
            {
                ab_name: "Sunlight Sensitivity",
                ab_desc: "You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
            },
            {
                ab_name: "Vampiric Bite",
                sub_ab: [
                    {
                        ab_desc: "Your fanged bite is a natural weapon, which counts as a simple melee weapon with which you are proficient. You add your Constitution modifier to the attack and damage rolls when you attack with your bite. Your bite deals 1d4 piercing damage on a hit. While you are missing half or more of your hit points, you have advantage on attack rolls you make with this bite."
                    },
                    {
                        ab_desc: "When you use your bite and hit a creature that isn't a Construct or an Undead, you can empower regain hit points equal to the damage dealt by the bite."
                    },
                    {
                        ab_desc: "You can empower yourself with your bite a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                    }
                ]
            }
        ]
    });
})

router.get('/Dragonborn', function (req, res) {
    res.render('race', {
        title: "Somnium: Dragonborn",
        main_title: "Races",
        sub_title: "Dragonborn",
        ab_score: "Str +2; Cha +1",
        size_desc: "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
        size: "Medium",
        speed: "30 ft.",
        age: "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
        alignment: "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with the Mad Dragons can be terrible villains.",
        language: "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
        additional_ab: [
            {
                ab_name: "Draconic Ancestry",
                ab_desc: "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
                table: {
                    headers: [
                        "Dragon", "Damage type", "Breath Weapon"
                    ],
                    row: [
                        ["Black", "Acid", "5 by 30 ft. line (Dex. save)"],
                        ["Blue", "Lightning", "5 by 30 ft. line (Dex. save)"],
                        ["Brass", "Fire", "5 by 30 ft. line (Dex. save)"],
                        ["Bronze", "Lightning", "5 by 30 ft. line (Dex. save)"],
                        ["Copper", "Acid", "5 by 30 ft. line (Dex. save)"],
                        ["Gold", "Fire", "15 ft. cone (Dex. save)"]
                        ["Green", "Poison", "15 ft. cone (Con. save)"],
                        ["Red", "Fire", "15 ft. cone (Dex. save)"],
                        ["Silver", "Cold", "15 ft. cone (Con. save)"],
                        ["White", "Cold", "15 ft. cone (Con. save)"]
                    ]
                }
            },
            {
                ab_name: "Breath Weapon",
                sub_ab: [
                    {
                        ab_desc: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level."
                    },
                    {
                        ab_desc: "After you use your breath weapon, you can't use it again until you complete a short or long rest."
                    }
                ]
            },
            {
                ab_name: "Damage Resistance",
                ab_desc: "You have resistance to the damage type associated with your draconic ancestry."
            }
        ]
    });
})

router.get('/Dwarf', function (req, res) {
    res.render('race', {
        title: "Somnium: Dwarf",
        main_title: "Races",
        sub_races: [
            {
                sub_title: "Dwarf (Mountain)",
                ab_score: "Str +2; Con +2",
                size_desc: "Dwarves stand between 4 and 5 feet tall and average about 150 pounds.",
                size: "Medium",
                speed: "25 ft. Your speed is not reduced by wearing heavy armor.",
                age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
                alignment: "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
                language: "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Dwarven Resilience", ab_desc: "You have advantage on saving throws against poison, and you have resistance against poison damage." },
                    { ab_name: "Dwarven Combat Training", ab_desc: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer." },
                    { ab_name: "Tool Proficiency", ab_desc: "You gain proficiency with the artisan's tools of your choice: Smith's tools, brewer's supplies, or mason's tools." },
                    { ab_name: "Stonecunning", ab_desc: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus." },
                    { ab_name: "Dwarven Armor Training", ab_desc: "You have proficiency with light and medium armor." },
                ]
            },
            {
                sub_title: "Dwarf (Hill)",
                ab_score: " Con +2; Wis +1",
                size_desc: "Dwarves stand between 4 and 5 feet tall and average about 150 pounds.",
                size: "Medium",
                speed: "25 ft. Your speed is not reduced by wearing heavy armor.",
                age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
                alignment: "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
                language: "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Dwarven Resilience", ab_desc: "You have advantage on saving throws against poison, and you have resistance against poison damage." },
                    { ab_name: "Dwarven Combat Training", ab_desc: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer." },
                    { ab_name: "Tool Proficiency", ab_desc: "You gain proficiency with the artisan's tools of your choice: Smith's tools, brewer's supplies, or mason's tools." },
                    { ab_name: "Stonecunning", ab_desc: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus." },
                    { ab_name: "Dwarven Toughness", ab_desc: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level." },
                ]
            },
            {
                sub_title: "Dwarf (Duergar)",
                ab_score: " Con +2; Str +1",
                size_desc: "Dwarves stand between 4 and 5 feet tall and average about 150 pounds.",
                size: "Medium",
                speed: "25 ft. Your speed is not reduced by wearing heavy armor.",
                age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
                alignment: "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
                language: "You can speak, read, and write Common, Dwarvish, and Undercommon.",
                additional_ab: [
                    { ab_name: "Superior Darkvision", ab_desc: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Duergar Resilience", ab_desc: "You have advantage on saving throws against poison, and you have resistance against poison damage. You also have advantage on saving throws against illusions and against being charmed or paralyzed." },
                    { ab_name: "Dwarven Combat Training", ab_desc: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer." },
                    { ab_name: "Tool Proficiency", ab_desc: "You gain proficiency with the artisan's tools of your choice: Smith's tools, brewer's supplies, or mason's tools." },
                    { ab_name: "Stonecunning", ab_desc: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus." },
                    { ab_name: "Duergar Magic", ab_desc: "When you reach 3rd level, you can cast the Enlarge/Reduce spell on yourself once with this trait, using only the spell's enlarge option. When you reach 5th level, you can cast the Invisibility spell on yourself once with this trait. You don't need material components for either spell, and you can't cast them while you're in direct sunlight, although sunlight has no effect on them once cast. You regain the ability to cast these spells with this trait when you finish a long rest. Intelligence is your spellcasting ability for these spells." },
                    { ab_name: "Sunlight Sensitivity", ab_desc: "You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight." }
                ]
            }
        ]

    });
})

router.get('/Werewolf', function (req, res) {
    res.render('race', {
        title: "Somnium: Werewolf",
        main_title: "Races",
        sub_title: "Werewolf",
        ab_score: "Con +2, Str +1",
        size_desc: "Your normal form is around 5-6 ft tall while your werewolf form average out at around 6-7 feet tall.",
        size: "Medium for both forms",
        speed: "Your base walking speed is 30 feet. Your base speed increases by 5 feet when you transform.",
        age: "Werewolves tend to have the same life expentancy as humans. They tend to live around 80 years.",
        alignment: "Werewolves will tend to lean toward chaotic and neutral.",
        language: "You can speak, read, and write Common, Sylvan.",
        additional_ab: [
            {
                ab_name: "Shapechanger",
                ab_desc: "As an action, you can transform into your werewolf form. You revert to your original form when you take an action to revert back, or if you are reduced to 0 hit points. While you are transformed, you have access to:",
                sub_ab: [
                    {
                        ab_name: "Wicked Resistance",
                        ab_desc: "When you take damage and you are in your werewolf form, you can, as a reaction, gain resistance to bludgeoning, piercing and slashing damage from nonmagical attacks not made with silvered weapons for 1 turn. You must finish a short or long rest before using this trait again."
                    },
                    {
                        ab_name: "Darkvision",
                        ab_desc: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray. You only have darkvision in hybrid and wolf form, and is seen in shades of red, not grey."
                    },
                    {
                        ab_name: "Clawed",
                        ab_desc: "You have sharp claws which you can use to make unarmed strikes. On a hit, they deal 1d6 slashing damage + your Strength modifier."
                    },
                    {
                        ab_name: "Silver Wound",
                        ab_desc: "You are vulnerable to attacks made from silver weapons."
                    }
                ]
            },
            {
                ab_name: "Perks of the Predator",
                ab_desc: "You gain proficiency in the Perception and Survival."
            }
        ]
    });
})

module.exports = router;