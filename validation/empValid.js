var Joi = require('joi');

module.exports={
  empValidate: (req, res, next) => {
    schema = Joi.object().keys({
      emp_name: Joi.string().alphanum().min(3).max(30).required(),
      emp_id: Joi.number().integer().required(),
      emp_address: Joi.string().alphanum().min(3).max(30).required(),
      emp_phone: Joi.number().integer().required()
    })

    Joi.validate(req.body, schema, (err, value)=>{
      if(err){
        res.status(200).json("emp validation error");
      }
      else{
        next();
      }
    })

  }
  // ,
  //
  // nameValidate: (req, res, next) => {
  //   schema = Joi.object().keys({
  //       emp_name:Joi.string().alphanum().min(3).max(30).required(),
  //       new_emp_name: Joi.string().alphanum().min(3).max(30).required(),
  //       new_address:
  //   })
  // }

}
