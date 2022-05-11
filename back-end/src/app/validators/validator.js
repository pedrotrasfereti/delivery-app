const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const saleSchema = Joi.object({
  sale: Joi.object().required().keys({
    userId: Joi.number().required().messages({
      'any.required': 'userId is required',
    }),
    sellerId: Joi.number().required().messages({
      'any.required': 'sellerId is required',
    }),
    totalPrice: Joi.number().required().messages({
      'any.required': 'totalPrice is required',
    }),
    deliveryAddress: Joi.string().required().messages({
      'any.required': 'deliveryAddress is required',
      'string.base': 'deliveryAddress must be a string',
    }),
    deliveryNumber: Joi.string().required().messages({
      'any.required': 'deliveryNumber is required',
      'string.base': 'deliveryNumber must be a string',
    }),
  }),
  products: Joi.array().required().items(Joi.object({
    productId: Joi.number().required().messages({
      'any.required': 'productId is required',
    }),
    quantity: Joi.number().required().messages({
      'any.required': 'quantity is required',
    }),
  })),
});

const updateSaleSchema = Joi.object({
  status: Joi.string().valid('Preparando', 'Em Trânsito', 'Entregue').required(),
});

module.exports = {
  async login(value) {
    try {
      const result = await loginSchema.validateAsync(value);
      return result;
    } catch (error) {
      const err = new Error(error.message);
      err.name = 'bad_request';
      throw err;
    }
  },

  async user(value) {
    try {
      const result = await userSchema.validateAsync(value);
      return result;
    } catch (error) {
      const err = new Error(error.message);
      err.name = 'joi';
      throw err;
    }
  },

  async sale(value) {
    try {
      const result = await saleSchema.validateAsync(value);
      return result;
    } catch (error) {
      const err = new Error(error.message);
      err.name = 'joi';
      throw err;
    }
  },

  async updateSale(value) {
    try {
      const result = await updateSaleSchema.validateAsync(value);
      return result;
    } catch (error) {
      const err = new Error(error.message);
      err.name = 'joi';
      throw err;
    }
  },
};
