//middleware to validate data
const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  //middleware dinámico
  return (req, res, next) => {
    //[property] puede ser: req.body, req.params, req.query
    const data = req[property];

    //Validando campos de uno a uno
    //const { error } = schema.validate(data);

    //Validando todos los campos en una llamada
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
