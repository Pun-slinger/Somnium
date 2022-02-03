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

router.get('/Elf', function (req, res) {
    res.render('race', {
        title: "Somnium: Elf",
        main_title: "Races",
        sub_races: [
            {
                sub_title: "Elf (High)",
                ab_score: "Dex +2; Int +1",
                size_desc: "Elves range from under 5 to over 6 feet tall and have slender builds.",
                size: "Medium",
                speed: "30 ft.",
                age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                alignment: "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
                language: "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Keen Senses", ab_desc: "You have proficiency in the Perception skill." },
                    { ab_name: "Fey Ancestry", ab_desc: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." },
                    {
                        ab_name: "Trance", sub_ab: [
                            {
                                ab_desc: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
                            },
                            {
                                ab_desc: "If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed."
                            }
                        ]
                    },
                    { ab_name: "Elf Weapon Training", ab_desc: "You have proficiency with the longsword, shortsword, shortbow, and longbow." },
                    { ab_name: "Cantrip", ab_desc: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it." },
                    { ab_name: "Extra Language", ab_desc: "You can speak, read, and write one extra language of your choosing." },
                ]
            },
            {
                sub_title: "Elf (Drow)",
                ab_score: "Dex +2; Cha +1",
                size_desc: "Elves range from under 5 to over 6 feet tall and have slender builds.",
                size: "Medium",
                speed: "30 ft.",
                age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                alignment: "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
                language: "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
                additional_ab: [
                    { ab_name: "Superior Darkvision", ab_desc: "Accustomed to the depths of the Underdark, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Keen Senses", ab_desc: "You have proficiency in the Perception skill." },
                    { ab_name: "Fey Ancestry", ab_desc: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." },
                    {
                        ab_name: "Trance", sub_ab: [
                            {
                                ab_desc: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
                            },
                            {
                                ab_desc: "If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed."
                            }
                        ]
                    },
                    { ab_name: "Sunlight Sensitivity", ab_desc: "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight." },
                    { ab_name: "Drow Magic", ab_desc: "You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once per day; you must finish a long rest in order to cast the spell again using this trait. When you reach 5th level, you can also cast the darkness spell once per day; you must finish a long rest in order to cast the spell again using this trait. Charisma is your spellcasting ability for these spells." },
                    { ab_name: "Drow Weapon Training", ab_desc: "You have proficiency with rapiers, shortswords, and hand crossbows." },
                ]
            },
            {
                sub_title: "Elf (Sea)",
                ab_score: "Dex +2; Con +1",
                size_desc: "Elves range from under 5 to over 6 feet tall and have slender builds.",
                size: "Medium",
                speed: "30 ft., swim 30 ft.",
                age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                alignment: "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
                language: "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Keen Senses", ab_desc: "You have proficiency in the Perception skill." },
                    { ab_name: "Fey Ancestry", ab_desc: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." },
                    {
                        ab_name: "Trance", sub_ab: [
                            {
                                ab_desc: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
                            },
                            {
                                ab_desc: "If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed."
                            }
                        ]
                    },
                    { ab_name: "Sea Elf Training", ab_desc: "You have proficiency with the spear, trident, light crossbow, and net." },
                    { ab_name: "Child of the Sea", ab_desc: "You have a swimming speed of 30 feet, and you can breathe air and water." },
                    { ab_name: "Friend of the Sea", ab_desc: "Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed." },
                    { ab_name: "Extra Language", ab_desc: "You can speak, read, and write Aquan." },
                ]
            },
            {
                sub_title: "Elf (Wood)",
                ab_score: "Dex +2; Wis +1",
                size_desc: "Elves range from under 5 to over 6 feet tall and have slender builds.",
                size: "Medium",
                speed: "35 ft.",
                age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                alignment: "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
                language: "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Keen Senses", ab_desc: "You have proficiency in the Perception skill." },
                    { ab_name: "Fey Ancestry", ab_desc: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." },
                    {
                        ab_name: "Trance", sub_ab: [
                            {
                                ab_desc: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
                            },
                            {
                                ab_desc: "If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed."
                            }
                        ]
                    },
                    { ab_name: "Elf Weapon Training", ab_desc: "You have proficiency with the longsword, shortsword, shortbow, and longbow." },
                    { ab_name: "Fleet of Foot", ab_desc: "Your base walking speed increases to 35 feet." },
                    { ab_name: "Mask of the Wild", ab_desc: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena." },
                ]
            },
            {
                sub_title: "Elf (Ash)",
                ab_score: "Dex +2; Con +1",
                size_desc: "Elves range from under 5 to over 6 feet tall and have slender builds.",
                size: "Medium",
                speed: "30 ft.",
                age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                alignment: "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
                language: "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Keen Senses", ab_desc: "You have proficiency in the Perception skill." },
                    { ab_name: "Fey Ancestry", ab_desc: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." },
                    {
                        ab_name: "Trance", sub_ab: [
                            {
                                ab_desc: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
                            },
                            {
                                ab_desc: "If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed."
                            }
                        ]
                    },
                    { ab_name: "Necrotic Resistance", ab_desc: "You have resistance to necrotic damage." },
                    {
                        ab_name: "Blessing of the First Shadow",
                        sub_ab: [
                            {
                                ab_desc: "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a long rest."
                            },
                            {
                                ab_desc: "Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent."
                            },
                        ]
                    }
                ]
            }
        ]
    });
})

