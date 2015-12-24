var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var name = req.query.name;
  res.json(
    {
      name: name,
      msg: Math.random() * 10000
    }
  )
});

module.exports = router;
