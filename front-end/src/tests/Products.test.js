// import dependencies
import 'regenerator-runtime/runtime';
import { createMemoryHistory } from 'history';
import React from 'react';

// import Router
import { Router } from 'react-router-dom';

// import custom matchers
import '@testing-library/jest-dom';

// import react-testing methods
import { render, screen } from '@testing-library/react';

// component to test
import { Products } from '../components/pages';

describe('Products Page', () => {
  test('The header title is present in the document', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Products />
      </Router>
    );

    expect(screen.getByText(/deliveree/i)).toBeInTheDocument();
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
