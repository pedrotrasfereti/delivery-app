const createUserPayload = {
  name: "testUser",
  email: "test@gmail.com",
  password: "password",
}

const loginUserPayload = {
  email: 'test@email.com',
  password: 'password',
};

const createSalePayload = {
  sale: {
    userId: 3,
    sellerId: 2,
    totalPrice: 20.35,
    deliveryAddress: "antonio marcos da cruz",
    deliveryNumber: "571"
  },
  products: [
    {
      productId: 1,
      quantity: 2
    }
  ],
}

const createSalesProductsPayload = [{
  saleId: 1,
  productId: 1,
  quantity: 2,
}, {
  saleId: 1,
  productId: 2,
  quantity: 5,
}]

module.exports = { createUserPayload, createSalePayload, loginUserPayload, createSalesProductsPayload };