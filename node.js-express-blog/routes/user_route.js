var express = require('express');
var router = express.Router();

router.use('/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
  }, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
  });

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next router
    if (req.params.id === '0') {
        next('route');//跳到同一个路由的下一个子堆栈
    } 
    // otherwise pass control to the next middleware function in this stack
    else next(); //
    }, function (req, res, next) {
    // send a regular page
    res.render('user', {
        data: `regularID: ${req.params.id}`
    })
});

// handler for the /user/:id path, which sends a special page
router.get('/:id', function (req, res, next) {
    res.render('user', {
        data: `specialID: ${req.params.id}`
    })
});

module.exports = router;