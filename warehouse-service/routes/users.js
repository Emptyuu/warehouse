var express = require('express');
const { UserRegister } = require('../api/userAPI');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', (req, res) => {
  UserRegister(req, res)
})

module.exports = router;
 