var artificer = "Artificer";

var anti_magic = { name: "Path of Anti Magic", link: "/path-of-anti-magic" };

var barbarian = {
    name: "Barbarian",
    subclasses: {
        anti_magic: anti_magic
    },
    subclass_list: [anti_magic]
}

var college_symphony = { name: "College of Symphony", link: "/college-of-symphony" }

var bard = {
    name: "Bard",
    subclasses: {
        college_symphony: college_symphony
    },
    subclass_list: [college_symphony]
}

var emotion_domain = { name: "Emotion Domain", link: "/emotion-domain" }

var cleric = {
    name: "Cleric",
    subclasses: {
        emotion_domain: emotion_domain
    },
    subclass_list: [emotion_domain]
}

var cicle_decay = { name: "Circle of Decay", link: "/circle-of-decay" }

var druid = {
    name: "Druid",
    subclasses: {
        cicle_decay: cicle_decay
    },
    subclass_list: [cicle_decay]
}

var starglade = { name: "Starglade Blood Battle Style", link: "/starglade-blood-battle-style" }
var shapeless = { name: "Shapeless Style", link: "/shapeless-style" }

var fighter = {
    name: "Fighter",
    subclasses: {
        starglade: starglade,
        shapeless: shapeless
    },
    subclass_list: [starglade, shapeless]
}

var destruction_style = { name: "Way of the Destruction Style", link: "/way-of-the-destruction-style" }
var silver_wing = { name: "Way of the Silver Wing", link: "/way-of-the-silver-wing" }
var tactician_way = { name: "Way of the Tactician", link: "/way-of-the-tactician" }

var monk = {
    name: "Monk",
    subclasses: {
        destruction_style: destruction_style,
        silver_wing: silver_wing,
        tactician_way: tactician_way
    },
    subclass_list: [destruction_style, silver_wing, tactician_way]
}

var sacrifice_oath = { name: "Oath of Sacrifice", link: "/oath-of-sacrifice" }
var void_oath = { name: "Oath of The Void", link: "/oath-of-the-void" }

var paladin = {
    name: "Paladin",
    subclasses: {
        sacrifice_oath: sacrifice_oath,
        void_oath: void_oath
    },
    subclass_list: [sacrifice_oath, void_oath]
}

var planetary_observer = { name: "Planetary Observer", link: "/planetary-observer" }
// var serpent_whisperer = { name: "Serpent Whisperer", link: "/serpent-whisperer" }

var ranger = {
    name: "Ranger",
    subclasses: {
        planetary_observer: planetary_observer,
        // serpent_whisperer: serpent_whisperer
    },
    // subclass_list: [planetary_observer, serpent_whisperer]
    subclass_list: [planetary_observer]
}

var pirate = { name: "Pirate", link: "/pirate" }

var rogue = {
    name: "Rouge",
    subclasses: {
        pirate: pirate
    },
    subclass_list: [pirate]
}

var demonic_bloodline = { name: "Demonic Bloodline", link: "/demonic-bloodline" }

var sorcerer = {
    name: "Sorcerer",
    subclasses: {
        demonic_bloodline: demonic_bloodline
    },
    subclass_list: [demonic_bloodline]
}

var marionettist = { name: "Marionettist", link: "/marionettist" }

var warlock = {
    name: "Warlock",
    subclasses: {
        marionettist: marionettist
    },
    subclass_list: [marionettist]
}

var chorosurgy = { name: "School of Chorosurgy", link: "/school-of-chorosurgy" }

var wizard = {
    name: "Wizard",
    subclasses: {
        chorosurgy: chorosurgy
    },
    subclass_list: [chorosurgy]
}

all_classes_and_sub = [
    barbarian,
    bard,
    cleric,
    druid,
    fighter,
    monk,
    paladin,
    ranger,
    rogue,
    sorcerer,
    warlock,
    wizard
]

all_classes_and_sub.sort(function(class1, class2){
    if(class1.name < class2.name) {return -1;}
    if(class1.name > class2.name) {return 1;}
    return 0;
});

for(let i = 0; i < all_classes_and_sub.length; i++){
    all_classes_and_sub[i].subclass_list.sort(function(subclass1, subclass2){
        if(subclass1.name < subclass2.name) {return -1;}
        if(subclass1.name > subclass2.name) {return 1;}
        return 0;
    })
}

module.exports = {
    artificer,barbarian,bard,cleric,druid,fighter,monk,paladin,ranger,rogue,sorcerer,warlock,wizard,all_classes_and_sub
}