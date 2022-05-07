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

describe('Products Page', () => {
  test('The page contains a header', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Products />
      </Router>
    );

    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
  });

  test('The page contains a heading', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Products />
      </Router>
    );

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });

  test('The page heading has the correct text', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Products />
      </Router>
    );

    const heading = screen.getByRole(
      'heading',
      { name: /deliveree/i },
    );

    expect(heading).toBeInTheDocument();
  });

  test('The page contains a navigation bar within a header', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Products />
      </Router>
    );

    const header = screen.getByRole('banner');
    const navbar = within(header).getByRole('navigation');

    expect(navbar).toBeInTheDocument();
  });

  test('The navigation bar contains a link to the products page', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Products />
      </Router>
    );

    const header = screen.getByRole('banner');
    const navbar = within(header).getByRole('navigation');
    const productsLink = within(navbar).getByTestId(
      'customer_products__element-navbar-link-products',
    );

    expect(productsLink).toBeInTheDocument();
  });

  test('The navigation bar contains a link to the orders page', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Products />
      </Router>
    );

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
      const history = createMemoryHistory();

      render(
        <Router location={history.location} navigator={history}>
          <Products />
        </Router>
      );

      const header = screen.getByRole('banner');
      const navbar = within(header).getByRole('navigation');
      const fullName = within(navbar).getByTestId(
        'customer_products__element-navbar-user-full-name',
      );
  
      expect(fullName).toBeInTheDocument();
  });

  test('The navigation bar contains a logout link', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Products />
      </Router>
    );

    const header = screen.getByRole('banner');
    const navbar = within(header).getByRole('navigation');
    const logoutLink = within(navbar).getByTestId(
      'customer_products__element-navbar-link-logout',
    );

    expect(logoutLink).toBeInTheDocument();
  });

  test('The page contains a main section', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Products />
      </Router>
    );

    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
  });

  test('The page title is present in the document', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Products />
      </Router>
    );

    expect(screen.getByText(/All products/i)).toBeInTheDocument();
  });
});
