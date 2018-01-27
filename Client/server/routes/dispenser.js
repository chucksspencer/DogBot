

var express = require('express');
var router = express.Router();
var FULLROTATION = 430;
var DEFAULTWIGGLEDISTANCE = 20;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/left', function(req, res) {
  wiggle(DEFAULTWIGGLEDISTANCE, "cw");
  setTimeout(function() {
    rotate(FULLROTATION, "ccw")
  }, 1000);
  setTimeout(function() {
    res.send('dispense left');
  }, 5000)
});

router.post('/right', function(req, res) {
  wiggle(DEFAULTWIGGLEDISTANCE, "ccw");
  setTimeout(function() {
    rotate(FULLROTATION, "cw")
  }, 1000);
  setTimeout(function() {
    res.send('dispense right');
  }, 5000)
});

router.post('/move', function(req, res) {
  var steps = req.body.steps;
  var direction = req.body.direction;
  rotate(steps, direction);
  setTimeout(function() {
    res.send('Moving position: ' + steps + ' in direction ' + direction);
  }, steps * 10)
});

router.post('/wiggle', function(req, res) {
  var distance = req.body.distance;
  var direction = req.body.direction;
  wiggle(distance, direction);
  setTimeout(function() {
    res.send('Wiggling: ' + distance + ' in direction ' + direction);
  }, distance * 20)
});

wiggle = function(distance, direction) { // direction ccw or cw
  var spawn = require("child_process").spawn;
  var process = spawn('python',["wiggle.py", distance, 1, "--startdirection", direction]);  
}

rotate = function(steps, direction) { // direction ccw or cw, steps: 430 = 180 degrees
  var spawn = require("child_process").spawn;
  var process = spawn('python',["rotateDrum.py", steps, "--direction", direction]);
}


module.exports = router;
