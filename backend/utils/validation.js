const Joi = require("@hapi/joi");

// register validation schema
module.exports.registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().min(3).max(60),
    email: Joi.string().required().min(3).max(60).email(),
    password: Joi.string().required().min(8),
  });

  return schema.validate(data);
};

// login post validation schema
module.exports.loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  });

  return schema.validate(data);
};

// post validation schema
module.exports.postValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    body: Joi.string(),
    image: Joi.string(),
  });

  return schema.validate(data);
};

// comment validation schema
module.exports.commentValidation = (data) => {
  const schema = Joi.object({
    body: Joi.string().required().min(1),
  });

  return schema.validate(data);
};
