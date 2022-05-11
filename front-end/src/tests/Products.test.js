// import dependencies
import 'regenerator-runtime/runtime';
import { createMemoryHistory } from 'history';
import React from 'react';

// import Router
import { Router } from 'react-router-dom';

// import custom matchers
import '@testing-library/jest-dom';

// import react-testing methods
import { render, screen, within } from '@testing-library/react';

// component to test
import { Products } from '../components/pages';
import { ProductCards } from '../components/organisms';
import mockProducts from './mocks/ProductsMock';
// import * as serviceRequest from '../services/request';

// mocks
jest.mock('../utils/navLinksMap', () => () => ({
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
      name: 'zebirita',
      to: '/',
    },
    {
      dataTestId: 'customer_products__element-navbar-link-logout',
      name: 'Logout',
      to: '/login',
    },
  ],
}));

jest.mock('../services/request');

// jest.mock('../services/request', () => {
//   return jest.fn().mockResolvedValue(mockProducts);
// });

describe('Products Page', () => {
  beforeAll(() => {
    localStorage.setItem('user', JSON.stringify({
      email: '',
      name: '',
      role: '',
      token: '',
    }));
  });

  beforeEach(async () => {
    const history = createMemoryHistory();
    const route = '/customer/products';
    history.push(route);

    // render(
    //     <Router location={history.location} navigator={history}>
    //       <Products>
    //         <ProductCards products={mockProducts}/>
    //       </Products>
    //     </Router>
    // );
    render(
    <Router location={history.location} navigator={history}>
      <Products />
    </Router>
    );
  });

  test('The page contains a header', () => {
    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
  });

  test('The page contains a heading', () => {
    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });

  test('The page heading has the correct text', () => {
    const heading = screen.getByRole(
      'heading',
      { name: /deliveree/i },
    );

    expect(heading).toBeInTheDocument();
  });

  test('The page contains a navigation bar within a header', () => {
    const header = screen.getByRole('banner');
    const navbar = within(header).getByRole('navigation');

    expect(navbar).toBeInTheDocument();
  });

  test('The navigation bar contains a link to the products page', () => {
    const header = screen.getByRole('banner');
    const navbar = within(header).getByRole('navigation');
    const productsLink = within(navbar).getByTestId(
      'customer_products__element-navbar-link-products',
    );

    expect(productsLink).toBeInTheDocument();
  });

  test('The navigation bar contains a link to the orders page', () => {
    const header = screen.getByRole('banner');
    const navbar = within(header).getByRole('navigation');
    const ordersLink = within(navbar).getByTestId(
      'customer_products__element-navbar-link-orders',
    );

    expect(ordersLink).toBeInTheDocument();
  });

  test(
    "The navigation bar contains an element with the user's full name",
    () => {
      const header = screen.getByRole('banner');
      const navbar = within(header).getByRole('navigation');
      const fullName = within(navbar).getByTestId(
        'customer_products__element-navbar-user-full-name',
      );
  
      expect(fullName).toBeInTheDocument();
  });

  test('The navigation bar contains a logout link', () => {
    const header = screen.getByRole('banner');
    const navbar = within(header).getByRole('navigation');
    const logoutLink = within(navbar).getByTestId(
      'customer_products__element-navbar-link-logout',
    );

    expect(logoutLink).toBeInTheDocument();
  });

  test('The page contains a main section', () => {
    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
  });

  test('The page title is present in the document', () => {
    expect(screen.getByText(/All products/i)).toBeInTheDocument();
  });

  test('The cart/checkout button is present in the document', () => {
    const checkoutBtn = screen.getByTestId(
      'customer_products__checkout-bottom-value',
    );

    expect(checkoutBtn).toBeInTheDocument();
  });

  describe('The first 11 product cards are present in the document', () => {
    // let mockdb;
    const ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

    beforeEach(() => {
      // serviceRequest.getAllProducts = jest.fn(() => Promise.resolve(mockProducts));
      // mockdb = jest.spyOn(serviceRequest, 'getAllProducts');
      // mockdb.mockResolvedValue(mockProducts);
    });

    test.each(ids)(
      'The title of product #%p is present in the document',
      (productId) => {
        const productCardTitle = screen.getByTestId(
          `customer_products__element-card-title-${productId}`,
        );

        expect(productCardTitle).toBeInTheDocument();
      });

    test.each(ids)(
      'The price of product #%p is present in the document',
      (productId) => {
        const productCardPrice = screen.getByTestId(
          `customer_products__element-card-price-${productId}`,
        );

        expect(productCardPrice).toBeInTheDocument();
      });

    test.each(ids)(
      'The image of product #%p is present in the document',
      (productId) => {
        const productCardImage = screen.getByTestId(
          `customer_products__img-card-bg-image-${productId}`,
        );

        expect(productCardImage).toBeInTheDocument();
      });

    test.each(ids)(
      'The add item button of product #%p is present in the document',
      (productId) => {
        const addItemBtn = screen.getByTestId(
          `customer_products__button-card-add-item-${productId}`,
        );

        expect(addItemBtn).toBeInTheDocument();
      });

    test.each(ids)(
      'The remove item button of product #%p is present in the document',
      (productId) => {
        const removeItemBtn = screen.getByTestId(
          `customer_products__button-card-rm-item-${productId}`,
        );

        expect(removeItemBtn).toBeInTheDocument();
      });

    test.each(ids)(
      'The quantity of product #%p is present in the document',
      (productId) => {
        const productCardQty = screen.getByTestId(
          `customer_products__input-card-quantity-${productId}`,
        );

        expect(productCardQty).toBeInTheDocument();
      });
  });
});