router.get('/Firbolg', function (req, res) {
    res.render('race', {
        title: "Somnium: Firbolg",
        main_title: "Races",
        sub_title: "Firbolg",
        ab_score: "Wis +2; Str +1",
        size_desc: "Firbolg are between 7 and 8 feet tall and weigh between 240 and 300 pounds.",
        size: "Medium",
        speed: "30 ft.",
        age: "As humanoids related to the fey, firbolg have long lifespans. A firbolg reaches adulthood around 30, and the oldest of them can live for 500 years.",
        alignment: "As people who follow the rhythm of nature and see themselves as its caretakers, firbolg are typically neutral good. Evil firbolg are rare and are usually the sworn enemies of the rest of their kind.",
        language: "You can speak, read, and write Common, Elvish, and Giant.",
        additional_ab: [
            { ab_name: "Firbolg Magic", ab_desc: "You can cast detect magic and disguise self with this trait, using Wisdom as your spellcasting ability for them. Once you cast either spell, you can't cast it again with this trait until you finish a short or long rest. When you use this version of disguise self, you can seem up to 3 feet shorter than normal, allowing you to more easily blend in with humans and elves." },
            { ab_name: "Hidden Step", ab_desc: "As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can't use it again until you finish a short or long rest." },
            { ab_name: "Powerful Build", ab_desc: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift." },
            { ab_name: "Speech of Beast and Leaf", ab_desc: "You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them." }
        ]
    });
})

router.get('/Genasi', function (req, res) {
    res.render('race', {
        title: "Somnium: Genasi",
        main_title: "Races",
        sub_races: [
            {
                sub_title: "Air Genasi",
                ab_score: "Con +2; Dex +1",
                size_desc: "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall.",
                size: "Medium",
                speed: "30 ft.",
                age: "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.",
                alignment: "Independent and self-reliant, genasi tend toward a neutral alignment.",
                language: "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
                additional_ab: [
                    { ab_name: "Unending Breath", ab_desc: "You can hold your breath indefinitely while you're not incapacitated." },
                    { ab_name: "Mingle with the Wind", ab_desc: "You can cast the levitate spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell." },
                ]
            },
            {
                sub_title: "Water Genasi",
                ab_score: "Con +2; Dex +1",
                size_desc: "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall.",
                size: "Medium",
                speed: "30 ft., swim 30 ft.",
                age: "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.",
                alignment: "Independent and self-reliant, genasi tend toward a neutral alignment.",
                language: "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
                additional_ab: [
                    { ab_name: "Acid Resistance", ab_desc: "You have resistance to acid damage." },
                    { ab_name: "Amphibious", ab_desc: "You can breathe air and water." },
                    { ab_name: "Swim", ab_desc: "You have a swimming speed of 30 feet." },
                    { ab_name: "Call to the Wave", ab_desc: "You know the shape water cantrip. When you reach 3rd level, you can cast the create or destroy water spell as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells." },
                ]
            },
            {
                sub_title: "Earth Genasi",
                ab_score: "Con +2; Str +1",
                size_desc: "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall.",
                size: "Medium",
                speed: "30 ft., swim 30 ft.",
                age: "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.",
                alignment: "Independent and self-reliant, genasi tend toward a neutral alignment.",
                language: "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
                additional_ab: [
                    { ab_name: "Earth Walk", ab_desc: "You can move across difficult terrain made of earth or stone without expending extra movement." },
                    { ab_name: "Merge with Stone", ab_desc: "You can cast the pass without trace spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell." },
                ]
            },
            {
                sub_title: "Fire Genasi",
                ab_score: "Con +2; Int +1",
                size_desc: "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall.",
                size: "Medium",
                speed: "30 ft., swim 30 ft.",
                age: "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.",
                alignment: "Independent and self-reliant, genasi tend toward a neutral alignment.",
                language: "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. Your ties to the Elemental Plane of Fire make your darkvision unusual: everything you see in darkness is in a shade of red." },
                    { ab_name: "Fire Resistance", ab_desc: "You have resistance to fire damage." },
                    { ab_name: "Reach to the Blaze", ab_desc: "You know the produce flame cantrip. Once you reach 3rd level, you can cast the burning hands spell once with this trait as a 1st-level spell, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells." },
                ]
            }
        ]
    });
})

