const express = require("express");
const router = express.Router();
const { request, response } = require('express');

//layout: false or express will start looking for layout with main.handlebars by default
router.get('/', function(req,res){
    res.render('index', {title: "Home Page of Somnium"});
})

module.exports = router;