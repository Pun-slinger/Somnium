const classes = require("../text/class.js");

const casting_time = require("../text/casting-time.js");

const spells_info = require("../text/spells-info.js");
const spells_schools = require("../text/spells-school.js");
const { all } = require("express/lib/application");

var erasing_edge = {
    name: "Erasing Edge",
    class: [classes.wizard],
    subclass: [`Chorosurgy ${classes.wizard}`],
    level: "1st",
    school: "Chorosurgy",
    time: casting_time.bonus,
    time_desc: "",
    range: spells_info.touch,
    component: "S",
    duration: `${spells_info.concen}, up to 1 minute`,
    spell_desc: [
        {
            name: "",
            main: "You surround the edge of a weapon with spatial magic, extending its range to 10ft. The next time you strike a target with this weapon, it deals an extra 1d6 Force damage and the spells ends.",
            sub: []
        },
        {
            name: "At Higher Levels",
            main: "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st."
        }
    ]
}

var echo_recall = {
    name: "Echo Recall",
    class: [classes.wizard],
    subclass: [`Chorosurgy ${classes.wizard}`],
    level: "1st",
    school: "Chorosurgy",
    time: casting_time.action,
    time_desc: "",
    range: spells_info.self,
    component: "V, S, M (a mirror fragment)",
    duration: spells_info.instant,
    spell_desc: [
        {
            name: "",
            main: "You manifest an echo of yourself in an unoccupied space next to you. The echo has 15 AC, 1 hit point and is immune to all conditions. The echo disappears after 1 minute, when you either:",
            sub: [
                "Are more than 30ft away from it",
                "Are incapacitated",
                "Dismiss it using a bonus action"
            ]
        },
        {
            name: "",
            main: "As a bonus action, you can teleport back to the location of the echo and the echo then vanishes immediately after.",
            sub: []
        }
    ]
}

var repulse = {
    name: "Repulse",
    class: [classes.wizard],
    subclass: [`Chorosurgy ${classes.wizard}`],
    level: "2nd",
    school: "Chorosurgy",
    time: casting_time.bonus,
    time_desc: "",
    range: spells_info.self,
    component: "S",
    duration: spells_info.instant,
    spell_desc: [
        {
            name: "",
            main: "You push against the space next to you and propel yourself 15ft in a direction. Each creature adjacent to your point of origin must make a Dexterity saving throw or take 2d6 Force damage on a failed save and half as much on a successful one.",
            sub: []
        },
        {
            name: "At Higher Level",
            main: "When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd.",
            sub: []
        }
    ]
}

var planar_anchor = {
    name: "Planar Anchor",
    class: [classes.wizard],
    subclass: [`Chorosurgy ${classes.wizard}`],
    level: "2nd",
    school: "Chorosurgy",
    time: casting_time.react,
    time_desc: "",
    range: spells_info.feet(30),
    component: "V, S",
    duration: spells_info.instant,
    spell_desc: [
        {
            name: "",
            main: "When a creature within range attempts to teleport or to leave its current plane by any means, as a reaction you target the creature with this spell and it must succeed on a Wisdom saving throw or take 2d10 Force damage and the attempt to teleport or leave the plane fails. On a successful save, it only takes half the damage.",
            sub: []
        },
        {
            name: "At Higher Level",
            main: "When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d10 for each slot level above 2nd.",
            sub: []
        }
    ]
}

var reflect = {
    name: "Reflect",
    class: [classes.wizard],
    subclass: [`Chorosurgy ${classes.wizard}`],
    level: "2nd",
    school: "Chorosurgy",
    time: casting_time.react,
    time_desc: "",
    range: spells_info.feet(30),
    component: "V, S",
    duration: spells_info.instant,
    spell_desc: [
        {
            name: "",
            main: "When a range attack misses you, you can then redirect it back towards a target within range. Make a range spell attack and the reflected attack maintains all of its properties and the target must make any relevant saving throws against its own spell save DC. Reflected attacks with effects with a duration greater than instantaneous last until the end of your next turn before ending.",
            sub: []
        }
    ]
}

