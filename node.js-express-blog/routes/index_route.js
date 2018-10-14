var express = require('express');
var router = express.Router();
var catModel = require('./model/catModel');

router.get('/', function(res, req){
    //ask for data 
    catModel.find({}, function(err, cats) {
        //按照小写字母顺序排序
        cats.sort((a, b) => {
            return a.name.toLowerCase() > b.name.toLowerCase();
        });
        //render the ejs file
        req.render('index', {
            article: {
                title: "Cats Show",
                content: "Show the cats which name is famous"
            },
            pets: cats
        });
    });
});

module.exports = router;