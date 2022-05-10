function navLinksMap(username) {
  return ({
    '/customer/products': [
      {
        dataTestId: 'customer_products__element-navbar-link-products',
        name: 'Products',
        to: '/customer/products',
      },
      {
        dataTestId: 'customer_products__element-navbar-link-orders',
        name: 'My orders',
        to: '/',
      },
      {
        dataTestId: 'customer_products__element-navbar-user-full-name',
        name: username,
        to: '/',
      },
      {
        dataTestId: 'customer_products__element-navbar-link-logout',
        name: 'Logout',
        to: '/login',
      },
    ],
  });
}

export default navLinksMap;
