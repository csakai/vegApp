var User = require('../api/user.model');
var secret = require('../config/config').JWT_SECRET;
var jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();
// secret === 'testsecret'
router.post('/login', function (req, res) {
  //TODO validate req.body.username and req.body.password
  //if is invalid, return 401
  // body === {
  // username: 'Lisa',
  // password: 'lisa'
  // }
  var query = { username : req.body.username };
  User.findOne(query, function(err, user) {
    if (err) { res.json(400, err);}
    if (!user) { res.json(404, {err: 'No user found'}); }
    else if (user.password !== req.body.password) {
      res.json(401, {err: 'Wrong password'});
    } else {
      res.json({token: jwt.sign(user, secret)});
    }
  });
});

module.exports = router;

