//创建一个mongoose对象并连接到db
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

//create a schema
var catSchema = new mongoose.Schema ({
    name: String,
});


var catData = {
    name: 'gouqi'
}

catSchema.create(catData, function (err, cat) {
    if (err) {
      return next(err)
    } else {
      return res.redirect('/profile');
    }
  });

// //create a model
// var catModel = mongoose.model('cat', catSchema);

// //create a document
// var gouqi = new catModel({
//     name: 'gouqi'
// });

// gouqi.save(function(err, ducument) {
//     if(err) console.log(err);
//     gouqi.meow();
// })