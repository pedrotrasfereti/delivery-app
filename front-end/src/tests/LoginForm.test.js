// import dependencies
import React from 'react';

// import custom matchers
import '@testing-library/jest-dom';

// import react-testing methods
import { render, screen, fireEvent } from '@testing-library/react';

// the component to test
import LoginForm from '../components';

describe('Login Form Component', () => {
  test('Login email input is present in the document', () => {
    render(<LoginForm />);
    const emailInput = screen.getByTestId('common_login__input-email');
    expect(emailInput).toBeInTheDocument();
  });

  test('It is possible to change the email input value', () => {
    render(<LoginForm />);
    const emailInput = screen.getByTestId('common_login__input-email');
    const exampleEmail = 'example@mail.com';
    fireEvent.change(emailInput, { target: { value: exampleEmail } });
    expect(emailInput.value).toBe(exampleEmail);
  });

  test('Login password input is present in the document', () => {
    render(<LoginForm />);
    const passwordInput = screen.getByTestId('common_login__input-password');
    expect(passwordInput).toBeInTheDocument();
  });

  test('It is possible to change the password input value', () => {
    render(<LoginForm />);
    const passwordInput = screen.getByTestId('common_login__input-password');
    const examplePassword = 'example@mail.com';
    fireEvent.change(passwordInput, { target: { value: examplePassword } });
    expect(passwordInput.value).toBe(examplePassword);
  });

  test('Login button is present in the document', () => {
    render(<LoginForm />);
    const loginButton = screen.getByTestId('common_login__button-login');
    expect(loginButton).toBeInTheDocument();
  });

  test('Login button has the correct text', () => {
    render(<LoginForm />);
    const loginButton = screen.getByTestId('common_login__button-login');
    expect(loginButton).toHaveTextContent(/log in$/i);
  });

  test('Sign up button is present in the document', () => {
    render(<LoginForm />);
    const signUpButton = screen.getByTestId('common_login__button-register');
    expect(signUpButton).toBeInTheDocument();
  });

  test('Sign up button has the correct text', () => {
    render(<LoginForm />);
    const signUpButton = screen.getByTestId('common_login__button-register');
    expect(signUpButton).toHaveTextContent(/sign up$/i);
  });

  describe('When the email input has an invalid value', () => {
    test('Invalid email error message is present in the document', () => {
      render(<LoginForm />);
      const emailInput = screen.getByTestId('common_login__input-email');
      fireEvent.change(emailInput, { target: { value: 'abc' } });
      fireEvent.focusOut(emailInput);
      const errMessage = screen.getByTestId(
        'common_login__element-invalid-email',
      );
      expect(errMessage).toBeInTheDocument();
    });

    test('Invalid email error message has correct text', () => {
      render(<LoginForm />);
      const emailInput = screen.getByTestId('common_login__input-email');
      fireEvent.change(emailInput, { target: { value: 'abc' } });
      fireEvent.focusOut(emailInput);
      const errMessage = screen.getByTestId(
        'common_login__element-invalid-email',
      );
      expect(errMessage).toHaveTextContent(
        /this email is invalid. make sure it's written like example@email.com$/i,
      );
    });
  });
});
