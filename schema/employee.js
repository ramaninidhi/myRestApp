var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EmployeeSchema = new Schema({
  emp_name: String,
  emp_id: Number,
  emp_address: String,
  emp_phone: Number

});

var Employee = mongoose.model('Employee',EmployeeSchema);
module.exports = Employee;
