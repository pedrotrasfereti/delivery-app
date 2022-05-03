// import dependencies
import React from 'react';

// import custom matchers
import '@testing-library/jest-dom';

// import react-testing methods
import { render, screen } from '@testing-library/react';

// component to test
import { Login } from '../components/pages';

describe('Login Page', () => {
  test('The title is present in the document', () => {
    render(<Login />);

    expect(screen.getByText(/Sign In to Deliveree/i)).toBeInTheDocument();
  });

  test('The subtitle is present in the document', () => {
    render(<Login />);

    expect(screen.getByText(/Enter your information below to continue/i)).toBeInTheDocument();
  });
});
