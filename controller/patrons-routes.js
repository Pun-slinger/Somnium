const express = require("express");
const router = express.Router();
const { request, response } = require('express');

//layout: false or express will start looking for layout with main.handlebars by default
router.get('/the-grand-designer', function (req, res) {
    res.render('patron', { 
        title: "Somnium: 00 - The Grand Designer", 
        name: "00 - The Grand Designer",
        overview: "Created as the first Warforged and once the Divine War was over, 00 was chosen to be a Warforged representative and acts as Nova’s right hand when it comes to matters relating the Warforged and other races. Thus, 00 is the only being other than Nova with the ability to create other Warforged. 00 represents creativity and its limitless potential. This is represented clearly in the Warforged created by 00 as they are much more complex in terms of design and functions.",
        outlooks: [
            "Let your mind flow and be free!",
            "The only limiters are the ones put on by yourself",
            "Creativity is contagious. Pass it on!"
        ],
        image_filename: "grand-designer.jpg"
    });
})

router.get('/the-abyssal-cacophony', function (req, res) {
    res.render('patron', { 
        title: "Somnium: Azimohz – The Abyssal Cacophony", 
        name: "Azimohz – The Abyssal Cacophony",
        overview: "While Xehaydiel was the largest threat from the depths, Azimohz held dominance over the skies. Whenever it moves, a massive thunderstorm would formed around it and move along with it, decimating anything it crosses. A creation of when the world was first created, Azimohz was forgotten by its creator and left to roam freely. The inhabitants however, could not survive along with this titan anymore and wage a battle that ended with Azimohz being sealed……. for now.",
        outlooks: [
            "The weak will crumble",
            "I am the alpha and if you dare question it, try me!",
            "Let the elements be your guide"
        ],
        image_filename: "abyssal-cacophony.jpg"
    });
})

router.get('/the-great-tales', function (req, res) {
    res.render('patron', { 
        title: "Somnium: Hanako - The Great Tales", 
        name: "Hanako - The Great Tales",
        overview: "One of the Spirit Kings residing within the Feywild. Hanako is very friendly and protective towards the creatures residing in the forest near the castle of the Empress of the Feywild. She grants her powers to those that cares for the balance nature that both The Feywild and The Void holds and are willing to assist her in watching over it from the material plane.",
        outlooks: [
            "Turn violence away from her Majesty’s domain",
            "Ease the suffering of others for empathy is a blessing",
            "Your words are more powerful than the swing of a blade, wield it wisely!"
        ],
        image_filename: "great-tales.jpg"
    });
})

router.get('/the-corrupting-calamity', function (req, res) {
    res.render('patron', { 
        title: "Somnium: Immienth – The Corrupting Calamity", 
        name: "Immienth – The Corrupting Calamity",
        overview: "A demon originating from Movys, he entered the material plane with the intention of simply seeing what these mortals are willing to do for power in return for his amusement. Currently, Immienth is being sealed within a book within the library of the Mages Assembly but a simple seal isn't enough to stop this demon's fun.",
        outlooks: [
            "They call it cheating, I prefer to call it playing to my advantage",
            "Let others take the risk for you",
            "Others’ opinion truly means nothing to me"
        ],
        image_filename: "corrupting-calamity.png"
    });
})

router.get('/the-dragon-collective', function (req, res) {
    res.render('patron', { 
        title: "Somnium: The Dragon Collective", 
        name: "The Dragon Collective",
        overview: "The collective consciousness of the Mad Dragons that once threaten the world are currently under the watch of Ayrveog. Despite being unable to directly influence mortals to do their bidding, those that inherited the will of these dragons craving for destruction will be given a portion of the power needed to free their masters from their prison.",
        outlooks: [
            "We are you, you are us",
            "All dragons are inherently foolish, we are just fools enough to see the truth",
            "They talk too much, shut them up with your strength!"
        ],
        image_filename: "dragon-collective.jpg"
    });
})

router.get('/the-mad-prophet', function (req, res) {
    res.render('patron', { 
        title: "Somnium: The Mad Prophet", 
        name: "The Mad Prophet",
        overview: "Once a normal wizard obsessed with immortality, he scoured the hells and heavens and everything in between trying to achieve it. He was known for all the horrible experiments he conducted. In the end, he finally reached immortality but sacrificed his sanity in the process. The Mad Prophet now lies chained up beneath Fruaqua for he now no longer have purpose but was still deemed a menace to society.",
        outlooks: [
            "If your desire is strong enough, be willingly to pay whatever is needed",
            "When you finally achieved it…",
            "Is it worth it in the end...? HAHahahAHahahAHahahahahaaaaa"
        ],
        image_filename: "mad-prophet.jpg"
    });
})

router.get('/the-silent-jester', function (req, res) {
    res.render('patron', { 
        title: "Somnium: The Silent Jester", 
        name: "The Silent Jester",
        overview: "Ever failed to keep a secret? Want to know what awaits you if you were discovered to be untrustworthy? Being stripped of his ability to speak was The Silent Jester’s punishment. Despite this, you can still always see him with a wide smile on his face. The Silent Jester now grants his powers to those that view life through lenses of humor but also knows how to keep a good secret. Cause where’s the fun in revealing the good part?",
        outlooks: [
            "Live life with a smile because it’s all a joke",
            "Enjoy the moment, no regrets as you may not have a tomorrow",
            "ALWAYS honor a secret",
            "Breaking a promise is NEVER worth the cost"
        ],
        image_filename: "silent-jester.jpg"
    });
})

router.get('/the-scouring-terror', function (req, res) {
    res.render('patron', { 
        title: "Somnium: Xahaydiel - The Scouring Terror", 
        name: "Xahaydiel - The Scouring Terror",
        overview: "The head of the Leviathans used to be a terrifying force that threaten Isox. He waged a war with the mainland and the war eventually ended with a peace treaty signed by both sides, or so it seems. The Scouring Terror now grants his power to those that will assist him in breaking the pact behind the scenes and allow him to raise destruction once again.",
        outlooks: [
            "Binds put on you can only hold for so long",
            "The strong always crushes the weak",
            "Justice can not be served without strength",
            "Why follow rules when there are things to be broken?"
        ],
        image_filename: "scouring-terror.png"
    });
})

module.exports = router;