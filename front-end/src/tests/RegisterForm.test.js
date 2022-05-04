// import dependencies
import React from 'react';

// import custom matchers
import '@testing-library/jest-dom';

// import react-testing methods
import { render, screen, fireEvent } from '@testing-library/react';

// the component to test
import { RegisterForm } from '../components';

describe('Register Form Component', () => {
  test('Signup name input is present in the document', () => {
    render(<RegisterForm />);
    const nameInput = screen.getByTestId('common_register__input-name');
    expect(nameInput).toBeInTheDocument();
  });

  test('It is possible to change the name input value', () => {
    render(<RegisterForm />);
    const nameInput = screen.getByTestId('common_register__input-name');
    const exampleName = 'Jane Doe';
    fireEvent.change(nameInput, { target: { value: exampleName } });
    expect(nameInput.value).toBe(exampleName);
  });

  test('Signup email input is present in the document', () => {
    render(<RegisterForm />);
    const emailInput = screen.getByTestId('common_register__input-email');
    expect(emailInput).toBeInTheDocument();
  });

  test('It is possible to change the email input value', () => {
    render(<RegisterForm />);
    const emailInput = screen.getByTestId('common_register__input-email');
    const exampleEmail = 'example@mail.com';
    fireEvent.change(emailInput, { target: { value: exampleEmail } });
    expect(emailInput.value).toBe(exampleEmail);
  });

  test('Signup password input is present in the document', () => {
    render(<RegisterForm />);
    const passwordInput = screen.getByTestId('common_register__input-password');
    expect(passwordInput).toBeInTheDocument();
  });

  test('It is possible to change the password input value', () => {
    render(<RegisterForm />);
    const passwordInput = screen.getByTestId('common_register__input-password');
    const examplePassword = 'example@mail.com';
    fireEvent.change(passwordInput, { target: { value: examplePassword } });
    expect(passwordInput.value).toBe(examplePassword);
  });

  test('Create account button is present in the document', () => {
    render(<RegisterForm />);
    const signInButton = screen.getByTestId('common_register__button-register');
    expect(signInButton).toBeInTheDocument();
  });

  test('Create account button has the correct text', () => {
    render(<RegisterForm />);
    const loginButton = screen.getByTestId('common_register__button-register');
    expect(loginButton).toHaveTextContent(/create account$/i);
  });

  test('Sign up button is present in the document', () => {
    render(<RegisterForm />);
    const signUpButton = screen.getByTestId('common_login__button-register');
    expect(signUpButton).toBeInTheDocument();
  });

  test('Sign up button has the correct text', () => {
    render(<RegisterForm />);
    const signUpButton = screen.getByTestId('common_login__button-register');
    expect(signUpButton).toHaveTextContent(/sign up$/i);
  });

  describe('When the name input has an invalid value', () => {
    test('Invalid name error message is present in the document', () => {
      render(<RegisterForm />);
      const nameInput = screen.getByTestId('common_register__input-name');
      fireEvent.change(nameInput, { target: { value: 'abc' } });
      fireEvent.focusOut(nameInput);
      const errMessage = screen.getByTestId(
        'common_register__element-invalid_register',
      );
      expect(errMessage).toBeInTheDocument();
    });

    test('Invalid name error message has correct text', () => {
      render(<RegisterForm />);
      const nameInput = screen.getByTestId('common_register__input-name');
      fireEvent.change(nameInput, { target: { value: 'abc' } });
      fireEvent.focusOut(nameInput);
      const errMessage = screen.getByTestId(
        'common_register__element-invalid_register',
      );
      expect(errMessage).toHaveTextContent(
        /name must be at least 12 characters long$/i,
      );
    });
  });

  describe('When the email input has an invalid value', () => {
    test('Invalid email error message is present in the document', () => {
      render(<RegisterForm />);
      const emailInput = screen.getByTestId('common_register__input-email');
      fireEvent.change(emailInput, { target: { value: 'abc' } });
      fireEvent.focusOut(emailInput);
      const errMessage = screen.getByTestId(
        'common_register__element-invalid_register',
      );
      expect(errMessage).toBeInTheDocument();
    });

    test('Invalid email error message has correct text', () => {
      render(<RegisterForm />);
      const emailInput = screen.getByTestId('common_login__input-email');
      fireEvent.change(emailInput, { target: { value: 'abc' } });
      fireEvent.focusOut(emailInput);
      const errMessage = screen.getByTestId(
        'common_register__element-invalid_register',
      );
      expect(errMessage).toHaveTextContent(
        /this email is invalid. make sure it's written like example@email.com$/i,
      );
    });
  });

  describe('When the password input has an invalid value', () => {
    test('Invalid password error message is present in the document', () => {
      render(<RegisterForm />);
      const passwordInput = screen.getByTestId('common_register__input-password');
      fireEvent.change(passwordInput, { target: { value: 'abc' } });
      fireEvent.focusOut(passwordInput);
      const errMessage = screen.getByTestId(
        'common_register__element-invalid_register',
      );
      expect(errMessage).toBeInTheDocument();
    });

    test('Invalid password error message has correct text', () => {
      render(<RegisterForm />);
      const passwordInput = screen.getByTestId('common_register__input-password');
      fireEvent.change(passwordInput, { target: { value: 'abc' } });
      fireEvent.focusOut(passwordInput);
      const errMessage = screen.getByTestId(
        'common_register__element-invalid_register',
      );
      expect(errMessage).toHaveTextContent(
        /Password must be at least 6 characters long$/i,
      );
    });
  });
});
