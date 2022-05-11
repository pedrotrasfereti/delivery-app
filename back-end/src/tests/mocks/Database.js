const userMock = {
  id: "5",
  name: "testuser",
  email: "test@gmail.com",
  role: "customer",
  token: "testToken",
}

const saleMockDatavalues = {
  dataValues: {
    id: 1,
    userId: 3,
    sellerId: 2,
    totalPrice: 20.35,
    deliveryAddress: "antonio marcos da cruz",
    deliveryNumber: "571",
    saleDate: "2020-05-02T00:00:00.000Z",
    status: "Pendente",
  },
};

const productsMock = [{
  name: 'testProduct1',
  price: 2.2,
  urlImg: 'testUrl',
}, {
  name: 'testProduct2',
  price: 5.4,
  urlImg: 'testUrl2',
}];

const salesProductsMock = [{
  saleId: 1,
  productId: 1,
  quantity: 2,
}, {
  saleId: 1,
  productId: 2,
  quantity: 5,
}]

module.exports = { userMock, saleMockDatavalues, productsMock, salesProductsMock };