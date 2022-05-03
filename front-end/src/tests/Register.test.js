// import dependencies
import React from 'react';

// import custom matchers
import '@testing-library/jest-dom';

// import react-testing methods
import { render, screen } from '@testing-library/react';

// component to test
import { Register } from '../components/pages';

describe('Register Page', () => {
  test('The title is present in the document', () => {
    render(<Register />);

    expect(screen.getByText(/Sign up to Deliveree/i)).toBeInTheDocument();
  });
});
