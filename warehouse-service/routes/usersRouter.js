var express = require('express');
const { UserRegister, UserLogin,UserToken , GetHomeInfo } = require('../api/userAPI');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', (req, res) => {
  UserRegister(req, res)
})
router.post('/login', (req, res) => {
  UserLogin(req, res)
})
router.post('/verifyToken',(req,res)=>{
  UserToken(req, res)
})
router.get('/gethomeinfo',(req,res)=>{
  GetHomeInfo(req, res)
})
module.exports = router;
