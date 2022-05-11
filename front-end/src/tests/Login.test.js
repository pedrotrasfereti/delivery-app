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
import { Login } from '../components/pages';

describe('Login Page', () => {
  beforeEach(() => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>
    );
  });

  test('The title is present in the document', () => {
    expect(screen.getByText(/Sign In to Deliveree/i)).toBeInTheDocument();
  });

  test('The subtitle is present in the document', () => {
    expect(screen.getByText(/Enter your information below to continue/i)).toBeInTheDocument();
  });
});
