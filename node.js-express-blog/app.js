var express = require('express');
var app = express();
var index_router = require('./routes/index_route');
var user_router = require('./routes/user_route');

//set template to ejs
app.set('view engine','ejs');
app.set('views', __dirname + '/views') ;

//开放静态文件访问
app.use(express.static('public'));

//route
app.use('/', index_router);
app.use('/user', user_router);


app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(80, () => {
    console.log("App listeniing on port 80");
});
