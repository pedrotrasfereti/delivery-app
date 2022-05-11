// import dependencies
import 'regenerator-runtime/runtime';
import { createMemoryHistory } from 'history'
import React from 'react';

// import Router
import { Router } from 'react-router-dom';

// import custom matchers
import '@testing-library/jest-dom';

// import react-testing methods
import { render, screen, fireEvent } from '@testing-library/react';

// the component to test
import { LoginForm } from '../components/organisms';

// import error messages
import messages from '../utils/messages';

describe('Login Form Component', () => {
  beforeEach(() => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <LoginForm />
      </Router>
    );
  });

  test('Login email input is present in the document', () => {
    const emailInput = screen.getByTestId('common_login__input-email');

    expect(emailInput).toBeInTheDocument();
  });

  test('It is possible to change the email input value', () => {
    const emailInput = screen.getByTestId('common_login__input-email');
    const exampleEmail = 'example@mail.com';
    fireEvent.change(emailInput, { target: { value: exampleEmail } });

    expect(emailInput.value).toBe(exampleEmail);
  });

  test('Login password input is present in the document', () => {
    const passwordInput = screen.getByTestId('common_login__input-password');

    expect(passwordInput).toBeInTheDocument();
  });

  test('It is possible to change the password input value', () => {
    const passwordInput = screen.getByTestId('common_login__input-password');
    const examplePassword = 'example@mail.com';
    fireEvent.change(passwordInput, { target: { value: examplePassword } });

    expect(passwordInput.value).toBe(examplePassword);
  });

  test('Login button is present in the document', () => {
    const loginButton = screen.getByTestId('common_login__button-login');

    expect(loginButton).toBeInTheDocument();
  });

  test('Login button has the correct text', () => {
    const loginButton = screen.getByTestId('common_login__button-login');

    expect(loginButton).toHaveTextContent(/login$/i);
  });

  test('Sign up button is present in the document', () => {
    const signUpButton = screen.getByTestId('common_login__button-register');

    expect(signUpButton).toBeInTheDocument();
  });

  test('Sign up button has the correct text', () => {
    const signUpButton = screen.getByTestId('common_login__button-register');

    expect(signUpButton).toHaveTextContent(/sign up$/i);
  });

  describe('When the email input has an invalid value', () => {
    test('Invalid email error message is present in the document', () => {
      const emailInput = screen.getByTestId('common_login__input-email');
      fireEvent.change(emailInput, { target: { value: 'abc' } });
      fireEvent.focusOut(emailInput);

      const errMessage = screen.getByTestId(
        'common_login__element-invalid-email',
      );

      expect(errMessage).toBeInTheDocument();
    });

    test('Invalid email error message has correct text', () => {
      const emailInput = screen.getByTestId('common_login__input-email');
      fireEvent.change(emailInput, { target: { value: 'abc' } });
      fireEvent.focusOut(emailInput);

      const errMessage = screen.getByTestId(
        'common_login__element-invalid-email',
      );

      expect(errMessage).toHaveTextContent(messages.email.invalid);
    });
  });

  describe('When the password input has an invalid value', () => {
    test('Invalid password error message is present in the document', () => {
      const passwordInput = screen.getByTestId('common_login__input-password');
      fireEvent.change(passwordInput, { target: { value: 'abc' } });
      fireEvent.focusOut(passwordInput);

      const errMessage = screen.getByTestId(
        'common_login__element-invalid-password',
      );
      expect(errMessage).toBeInTheDocument();
    });

    test('Invalid password error message has correct text', () => {
      const passwordInput = screen.getByTestId('common_login__input-password');
      fireEvent.change(passwordInput, { target: { value: 'abc' } });
      fireEvent.focusOut(passwordInput);

      const errMessage = screen.getByTestId(
        'common_login__element-invalid-password',
      );

      expect(errMessage).toHaveTextContent(messages.password.invalid);
    });
  });
});
