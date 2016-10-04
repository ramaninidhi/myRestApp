var empModel = require('../models/employeesM');

module.exports = {
  addEmp: (req, res, next) => {
    empModel.addEmp(req.body)
    .then(emp=>{
      res.status(200).json(emp);
    })
    .catch(e =>{
      res.status(200).json(e);
    })
  },


  getAllEmp: (req, res, next) => {
    empModel.getAllEmp()
    .then(emp =>{
      res.status(200).json(emp);
    })
    .catch(e =>{
      res.status(200).json(e);
    })
    console.log(1111);
  },

  getEmpById: (req, res, next) => {
    empModel.getEmpById(req.params.empId)
    .then(emp =>{
      res.status(200).json(emp);
    })
    .catch(e =>{
      res.status(200).json(e);
    })
    console.log(1111);
  },



  deleteEmp:(req, res, next) => {
    var s = req.params.empId;
    console.log(s);
    console.log(1);
    empModel.deleteEmp(s)
    .then(emp =>{
      res.status(200).json("deleted")
    })
    .catch(e =>{
      res.status(200).json(e);
    })
  },

  replaceEmp:(req, res, next) => {
    console.log(121);
    empModel.replaceEmp(req.params.empId, req.body.emp_name, req.body.emp_id, req.body.emp_address, req.body.emp_phone)
    .then(emp=>{
      res.status(200).json(emp);
    })
    .catch(e=>{
      res.status(200).json(e);
    })

  }
}