router.get('/Gnome', function (req, res) {
    res.render('race', {
        title: "Somnium: Gnome",
        main_title: "Races",
        sub_races: [
            {
                sub_title: "Gnome (Rock)",
                ab_score: "Int +2; Con +1",
                size_desc: "Gnomes are between 3 and 4 feet tall and average about 40 pounds.",
                size: "Small",
                speed: "25 ft.",
                age: "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
                alignment: "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",
                language: "You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Gnome Cunning", ab_desc: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic." },
                    { ab_name: "Artificer's Lore", ab_desc: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply." },
                    {
                        ab_name: "Tinker",
                        sub_ab: [
                            {
                                ab_desc: "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time."
                            },
                            {
                                ab_desc: "When you create a device, choose one of the following options:",
                                sub_ab: [
                                    {
                                        ab_name: "Clockwork Toy",
                                        ab_desc: "This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents."
                                    },
                                    {
                                        ab_name: "Fire Starter",
                                        ab_desc: "The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action."
                                    },
                                    {
                                        ab_name: "Music Box",
                                        ab_desc: "When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."
                                    },
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                sub_title: "Gnome (Forest)",
                ab_score: "Int +2; Dex +1",
                size_desc: "Gnomes are between 3 and 4 feet tall and average about 40 pounds.",
                size: "Small",
                speed: "25 ft.",
                age: "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
                alignment: "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",
                language: "You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Gnome Cunning", ab_desc: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic." },
                    { ab_name: "Natural Illusionist", ab_desc: "You know the minor illusion cantrip. Intelligence is your spellcasting ability for it." },
                    { ab_name: "Speak with Small Breasts", ab_desc: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets." },

                ]
            },
            {
                sub_title: "Gnome (Svirfneblin)",
                ab_score: "Int +2; Dex +1",
                size_desc: "A typical svirfneblin stands about 3 to 3½ feet tall and weighs 80 to 120 pounds.",
                size: "Small",
                speed: "25 ft.",
                age: "Deep gnomes are short-lived for gnomes. They mature at the same rate humans do and are considered full-grown adults by 25. They live 200 to 250 years, although hard toil and the dangers of the Underdark often claim them before their time.",
                alignment: "Svirfneblin believe that survival depends on avoiding entanglements with other creatures and not making enemies, so they favor neutral alignments. They rarely wish others ill, and they are unlikely to take risks on behalf of others.",
                language: "You can speak, read, and write Common, Gnomish, and Undercommon. The svirfneblin dialect is more guttural than surface Gnomish, and most svirfneblin know only a little bit of Common, but those who deal with outsiders (and that includes you as an adventurer) pick up enough Common to get by in other lands.",
                additional_ab: [
                    { ab_name: "Superior Darkvision", ab_desc: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Gnome Cunning", ab_desc: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic." },
                    { ab_name: "Stone Camouflage", ab_desc: "You have advantage on Dexterity (Stealth) checks to hide in rocky terrain." },
                ]
            },
        ]
    });
})

router.get('/Goblin', function (req, res) {
    res.render('race', {
        title: "Somnium: Goblin",
        main_title: "Races",
        sub_title: "Goblin",
        ab_score: "Dex +2; Con +1",
        size_desc: "Goblins are between 3 and 4 feet tall and weigh between 40 and 80 pounds.",
        size: "Small",
        speed: "30 ft.",
        age: "Goblins reach adulthood at age 8 and live up to 60 years.",
        alignment: "Goblins are typically neutral evil, as they care only for their own needs. A few goblins might tend toward good or neutrality, but only rarely.",
        language: "You can speak, read, and write Common and Goblin.",
        additional_ab: [
            { ab_name: "Darkvision", ab_desc: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
            { ab_name: "Fury of the Small", ab_desc: "When you damage a creature with an attack or a spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level. Once you use this trait, you can't use it again until you finish a short or long rest." },
            { ab_name: "Nimble Escape", ab_desc: "You can take the Disengage or Hide action as a bonus action on each of your turns." },
        ]
    });
})

router.get('/Goliath', function (req, res) {
    res.render('race', {
        title: "Somnium: Goliath",
        main_title: "Races",
        sub_title: "Goliath",
        ab_score: "Str +2; Con +1",
        size_desc: "Goliaths are between 7 and 8 feet tall and weigh between 280 and 340 pounds.",
        size: "Medium",
        speed: "30 ft.",
        age: "Goliaths have lifespans comparable to humans. They enter adulthood in their late teens and usually live less than a century.",
        alignment: "Goliath society, with its clear roles and tasks, has a strong lawful bent. The goliath sense of fairness, balanced with an emphasis on self sufficiency and personal accountability, pushes them toward neutrality.",
        language: "You can speak, read, and write Common and Giant.",
        additional_ab: [
            { ab_name: "Natural Athlete", ab_desc: "You have proficiency in the Athletics skill." },
            { ab_name: "Stone's Endurance", ab_desc: "You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can't use it again until you finish a short or long rest." },
            { ab_name: "Powerful Build", ab_desc: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift." },
            { ab_name: "Mountain Born", ab_desc: "You have resistance to cold damage. You're also acclimated to high altitude, including elevations above 20,000 feet." },
        ]
    });
})

router.get('/Half-elf', function (req, res) {
    res.render('race', {
        title: "Somnium: Half-elf",
        main_title: "Races",
        sub_races: [
            {
                sub_title: "Half-elf (Aquatic)",
                ab_score: "Cha +2; Choose any other two unique +1",
                size_desc: "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall.",
                size: "Medium",
                speed: "30 ft.",
                age: "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
                alignment: "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.",
                language: "You can speak, read, and write Common, Elvish, and one extra language of your choice.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Fey Ancestry", ab_desc: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." },
                    { ab_name: "Swim", ab_desc: "You gain a swimming speed of 30 ft." },
                ]
            },
            {
                sub_title: "Half-elf (Drow)",
                ab_score: "Cha +2; Choose any other two unique +1",
                size_desc: "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall.",
                size: "Medium",
                speed: "30 ft.",
                age: "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
                alignment: "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.",
                language: "You can speak, read, and write Common, Elvish, and one extra language of your choice.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Fey Ancestry", ab_desc: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." },
                    { ab_name: "Drow Magic", ab_desc: "You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once per day; you must finish a long rest in order to cast the spell again using this trait. When you reach 5th level, you can also cast the darkness spell once per day; you must finish a long rest in order to cast the spell again using this trait. Charisma is your spellcasting ability for these spells." },
                ]
            },
            {
                sub_title: "Half-elf (Wood)",
                ab_score: "Cha +2; Choose any other two unique +1",
                size_desc: "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall.",
                size: "Medium",
                speed: "30 ft.",
                age: "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
                alignment: "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.",
                language: "You can speak, read, and write Common, Elvish, and one extra language of your choice.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Fey Ancestry", ab_desc: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." },
                    {
                        ab_name: "Variant Feature (Choose 1)", sub_ab: [
                            {
                                ab_name: "Elf Weapon Training",
                                ab_desc: "You have proficiency with the longsword, shortsword, shortbow, and longbow."
                            },
                            {
                                ab_name: "Fleet of Foot",
                                ab_desc: "Your base walking speed increases to 35 feet."
                            },
                            {
                                ab_name: "Mask of the Wild",
                                ab_desc: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
                            }
                        ]
                    },
                ]
            },
            {
                sub_title: "Half-elf (High)",
                ab_score: "Cha +2; Choose any other two unique +1",
                size_desc: "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall.",
                size: "Medium",
                speed: "30 ft.",
                age: "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
                alignment: "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.",
                language: "You can speak, read, and write Common, Elvish, and one extra language of your choice.",
                additional_ab: [
                    { ab_name: "Darkvision", ab_desc: "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
                    { ab_name: "Fey Ancestry", ab_desc: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." },
                    {
                        ab_name: "Variant Feature (Choose 1)", sub_ab: [
                            {
                                ab_name: "Elf Weapon Training",
                                ab_desc: "You have proficiency with the longsword, shortsword, shortbow, and longbow."
                            },
                            {
                                ab_name: "Cantrip",
                                ab_desc: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it."
                            }
                        ]
                    },
                ]
            }
        ]
    });
})

router.get('/Half-orc', function (req, res) {
    res.render('race', {
        title: "Somnium: Half-orc",
        main_title: "Races",
        sub_title: "Half-orc",
        ab_score: "Str +2; Con +1",
        size_desc: "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall.",
        size: "Medium",
        speed: "30 ft.",
        age: "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
        alignment: "Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.",
        language: "You can speak, read, and write Common and Orcish. Orcish is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.",
        additional_ab: [
            { ab_name: "Darkvision", ab_desc: "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
            { ab_name: "Menacing", ab_desc: "You gain proficiency in the Intimidation skill." },
            { ab_name: "Relentless Endurance", ab_desc: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest." },
            { ab_name: "Savage Attacks", ab_desc: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit." },
        ]
    });
})

router.get('/Halfling', function (req, res) {
    res.render('race', {
        title: "Somnium: Halfling",
        main_title: "Races",
        sub_races: [
            {
                sub_title: "Halfling (Lightfoot)",
                ab_score: "Dex +2; Cha +1",
                size_desc: "Halflings average about 3 feet tall and weigh about 40 pounds.",
                size: "Small",
                speed: "25 ft.",
                age: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
                alignment: "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
                language: "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
                additional_ab: [
                    { ab_name: "Lucky", ab_desc: "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll." },
                    { ab_name: "Brave", ab_desc: "You have advantage on saving throws against being frightened." },
                    { ab_name: "Halfling Nimbleness", ab_desc: "You can move through the space of any creature that is of a size larger than yours." },
                    { ab_name: "Naturally Stealthy", ab_desc: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you." },
                ]
            },
            {
                sub_title: "Halfling (Stout)",
                ab_score: "Dex +2; Con +1",
                size_desc: "Halflings average about 3 feet tall and weigh about 40 pounds.",
                size: "Small",
                speed: "25 ft.",
                age: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
                alignment: "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
                language: "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
                additional_ab: [
                    { ab_name: "Lucky", ab_desc: "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll." },
                    { ab_name: "Brave", ab_desc: "You have advantage on saving throws against being frightened." },
                    { ab_name: "Halfling Nimbleness", ab_desc: "You can move through the space of any creature that is of a size larger than yours." },
                    { ab_name: "Stout Resilience", ab_desc: "You have advantage on saving throws against poison, and you have resistance against poison damage." },
                ]
            },
            {
                sub_title: "Halfling (Ghostwise)",
                ab_score: "Dex +2; Con +1",
                size_desc: "Halflings average about 3 feet tall and weigh about 40 pounds.",
                size: "Small",
                speed: "25 ft.",
                age: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
                alignment: "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
                language: "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
                additional_ab: [
                    { ab_name: "Lucky", ab_desc: "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll." },
                    { ab_name: "Brave", ab_desc: "You have advantage on saving throws against being frightened." },
                    { ab_name: "Halfling Nimbleness", ab_desc: "You can move through the space of any creature that is of a size larger than yours." },
                    { ab_name: "Silent Speech", ab_desc: "You can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time." },
                ]
            }
        ]
    });
})

router.get('/Human', function (req, res) {
    res.render('race', {
        title: "Somnium: Human",
        main_title: "Races",
        sub_title: "Human",
        ab_score: "Str +1; Dex +1; Con +1; Int +1; Wis +1; Cha +1",
        size_desc: "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range,",
        size: "Medium",
        speed: "30 ft.",
        age: "Humans reach adulthood in their late teens and live less than a century.",
        alignment: "Humans tend toward no particular alignment. The best and the worst are found among them.",
        language: "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
    });
})

router.get('/Kenku', function (req, res) {
    res.render('race', {
        title: "Somnium: Kenku",
        main_title: "Races",
        sub_title: "Kenku",
        ab_score: "Dex +2; Wis +1",
        size_desc: "Kenku are around 5 feet tall and weigh between 90 and 120 pounds.",
        size: "Medium",
        speed: "30 ft.",
        age: "Kenku have shorter lifespans than humans. They reach maturity at about 12 years old and can live to 60.",
        alignment: "Kenku are chaotic creatures, rarely making enduring commitments, and they care mostly for preserving their own hides. They are generally chaotic neutral in outlook.",
        language: "You can read and write Common and Auran, but you can only speak using your Mimicry trait.",
        additional_ab: [
            { ab_name: "Expert Forgery", ab_desc: "You can duplicate other creatures' handwriting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects." },
            { ab_name: "Kenku Training", ab_desc: "You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand." },
            { ab_name: "Mimicry", ab_desc: "You can mimic sounds you have heard, including voices. A creature that hears the sounds can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check." },
        ]
    });
})

router.get('/Kitsune', function (req, res) {
    res.render('race', {
        title: "Somnium: Kitsune",
        main_title: "Races",
        sub_title: "Kitsune",
        ab_score: "Cha +2, Int +1",
        size_desc: "Kitsune are generally on the smaller side of most humanoids ranging from 4'7 to the tallest being just under 6'. Weight wise kitsune are as light and agile as they look.",
        size: "Medium",
        speed: "Your base walking speed is 30 feet. While not carrying anything in your hands you can drop to all fours and increase your movement speed to 35 feet.",
        age: "Kitsune reach adulthood at 16, cease physical aging in their early 20s and live to be a century and a half.",
        alignment: "Due to their nature of being a bit mischievous, kitsune are often chaotic. Even the most skilled monks find it difficult to ignore the desire to be a bit mischievous at times, but they tend to approach the trick in a much more planned out and guided manner. Kitsune are known to be both good and evil.",
        language: "You can speak, read, and write Common and Sylvan.",
        additional_ab: [
            { ab_name: "Darkvision", ab_desc: "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light." },
            {
                ab_name: "Rock Paper Scissors", sub_ab: [
                    {
                        ab_desc: "Once per long rest, as an action, choose an enemy within 10 ft of you that you can see. That enemy must make a DC 14 Wis saving throw. If fail, they are forced into playing a game of rock paper scissors with you. You and that creature will roll a 1d3 with a 1=Rock, 2=Paper and 3=Scissors. If you win, you can immediately move adjacent to that enemy and make an unarmed attack that does an additional 1d4 Psychic damage. In addition, that enemy is considered confused for 1 turn. If you lose then the enemy can do the same."
                    },
                    {
                        ab_name: "Confused",
                        ab_desc: "A confused creature must roll a d2 at the start of each of its turn to determine its behavior for that turn:",
                        sub_ab: [
                            {
                                ab_name: "-1",
                                ab_desc: "An affected creature can’t take any reactions and at the start of its turn, it must use all of its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesn't take an action this turn."
                            },
                            {
                                ab_name: "-2",
                                ab_desc: "The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn."
                            },
                        ]
                    }
                ]
            },
            { ab_name: "Among the People", ab_desc: "You can appear as a human and hide that you are a Kitsune. As an action, you can magically hide your ears, fur, and tail(s), and visually replace them with human equivalents. You may drop the illusion as a free action." },
        ]
    });
})

router.get('/Kobold', function (req, res) {
    res.render('race', {
        title: "Somnium: Kobold",
        main_title: "Races",
        sub_title: "Kobold",
        ab_score: "Dex +2",
        size_desc: "Kobolds are between 2 and 3 feet tall and weigh between 25 and 35 pounds.",
        size: "Small",
        speed: "30 ft.",
        age: "Kobolds reach adulthood at age 6 and can live up to 120 years but rarely do so.",
        alignment: "Kobolds are fundamentally selfish, making them evil, but their reliance on the strength of their group makes them trend toward law.",
        language: "You can speak, read, and write Common and Draconic.",
        additional_ab: [
            { ab_name: "Darkvision", ab_desc: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
            { ab_name: "Grovel, Cower, and Beg", ab_desc: "As an action on your turn, you can cower pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against enemies within 10 feet of you that you can see. Once you use this trait, you can't use it again until you finish a short or long rest." },
            { ab_name: "Pack Tactics", ab_desc: "You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { ab_name: "Sunlight Sensitivity", ab_desc: "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight." },
        ]
    });
})

router.get('/Lizardfolk', function (req, res) {
    res.render('race', {
        title: "Somnium: Lizardfolk",
        main_title: "Races",
        sub_title: "Lizardfolk",
        ab_score: "Con +2; Wis +1",
        size_desc: "Lizardfolk are a little bulkier and taller than humans, and their colorful frills make them appear even larger.",
        size: "Medium",
        speed: "30 ft., swim 30 ft.",
        age: "Lizardfolk reach maturity around age 14 and rarely live longer than 60 years.",
        alignment: "Most lizardfolk are neutral. They see the world as a place of predators and prey, where life and death are natural processes. They wish only to survive, and prefer to leave other creatures to their own devices.",
        language: "You can speak, read, and write Common and Draconic.",
        additional_ab: [
            { ab_name: "Swim Speed", ab_desc: "You have a swimming speed of 30 feet." },
            { ab_name: "Bite", ab_desc: "Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike." },
            { ab_name: "Cunning Artisan", ab_desc: "As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan's tools, such as leatherworker's tools." },
            { ab_name: "Hold Breath", ab_desc: "You can hold your breath for up to 15 minutes at a time." },
            { ab_name: "Hunter's Lore", ab_desc: "You gain proficiency with two of the following skills of your choice: Animal Handling, Nature, Perception, Stealth, and Survival." },
            { ab_name: "Natural Armor", ab_desc: "You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor." },
            { ab_name: "Hungry Jaws", ab_desc: "In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points equal to your Constitution modifier (minimum of 1), and you can't use this trait again until you finish a short or long rest." },

        ]
    });
})

router.get('/Minotaur', function (req, res) {
    res.render('race', {
        title: "Somnium: Minotaur",
        main_title: "Races",
        sub_title: "Minotaur",
        ab_score: "Str +2; Con +1",
        size_desc: "Minotaurs average over 6 feet in height, and they have stocky builds.",
        size: "Medium",
        speed: "30 ft.",
        age: "Minotaurs mature and age at about the same rate as humans.",
        alignment: "Minotaurs who leave the walls of Skophos have the opportunity to be free of its culture and pursue chaotic alignments, while those who remain within the polis and its tyrannical regime tend toward lawful alignments.",
        language: "You can speak, read, and write Common and Giant.",
        additional_ab: [
            { ab_name: "Horns", ab_desc: "Your horns are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike." },
            { ab_name: "Goring Rush", ab_desc: "Immediately after you use the Dash action on your turn and move at least 20 feet, you can make one melee attack with your horns as a bonus action." },
            { ab_name: "Hammering Horns", ab_desc: "Immediately after you hit a creature with a melee attack as part of the Attack action on your turn, you can use a bonus action to attempt to shove that target with your horns. The target must be no more than one size larger than you and within 5 feet of you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you push it up to 10 feet away from you." },
            { ab_name: "Imposing Presence", ab_desc: "You have proficiency in one of the following skills of your choice: Intimidation or Persuasion." },

        ]
    });
})

router.get('/Orc', function (req, res) {
    res.render('race', {
        title: "Somnium: Orc",
        main_title: "Races",
        sub_title: "Orc",
        ab_score: "Str +2; Con +1",
        size_desc: "Orcs are usually over 6 feet tall and weigh between 230 and 280 pounds.",
        size: "Medium",
        speed: "30 ft.",
        age: "Orcs reach adulthood at age 12 and live up to 50 years.",
        alignment: " Orcs are vicious raiders, who believe that the world should be theirs. They also respect strength above all else and believe the strong must bully the weak to ensure that weakness does not spread like a disease. They are usually chaotic evil.",
        language: "You can speak, read, and write Common and Orcish.",
        additional_ab: [
            { ab_name: "Darkvision", ab_desc: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
            { ab_name: "Aggressive", ab_desc: "As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than you started." },
            { ab_name: "Primal Intuition", ab_desc: "You have proficiency in two of the following skills of your choice: Animal Handling, Insight, Intimidation, Medicine, Nature, Perception, and Survival." },
            { ab_name: "Powerful Build", ab_desc: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift." },

        ]
    });
})

router.get('/Satyr', function (req, res) {
    res.render('race', {
        title: "Somnium: Satyr",
        main_title: "Races",
        sub_title: "Satyr",
        ab_score: "Cha +2; Dex +1",
        size_desc: "Satyrs range from just under 5 feet to about 6 feet in height, with generally slender builds.",
        size: "Medium",
        speed: "35 ft.",
        age: "Satyrs mature and age at about the same rate as humans.",
        alignment: "Satyrs delight in living a life free of the mantle of law. They gravitate toward being good, but some have devious streaks and enjoy causing dismay.",
        language: "You can speak, read, and write Common and Sylvan.",
        additional_ab: [
            { ab_name: "Fey", ab_desc: "Your creature type is fey, rather than humanoid." },
            { ab_name: "Ram", ab_desc: "You can use your head and horns to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier." },
            { ab_name: "Magic Resistance", ab_desc: "You have advantage on saving throws against spells and other magical effects." },
            { ab_name: "Mirthful Leaps", ab_desc: "Whenever you make a long or high jump, you can roll a d8 and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal." },
            { ab_name: "Reveler", ab_desc: "You have proficiency in the Performance and Persuasion skills, and you have proficiency with one musical instrument of your choice." },
        ]
    });
})

router.get('/Sprite', function (req, res) {
    res.render('race', {
        title: "Somnium: Sprite",
        main_title: "Races",
        sub_races: [
            {
                sub_title: "Sprite (Spring)",
                ab_score: "Dex +2, Int +1",
                size_desc: "",
                size: "Small",
                speed: "30 ft., fly 30 ft.",
                age: "Any",
                alignment: "Any",
                language: "You can speak, read, and write Common and Sylvan.",
                additional_ab: [
                    { ab_name: "Type", ab_desc: "You are a Fey." },
                    { ab_name: "Fairy Flight", ab_desc: "You have a flying speed equal to your walking speed and can hover. This flight is magical and does not require the use of your wings (if you have them)." },
                    { ab_name: "Small Figure", ab_desc: "Due to your small size, you can not wield two-handed or heavy weapons as well as medium or heavy armor. In addition, you can not carry any creatures when flying." },
                    { ab_name: "Fairy Magic", ab_desc: "At 3rd level, You know the Speak with Plants spell. You can cast it without expending a spell slot, and you must finish a long rest before you can cast it this way again." },
                    { ab_name: "New Beginnings", ab_desc: "You have proficiency in Nature and Survival." },
                    { ab_name: "First Come First Serve", ab_desc: "Your fly speed increases to 50 ft." },
                ]
            },
            {
                sub_title: "Sprite (Summer)",
                ab_score: "Dex +2, Con +1",
                size_desc: "",
                size: "Small",
                speed: "30 ft., fly 30 ft.",
                age: "Any",
                alignment: "Any",
                language: "You can speak, read, and write Common and Sylvan.",
                additional_ab: [
                    { ab_name: "Type", ab_desc: "You are a Fey." },
                    { ab_name: "Fairy Flight", ab_desc: "You have a flying speed equal to your walking speed and can hover. This flight is magical and does not require the use of your wings (if you have them)." },
                    { ab_name: "Small Figure", ab_desc: "Due to your small size, you can not wield two-handed or heavy weapons as well as medium or heavy armor. In addition, you can not carry any creatures when flying." },
                    { ab_name: "Hard to Hit", ab_desc: "You can now use the Dodge action as a bonus action." },
                    { ab_name: "Sun Flare", ab_desc: "As an action, you can channel the sunlight that you have been gathering throughout the day and release it. Every creature within 30 ft of you have to make a Con saving throw or be blinded for 1 round." },
                ]
            },
            {
                sub_title: "Sprite (Fall)",
                ab_score: "Dex +2, Cha +1",
                size_desc: "",
                size: "Small",
                speed: "30 ft., fly 30 ft.",
                age: "Any",
                alignment: "Any",
                language: "You can speak, read, and write Common and Sylvan.",
                additional_ab: [
                    { ab_name: "Type", ab_desc: "You are a Fey." },
                    { ab_name: "Fairy Flight", ab_desc: "You have a flying speed equal to your walking speed and can hover. This flight is magical and does not require the use of your wings (if you have them)." },
                    { ab_name: "Small Figure", ab_desc: "Due to your small size, you can not wield two-handed or heavy weapons as well as medium or heavy armor. In addition, you can not carry any creatures when flying." },
                    { ab_name: "Darkvision", ab_desc: "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light." },
                    { ab_name: "Hide and Seek", ab_desc: "You have advantage on stealth checks." },
                    { ab_name: "Blend In", ab_desc: "You gain access to the spell Disguise Self and you can cast it without expending a spell slot. You can cast this once per long rest." },
                ]
            },
            {
                sub_title: "Sprite (Winter)",
                ab_score: "Dex +2, Str +1",
                size_desc: "",
                size: "Small",
                speed: "30 ft., fly 30 ft.",
                age: "Any",
                alignment: "Any",
                language: "You can speak, read, and write Common and Sylvan.",
                additional_ab: [
                    { ab_name: "Type", ab_desc: "You are a Fey." },
                    { ab_name: "Fairy Flight", ab_desc: "You have a flying speed equal to your walking speed and can hover. This flight is magical and does not require the use of your wings (if you have them)." },
                    { ab_name: "Hardened Warrior", ab_desc: "You are resistant to Cold damage." },
                    { ab_name: "Iron Wings", ab_desc: "You have proficiency in medium armor and 1 martial weapon of your choice." },
                    { ab_name: "Powerful Build", ab_desc: "You can now carry 1 creature of size Medium or smaller and you move at half your fly speed when carrying." },
                ]
            }
        ]
    });
})

router.get('/Tabaxi', function (req, res) {
    res.render('race', {
        title: "Somnium: Tabaxi",
        main_title: "Races",
        sub_title: "Tabaxi",
        ab_score: "Dex +2; Cha +1",
        size_desc: "Tabaxi are taller on average than humans and relatively slender.",
        size: "Medium",
        speed: "30 ft., climb 20 ft.",
        age: "Tabaxi have lifespans equivalent to humans.",
        alignment: "Tabaxi tend toward chaotic alignments, as they let impulse and fancy guide their decisions. They are rarely evil, with most of them driven by curiosity rather than greed or other dark impulses.",
        language: "You can speak, read, and write Common and one other language of your choice.",
        additional_ab: [
            { ab_name: "Darkvision", ab_desc: "You have a cat's keen senses, especially in the dark. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
            { ab_name: "Feline Agility", ab_desc: "Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns." },
            { ab_name: "Cat's Claws", ab_desc: "Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike." },
            { ab_name: "Cat's Talents", ab_desc: "You have proficiency in the Perception and Stealth skills." },
        ]
    });
})

router.get('/Tiefling', function (req, res) {
    res.render('race', {
        title: "Somnium: Tiefling",
        main_title: "Races",
        sub_title: "Tiefling",
        ab_score: "Cha +2; Int +1",
        size_desc: "Tieflings are about the same size and build as humans.",
        size: "Medium",
        speed: "30 ft.",
        age: "Tieflings mature at the same rate as humans but live a few years longer.",
        alignment: "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.",
        language: "You can speak, read, and write Common and Infernal.",
        additional_ab: [
            { ab_name: "Darkvision", ab_desc: "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
            { ab_name: "Hellish Resistance", ab_desc: "You have resistance to fire damage." },
            { ab_name: "Infernal Legacy", ab_desc: "You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell; you must finish a long rest in order to cast the spell again using this trait. Once you reach 5th level, you can also cast the darkness spell; you must finish a long rest in order to cast the spell again using this trait. Charisma is your spellcasting ability for these spells." },
        ]
    });
})

router.get('/Tortle', function (req, res) {
    res.render('race', {
        title: "Somnium: Tortle",
        main_title: "Races",
        sub_title: "Tortle",
        ab_score: "Str +2; Wis +1",
        size_desc: "Tortle adults stand 5 to 6 feet tall and average 450 pounds. Their shells account for roughly one-third of their weight.",
        size: "Medium",
        speed: "30 ft.",
        age: "Young tortles crawl for a few weeks after birth before learning to walk on two legs. They reach adulthood by the age of 15 and live an average of 50 years.",
        alignment: "Tortles tend to lead orderly, ritualistic lives. They develop customs and routines, becoming more set in their ways as they age. Most are lawful good. A few can be selfish and greedy, tending more toward evil, but it's unusual for a tortle to shuck off order in favor of chaos.",
        language: "You can speak, read, and write Aquan and Common.",
        additional_ab: [
            { ab_name: "Claws", ab_desc: "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of bludgeoning damage normal for an unarmed strike." },
            { ab_name: "Hold Breath", ab_desc: "You can hold your breath for up to 1 hour at a time. Tortles aren't natural swimmers, but they can remain underwater for some time before needing to come up for air." },
            { ab_name: "Natural Armor", ab_desc: "Due to your shell and the shape of your body, you are ill-suited to wearing armor. Your shell provides ample protection, however; it gives you a base AC of 17 (your Dexterity modifier doesn't affect this number). You gain no benefit from wearing armor, but if you are using a shield, you can apply the shield's bonus as normal." },
            { ab_name: "Shell Defense", ab_desc: "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell." },
            { ab_name: "Survival Instinct", ab_desc: "You gain proficiency in the Survival skill. Tortles have finely honed survival instincts." },
        ]
    });
})

router.get('/Triton', function (req, res) {
    res.render('race', {
        title: "Somnium: Triton",
        main_title: "Races",
        sub_title: "Triton",
        ab_score: "Str +1; Con +1; Cha +1",
        size_desc: "Tritons are slightly shorter than humans, averaging about 5 feet tall.",
        size: "Medium",
        speed: "30 ft., swim 30 ft.",
        age: "Tritons reach maturity around age 15 and can live up to 200 years.",
        alignment: "Tritons tend toward neutrality. Their culture encourages them to be mindful of life's currents, knowing when to harness fate's tides and when to flow along with them.",
        language: "You can speak, read, and write Common and Primordial.",
        additional_ab: [
            { ab_name: "Swim Speed", ab_desc: "You have a swimming speed of 30 feet." },
            { ab_name: "Amphibious", ab_desc: "You can breathe air and water." },
            { ab_name: "Control Air and Water", ab_desc: " A child of the sea, you can call on the magic of elemental air and water. You can cast fog cloud with this trait. Starting at 3rd level, you can cast gust of wind with it, and starting at 5th level, you can also cast wall of water with it. Once you cast a spell with this trait, you can't cast that spell with it again until you finish a long rest. Charisma is your spellcasting ability for these spells." },
            { ab_name: "Darkvision", ab_desc: "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
            { ab_name: "Emissary of the Sea", ab_desc: "Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas with beasts that can breathe water. They can understand the meaning of your words, though you have no special ability to understand them in return." },
            { ab_name: "Guardians of the Depths", ab_desc: "Adapted to even the most extreme ocean depths, you have resistance to cold damage." },
        ]
    });
})

router.get('/Warforged', function (req, res) {
    res.render('race', {
        title: "Somnium: Warforged",
        main_title: "Races",
        sub_title: "Warforged",
        ab_score: "Con +2; Choose any other +1",
        size_desc: "",
        size: "Medium",
        speed: "30 ft.",
        age: "A typical warforged is between two and thirty years old. The maximum warforged lifespan remains a mystery; so far, warforged have shown no signs of deterioration due to age. You are immune to magical aging effects.",
        alignment: "Most warforged take comfort in order and discipline, tending toward law and neutrality. But some have absorbed the morality, or lack thereof, of the beings with which they served.",
        language: "You can speak, read, and write Common and one other language of your choice.",
        additional_ab: [
            {
                ab_name: "Constructed Resilience",
                ab_desc: "You were created to have remarkable fortitude, represented by the following benefits:",
                sub_ab: [
                    {
                        ab_desc: "You have advantage on saving throws against being poisoned, and you have resistance to poison damage."
                    },
                    {
                        ab_desc: "You don't need to eat, drink, or breathe."
                    },
                    {
                        ab_desc: "You are immune to disease."
                    },
                    {
                        ab_desc: "You don't need to sleep, and magic can't put you to sleep."
                    },
                ]
            },
            { ab_name: "Sentry's Rest", ab_desc: "When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious, and you can see and hear as normal." },
            {
                ab_name: "Integrated Protection",
                ab_desc: "Your body has built-in defensive layers, which can be enhanced with armor:",
                sub_ab: [
                    {
                        ab_desc: "You gain a +1 bonus to Armor Class."
                    },
                    {
                        ab_desc: "You can don only armor with which you have proficiency. To don armor other than a shield, you must incorporate it into your body over the course of 1 hour, during which you remain in contact with the armor. To doff armor, you must spend 1 hour removing it. You can rest while donning or doffing armor in this way."
                    },
                    {
                        ab_desc: "While you live, the armor incorporated into your body can't be removed against your will."
                    },
                ]
            },
            { ab_name: "Specialized Design", ab_desc: "You gain one skill proficiency and one tool proficiency of your choice." },
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

router.get('/Yuan-ti', function (req, res) {
    res.render('race', {
        title: "Somnium: Yuan-ti",
        main_title: "Races",
        sub_title: "Yuan-ti",
        ab_score: "Cha +2; Int +1",
        size_desc: "Purebloods match humans in average size and weight.",
        size: "Medium",
        speed: "30 ft.",
        age: "Purebloods mature at the same rate as humans and have lifespans similar in length to theirs.",
        alignment: "Purebloods are devoid of emotion and see others as tools to manipulate. They care little for law or chaos and are typically neutral evil.",
        language: "You can speak, read, and write Common, Abyssal, and Draconic.",
        additional_ab: [
            { ab_name: "Darkvision", ab_desc: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
            { ab_name: "Innate Spellcasting", ab_desc: "You know the poison spray cantrip. You can cast animal friendship an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast suggestion with this trait. Once you cast it, you can't do so again until you finish a long rest. Charisma is your spellcasting ability for these spells." },
            { ab_name: "Magic Resistance", ab_desc: "You have advantage on saving throws against spells and other magical effects." },
            { ab_name: "Poison Immunity", ab_desc: "You are immune to poison damage and the poisoned condition." },
        ]
    });
})

module.exports = router;