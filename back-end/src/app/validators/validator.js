const Joi = require('joi');

module.exports = {
  async login(value) {
    try {
      const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
      });
      const result = await loginSchema.validateAsync(value);
      return result;
    } catch (error) {
      console.log(error);
      const err = new Error(error.message);
      err.name = 'bad_request';
      throw err;
    }
  },

  async user(value) {
    try {
      const userSchema = Joi.object({
        name: Joi.string().min(3),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        role: Joi.string().valid('customer', 'seller').required(),
      });
      const result = await userSchema.validateAsync(value);
      return result;
    } catch (error) {
      console.log(error);
      const err = new Error(error.message);
      err.name = 'joi';
      throw err;
    }
  },

};
