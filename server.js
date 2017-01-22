var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');
var results = require('./public/scripts/results')

var app = express();


app.use(express.static('public'));
app.use('/scripts/results', results);

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res){
  res.sendFile(path.join (__dirname, 'public/views/index.html'));
});

//when the Server receives it, create the logic to compute the number in 4 ways:
//(1) addition, (2) subtraction, (3) multiplication, and (4) division.

//you can use router.post OR app.post
// router.post('/division', function(req, res){

  //some code here

// });
app.listen(3000);
