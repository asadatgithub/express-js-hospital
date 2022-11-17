import Joi from "joi";

const schema = {
  add: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      dob: Joi.date().required(),
      contact: Joi.string(),
      address: Joi.string()
    }),
  },
  update: {
    body: Joi.object().keys({
      name: Joi.string(),
      dob: Joi.date(),
      contact: Joi.string(),
      address: Joi.string()
    }),
  },
  age: {
    body: Joi.object().keys({
      age: Joi.number().required()
    }),
  },
};

export default schema;
