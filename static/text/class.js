var artificer = "Artificer";
var barbarian = "Barbarian";
var bard = "Bard";
var cleric = "Cleric";
var druid = "Druid";
var fighter = "Fighter";
var monk = "Monk";
var paladin = "Paladin";
var ranger = "Ranger";
var rogue = "Rogue";
var sorcerer = "Sorcerer";
var warlock = "Warlock";
var wizard = "Wizard";

all_classes_and_sub = [
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
        name: "Druid",
        subclasses: [{ name: "Circle of Decay", link: "/circle-of-decay" }]
    },
    {
        name: "Fighter",
        subclasses: [{ name: "Starglade Blood Battle Style", link: "/starglade-blood-battle-style" }, 
                     { name: "Shapeless Style", link: "/shapeless-style" }]
    },
    {
        name: "Monk",
        subclasses: [{ name: "Way of the Destruction Style", link: "/way-of-the-destruction-style" }, 
                     { name: "Way of the Silver Wing", link: "/way-of-the-silver-wing" }, 
                     { name: "Way of the Tactician", link: "/way-of-the-tactician" }]
    },
    {
        name: "Paladin",
        subclasses: [{ name: "Oath of Sacrifice", link: "/oath-of-sacrifice" }, 
                     { name: "Oath of The Void", link: "/oath-of-the-void" }]
    },
    {
        name: "Ranger",
        subclasses: [{ name: "Planetary Observer", link: "/planetary-observer" },
                     { name: "Serpent Whisperer", link: "/serpent-whisperer" }]
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
        name: "Warlock",
        subclasses: [{ name: "Marionettist", link: "/marionettist" }]
    },
    {
        name: "Wizard",
        subclasses: [{ name: "School of Chorosurgy", link: "/school-of-chorosurgy" }]
    }
]

all_classes_and_sub.sort(function(class1, class2){
    if(class1.name < class2.name) {return -1;}
    if(class1.name > class2.name) {return 1;}
    return 0;
});

for(let i = 0; i < all_classes_and_sub.length; i++){
    all_classes_and_sub[i].subclasses.sort(function(subclass1, subclass2){
        if(subclass1.name < subclass2.name) {return -1;}
        if(subclass1.name > subclass2.name) {return 1;}
        return 0;
    })
}

module.exports = {
    artificer,barbarian,bard,cleric,druid,fighter,monk,paladin,ranger,rogue,sorcerer,warlock,wizard,all_classes_and_sub
}