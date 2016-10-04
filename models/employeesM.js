var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Emp = require('../schema/employee');
var app = express();
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false}));
mongoose.connect('mongodb://localhost/myRestAppDatabase');
module.exports = {
  addEmp: (name,id,address,phone) =>{
    //res.render('index', { title: 'Express' });
    return new Promise((resolve, reject)=>{
      var emp = new Emp({
        emp_name: name,
        emp_id: id,
        emp_address: address,
        emp_phone: phone
      });

      emp.save(function(err){
        if(err){
          reject(err);
        }
        console.log("added.......");
        resolve("emp added");
      })

    })
  },

  getEmp: a=>{
    return new Promise((resolve,reject)=>{
      console.log(1);
      Emp.find({},function(err,emp){
        if(err){
          reject(err);
        }
        else{
          resolve(emp)
        }
      })
    })
  },

  getEmpById: (id)=>{
    return new Promise((resolve,reject)=>{
      console.log(1);
      Emp.find({emp_id: id},function(err,emp){
        if(err){
          reject(err);
        }
        else{
          resolve(emp);
        }
      })
    })
  },


  deleteEmp: (id)=>{
    return new Promise((resolve,reject)=>{
      console.log("del");
      console.log(id);
      Emp.findOneAndRemove({emp_id: id},function(err,emp){
        console.log(emp);
        if(err){
          reject(err);
        }
        else{
          resolve(emp)
        }
      })
    })
  },

  getByName: (name)=>{

  },

  replaceEmp: (old_emp, name,id,address,phone)=>{

    return new Promise((resolve,reject)=>{
      var replace_emp = new Emp({
        emp_name: name,
        emp_id: id,
        emp_address: address,
        emp_phone: phone
      });

      Emp.findOne({emp_id: old_emp},function(err,emp){
        if(err){
          console.log(err);
          reject(err);
        }
        if(!emp){
          replace_emp.save(function(err){
            console.log("new added");
            resolve("not emp");
          })

        }
        else{
          console.log(emp);
          emp.emp_name= name;
          console.log(emp.emp_name);
          console.log();
          emp.emp_id= id,
          emp.emp_address= address,
          emp.emp_phone= phone
          console.log(emp);
          emp.save( function(err){
            if(err){
              console.log(err);
              reject(err);
            }
            else{
              resolve( "emp updated");
            }
          });
        }
      })
    })
    //   Emp.findAndUpdate({emp_name: old_emp}, {$set: {emp_name: name, emp_id:id, emp_address: address, emp_phone: phone}},{new: true},  function(err, emp){
    //     if(err) return handleError(err);
    //     console.log(emp);
    //   }
    // )
  }
}
