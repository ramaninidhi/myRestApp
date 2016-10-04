var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Emp = require('../schema/employee');
var app = express();
var empC= require('../controllers/employeesC')
var empValid = require('../validation/empValid')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


/* GET home page. */
router.post('/addEmp',empValid.empValidate, empC.addEmp);
router.get('/',empC.getEmp);
router.get('/:empId',empC.getEmpById);
router.delete('/:empId',empC.deleteEmp);
router.put('/:empId',empValid.empValidate, empC.replaceEmp);
module.exports = router;
