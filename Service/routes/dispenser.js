var express = require('express');
var SerialPort = require('serialport');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/left', function(req, res) {
  this.writeToPort('3450');
  res.send('dispense left');
});

router.post('/right', function(req, res) {
  this.writeToPort('-3450');
  res.send('dispense right');
});

router.post('/moveTo', function(req, res) {
  var position = req.body.position;
  this.writeToPort(position);  
  res.send('Moving to position: ' + position);
});

writeToPort = function(message) {

  port =  new SerialPort('/dev/ttyAMA0', {
    baudRate: 9600
  });

  setTimeout(function() {
    port.write(message + '\n', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
      console.log('message written');
    });
     
    // Open errors will be emitted as an error event
    port.on('error', function(err) {
      console.log('Error: ', err.message);
    });

    port.close();
  }, 800);

}
module.exports = router;