var spatial_subtraction = {
    name: "Spatial Subtraction",
    class: [classes.wizard],
    subclass: [`Chorosurgy ${classes.wizard}`],
    level: "3rd",
    school: "Chorosurgy",
    time: casting_time.action,
    time_desc: "",
    range: spells_info.feet(30),
    component: "S",
    duration: spells_info.instant,
    spell_desc: [
        {
            name: "",
            main: "As an action, you pull on the space between yourself and a creature within 30ft of you that you can see and either shift yourself up to 30ft to an unoccupied space closer to the creature or shift it up to 30ft to an unoccupied space closer to you.",
            sub: []
        }
    ]
}

var pocketcache = {
    name: "Pocketcache",
    class: [classes.wizard],
    subclass: [`Chorosurgy ${classes.wizard}`],
    level: "3rd",
    school: "Chorosurgy",
    time: casting_time.action,
    time_desc: "",
    range: spells_info.touch,
    component: "S",
    duration: "1 hour",
    spell_desc: [
        {
            name: "",
            main: "As an action, you can touch an object that weights no more than 30 pounds. You can send the object to an extradimensional space, where it remains for up to 1 hour. Until the end of the duration, you can use your bonus action to summon the object in your hand or in any space within 30 ft of you. The space can only hold 1 object and any attempts to put a different object into it while the dimension is occupied, the stored object will be ejected at your feet and will be replaced by the newer object.",
            sub: []
        }
    ]
}

var dimensional_prison = {
    name: "Dimensional Prison",
    class: [classes.wizard],
    subclass: [`Chorosurgy ${classes.wizard}`],
    level: "4th",
    school: "Chorosurgy",
    time: casting_time.action,
    time_desc: "",
    range: spells_info.feet(30),
    component: "V, S, M",
    duration: `${spells_info.concen}, up to 1 minute`,
    spell_desc: [
        {
            name: "",
            main: "You warp space in a 10 ft cube up to 30 ft from you and traps all creatures caught within it. The cube is 1/4 inch thick and lasts for the duration. If the cube cuts through a creature's space when it appears, the creature is pushed to one side of the cube (your choice which side). Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by dispel magic. A disintegrate spell destroys the wall instantly, however.",
            sub: []
        }
    ]
}

var reality_vault = {
    name: "Reality Vault",
    class: [classes.wizard],
    subclass: [`Chorosurgy ${classes.wizard}`],
    level: "4th",
    school: "Chorosurgy (ritual)",
    time: casting_time.minute(1),
    time_desc: "",
    range: spells_info.touch,
    component: "V, S, M (up to 5 precious gems worth 250 gp total)",
    duration: "Until dispelled",
    spell_desc: [
        {
            name: "",
            main: "The caster will trace conjuration sigils around the gems and a rift in space, roughly 2 feet in diameter will open above each gem. Up to 100 lbs of nonliving material to be stored within each space associated with each gem. While stored, the items do not decay, age or weather. The caster can assign command words for the gems used in the spell and an action is required to speak a command word. When spoken, the contents stored within a gem is released onto the ground. If the spell is dispelled, the contents are also released.",
            sub: []
        }
    ]
}

var pulsar = {
    name: "Pulsar",
    class: [classes.wizard],
    subclass: [`Chorosurgy ${classes.wizard}`],
    level: "6th",
    school: "Chorosurgy",
    time: casting_time.action,
    time_desc: "",
    range: spells_info.feet(30),
    component: "V, S, M",
    duration: spells_info.instant,
    spell_desc: [
        {
            name: "",
            main: "You open a portal to a pulsar and unleash a beam of energy that is 100 ft long and 5 ft wide. Each creature in the line must succeed on a Dexterity saving throw or take 12d6 Radiant damage and is Blinded for 1 minute. On a successful save, the target takes half the damage and is not Blinded.",
            sub: []
        },
        {
            name: "",
            main: "A creature Blinded by this spell can make a Constitution saving throw at the end of each of its turn, no longer Blinded on a successful save.",
            sub: []
        },
        {
            name: "At Higher Levels",
            main: "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 for each slot level above 5th.",
            sub: []
        }
    ]
}

