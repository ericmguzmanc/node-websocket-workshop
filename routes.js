const express = require('express');
const router = express.Router();
// const wss = require('./ws');


const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port:40510});



router.get('/', function (req, res) {
  res.sendfile(__dirname + '/test.html');
});

router.get('/test', (req, res) => {
  res.status(200).json({success: true, params: req.params.token || null});
})

router.get('/test/:token', (req, res) => {
  res.sendfile(__dirname + '/test.html');

  const { token } = req.params;
  console.log('params ', req.params);
  
  wss.on('connection', async function(ws) {
      ws.on('message', function (message) {
          console.log('received: %s', 'client message')
        });
      
        ws.send(`the token ${token}`)
      
      })
});

module.exports = router;