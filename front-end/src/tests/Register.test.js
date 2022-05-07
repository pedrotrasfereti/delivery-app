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
import { Register } from '../components/pages';

describe('Register Page', () => {
  test('The title is present in the document', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Register />
      </Router>
    );

    expect(screen.getByText(/Sign up to Deliveree/i)).toBeInTheDocument();
  });
});