// import dependencies
import React from 'react';

// import custom matchers
import '@testing-library/jest-dom';

// import react-testing methods
import { render, screen } from '@testing-library/react';

// the component to test
import LoginForm from '../components';

describe('Login Form Component', () => {
  test('Login email input is present in the document', () => {
    render(<LoginForm />);
    const emailInput = screen.getByTestId('common_login__input-email');
    expect(emailInput).toBeInTheDocument();
  });

  test('Login password input is present in the document', () => {
    render(<LoginForm />);
    const passwordInput = screen.getByTestId('common_login__input-password');
    expect(passwordInput).toBeInTheDocument();
  });

  test('Login button is present in the document', () => {
    render(<LoginForm />);
    const loginButton = screen.getByTestId('common_login__button-login');
    expect(loginButton).toBeInTheDocument();
  });

  test('Sign-in button is present in the document', () => {
    render(<LoginForm />);
    const signInButton = screen.getByTestId('common_login__button-register');
    expect(signInButton).toBeInTheDocument();
  });
});
