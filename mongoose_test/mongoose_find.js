var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

//讲回调函数绑定到一个connection对象上
var db = mongoose.connection;
db.on('error', function() {
    console.log('[MongoDB]Error!');
});
db.once('open', function() {
    // we're connected!
    console.log('[MongoDB]Coonected!');
});

//create a schema;
var catSchema = new mongoose.Schema ({
    name: String,
});
catSchema.methods.meow = function () {
    var greeting = this.name ? `Moew, My name is ${this.name}` : `Meow, I don't have a name`;
    console.log(greeting);
};

//create a model
var catModel = mongoose.model('cat', catSchema);
catModel.find({'name': 'gouqi'}, function(err, cats) {
    if(err) console.error(err);
    if(cats.length === 0) {
        console.log('Not find cat');
    } else {
        for(let cat of cats) {
            cat.meow();
        }
    }
})