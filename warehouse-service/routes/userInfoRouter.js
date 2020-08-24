var express = require('express');
const { GetUserContacts } = require('../api/userInfoAPI');
var router = express.Router();

router.post('/contacts', (req, res) => {
    GetUserContacts(req, res)
})

module.exports = router;
