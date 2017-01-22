var express = require('express');
var router = express.Router();
var answer = 0;
var bodyParser = require ('body-parser');
router.use(bodyParser.urlencoded({extended:true}));

//when the Server receives it, create the logic to compute the number in 4 ways:
//(1) addition, (2) subtraction, (3) multiplication, and (4) division.

// you can use router.post OR app.post
router.post('/addition', function(req, res){
  console.log('addition');
  console.log(req.body);
answer = Number(req.body.x) + Number(req.body.y);
    res.sendStatus(200);

});
router.post('/subtraction', function(req, res){
  console.log('subtraction');
answer = Number(req.body.x) - Number(req.body.y);
    res.sendStatus(200);

});
router.post('/multiplication', function(req, res){
  console.log('multiplication');
answer = Number(req.body.x) * Number(req.body.y);
    res.sendStatus(200);

});
router.post('/division', function(req, res){
  console.log('division');
  //use Number to convert string into number
answer = Number(req.body.x) / Number(req.body.y);
    res.sendStatus(200);

});
router.get('/', function(req,res){
  //sending answer to ajax
  //you need to send it back as an object
  res.send({result:answer});

});


module.exports = router;
