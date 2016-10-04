var express = require('express');
var router = express.Router();
var Emp = require('../schema/employee');
var empC= require('../controllers/employeesC')
var empValid = require('../validation/empValid')


/* GET home page. */
router.post('/addEmp',empValid.empValidate, empC.addEmp);
router.get('/',empC.getAllEmp);
router.route('/:empId')
      .get(empC.getEmpById)
      .delete(empC.deleteEmp)
      .put(empC.replaceEmp);

module.exports = router;