var vacuum = {
    name: "Vacuum",
    class: [classes.wizard],
    subclass: [`Chorosurgy ${classes.wizard}`],
    level: "6th",
    school: "Chorosurgy",
    time: casting_time.action,
    time_desc: "",
    range: spells_info.feet(30),
    component: "V, S, M",
    duration: `${spells_info.concen}, up to 1 minute`,
    spell_desc: [
        {
            name: "",
            main: "You eliminate all air in a 60 ft radius cube from a point within range. A creature entering the area or starting its turn there must make a Constitution saving throw. The creature begins to suffocate on a failed save or be able to hold their breath for a number of rounds equal to its Constitution modifier (minimum of 1 round).",
            sub: []
        },
        {
            name: "",
            main: "While a creature is holding its breath in the area, whenever it takes damage, it must succeed on a Constitution saving throw or begin suffocating.",
            sub: []
        },
        {
            name: "",
            main: "While a creature is suffocating, its movement speed is halved and can survive a number of rounds equal to its Constitution modifier (minimum of 1 round). At the start of its first turn after these rounds, it drops to 0 hit points and is dying. Once a creature leaves the vacuum, it is no longer under the effects of the spell and can breathe normally.",
            sub: []
        }
    ]
}

var spacial_rend = {
    name: "Spatial Rend",
    class: [classes.wizard],
    subclass: [`Chorosurgy ${classes.wizard}`],
    level: "7th",
    school: "Chorosurgy",
    time: casting_time.action,
    time_desc: "",
    range: spells_info.feet(120),
    component: "V, S, M (a pearl worth at least 250 gp)",
    duration: spells_info.instant,
    spell_desc: [
        {
            name: "",
            main: "You manifest and releases a vertical wave of spacial energy that is 5 ft wide and travels up to 120 ft in a line. Each creature in the wave’s path must make a Dexterity saving throw. It takes 8d8 Force damage on a failed save and half as much on a successful save. The wave leaves behind a tear in space that is emitting gravitational energy. Creatures within 10ft of the tear must make a Constitution saving throw or be pulled towards the tear.",
            sub: []
        },
        {
            name: "At Higher Level",
            main: "When you cast this spell using a spell slot of 8th level or higher, the extra damage increases by 1d8 for each slot level above 7th.",
            sub: []
        }
    ]
}

var nucleus = {
    name: "Nucleus",
    class: [classes.wizard],
    subclass: [`Chorosurgy ${classes.wizard}`],
    level: "8th",
    school: "Chorosurgy",
    time: casting_time.action,
    time_desc: "",
    range: spells_info.feet(120),
    component: "V, S, M",
    duration: spells_info.instant,
    spell_desc: [
        {
            name: "",
            main: "You create a sphere in your hand and release it up to 120 ft from you. The sphere then expands into a 15 ft radius spherical space. As an action, you can then compress the space in the sphere, aiming to erase anything within it. Creatures in the sphere must succeed on a Constitution saving throw or take 7d10+30 Force damage and if a creature’s HP is reduced to 0 from this damage, it is rendered to nothingness. All items within the sphere’s radius that are non-magical are also destroyed and erased.",
            sub: []
        }
    ]
}

var all_spells = [
    erasing_edge,
    echo_recall,
    repulse,
    planar_anchor,
    reflect,
    spatial_subtraction,
    pocketcache,
    dimensional_prison,
    reality_vault,
    pulsar,
    vacuum,
    spacial_rend,
    nucleus
]

all_spells.sort(function(spell1, spell2){
    if(spell1.name > spell2.name) {return -1;}
    if(spell1.name < spell2.name) {return 1;}
    return 0;
});

module.exports = {
    all_spells
}