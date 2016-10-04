var express = require('express');
var router = express.Router();
var employees = require('./employees');
/* GET home page. */
router.use('/employees',employees);

module.exports = router;
