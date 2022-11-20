const express = require("express");
const router = express.Router();
const { request, response } = require('express');

//layout: false or express will start looking for layout with main.handlebars by default
router.get('/the-grand-designer', function (req, res) {
    res.render('patron', { 
        title: "Somnium: 00 - The Grand Designer", 
        name: "00 - The Grand Designer",
        overview: "Created as the first Warforged and once the Divine War was over, 00 was chosen to be the Warforged representative and acts as Nova’s right hand when it comes to matters relating the Warforged with other races. In addition, 00 is the only being other than Nova blessed with the ability to create other Warforged. 00 represents creativity as well as its infinite potential and preaches for the pursue of creation unbound by any limitations.",
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
        overview: "While Xahaydiel was the largest threat from the depths, Azimohz held dominance over the skies. Whenever it moves, the massive thunderstorm surrounding it would follow and decimated anything it in its path.  A creation of when the world was first created, Azimohz was forgotten by its creator and left to roam freely. The inhabitants however, could not survive along with this titan anymore and put an end to the terror in the skies … for now.",
        outlooks: [
            "The weak will crumble like the insects they are",
            "Ignorant fools need to be put in their place",
            "Throughout the Heavens and earth, I alone am the honored one"
        ],
        image_filename: "abyssal-cacophony.jpg"
    });
})

router.get('/the-great-tales', function (req, res) {
    res.render('patron', { 
        title: "Somnium: Hanako - The Great Tales", 
        name: "Hanako - The Great Tales",
        overview: "One of the Spirit Kings residing within the Feywild. Hanako is very friendly and protective towards those residing in the forest near the castle of the Empress of the Feywild. She grants her powers to those who cares for the balance nature that both The Feywild and The Void possesses and are willing to assist her in watching over it.",
        outlooks: [
            "Turn violence away from her Majesty’s domain",
            "Ease the suffering of others, for empathy is a blessing",
            "Your words are more powerful than the swing of a blade, wield it wisely!"
        ],
        image_filename: "great-tales.jpg"
    });
})

router.get('/the-corrupting-calamity', function (req, res) {
    res.render('patron', { 
        title: "Somnium: Immienth – The Corrupting Calamity", 
        name: "Immienth – The Corrupting Calamity",
        overview: "A demon originating from Movys, he entered the material plane with the intention of simply seeing what these mortals are willing to do for power in return for his amusement. Currently, Immienth is being sealed within a book within the library of the Mages Assembly, but let’s be real now… The games never stop as long as there are still players…",
        outlooks: [
            "They call it cheating, I prefer to call it playing to my advantage",
            "Let others take the risk for you",
            "Others’ opinion truly means nothing to me",
            "Despair and desperation are truly amusing to watch, give me more!"
        ],
        image_filename: "corrupting-calamity.png"
    });
})

router.get('/the-dragon-collective', function (req, res) {
    res.render('patron', { 
        title: "Somnium: The Dragon Collective", 
        name: "The Dragon Collective",
        overview: "The collective consciousness of the Mad Dragons that once threaten the world are currently under the watch of Ayrveog. Despite being unable to directly influence mortals to do their bidding, those that inherited the will of the Mad Dragons craving for destruction will be given a portion of the power needed to free their masters from their prison.",
        outlooks: [
            "We are you, you are us",
            "All dragons are inherently foolish, we however are foolish enough to see the truth",
            "Do not waste your energy preaching, take action instead and prove yourself useful!"
        ],
        image_filename: "dragon-collective.jpg"
    });
})

router.get('/the-mad-prophet', function (req, res) {
    res.render('patron', { 
        title: "Somnium: The Mad Prophet", 
        name: "The Mad Prophet",
        overview: "Once a normal wizard obsessed with immortality, he scoured the hells and heavens and everything in between trying to achieve it. He was known for all the horrible experiments he conducted. In the end, he finally reached immortality but sacrificed his sanity in the process. The Mad Prophet now lies chained up beneath Fruaqua for the man that was once a genius, now a broken maniac, hollow with no purpose.",
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
        overview: "The head of the Leviathans used to be a terrifying force that threaten Isox. He waged a war with the mainland that eventually ended with a peace treaty signed by both sides, or so it seems. The Scouring Terror now grants his power to those that will assist him in breaking free from the pact and allow him to rain chaos once again.",
        outlooks: [
            "Nothing is eternal. All will fall. Sooner. Or. Later.",
            "The strong always crushes the weak",
            "Justice can not be served without strength",
            "Why follow rules when there are things to be broken?"
        ],
        image_filename: "scouring-terror.png"
    });
})

router.get('/the-abandoned', function (req, res) {
    res.render('patron', { 
        title: "Somnium: Malery – The Abandoned", 
        name: "Malery – The Abandoned",
        overview: "Created by a scientist obsessed with “the perfect being”, Malery was a doll made from the scraps of fallen warforged and given life but she was not what her creator wanted. She was hated beyond belief and seeing that she will not be accepted, Malery wished for a mate from her creator, someone for her to love and loved her as well. The scientist rejected her request and in a feat of rage, she ended his life. Now free from the strings of her creator, Malery searches for those who are willing to love her and stay by her side for all of eternity!",
        outlooks: [
            "Kindness do not exist",
            "Everything has strings attached and I will be the one to pull on them",
            "No! Don’t leave me behind!",
            "YOU WILL STAY WITH ME FOREVER!"
        ],
        image_filename: "the_abandoned.jpg"
    });
})

module.exports = router;