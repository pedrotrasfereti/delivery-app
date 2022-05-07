// import dependencies
import 'regenerator-runtime/runtime';
import { createMemoryHistory } from 'history';
import React from 'react';

// import Router
import { Router } from 'react-router-dom';

// import custom matchers
import '@testing-library/jest-dom';

// import react-testing methods
import { render, screen, fireEvent } from '@testing-library/react';

// the component to test
import { RegisterForm } from '../components/organisms';

describe('Register Form Component', () => {
  test('Signup name input is present in the document', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <RegisterForm />
      </Router>
    );

    const nameInput = screen.getByTestId('common_register__input-name');
    expect(nameInput).toBeInTheDocument();
  });

  test('It is possible to change the name input value', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <RegisterForm />
      </Router>
    );

    const nameInput = screen.getByTestId('common_register__input-name');
    const exampleName = 'Jane Doe';
    fireEvent.change(nameInput, { target: { value: exampleName } });
    expect(nameInput.value).toBe(exampleName);
  });

  test('Signup email input is present in the document', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <RegisterForm />
      </Router>
    );

    const emailInput = screen.getByTestId('common_register__input-email');
    expect(emailInput).toBeInTheDocument();
  });

  test('It is possible to change the email input value', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <RegisterForm />
      </Router>
    );

    const emailInput = screen.getByTestId('common_register__input-email');
    const exampleEmail = 'example@mail.com';
    fireEvent.change(emailInput, { target: { value: exampleEmail } });
    expect(emailInput.value).toBe(exampleEmail);
  });

  test('Signup password input is present in the document', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <RegisterForm />
      </Router>
    );

    const passwordInput = screen.getByTestId('common_register__input-password');
    expect(passwordInput).toBeInTheDocument();
  });

  test('It is possible to change the password input value', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <RegisterForm />
      </Router>
    );

    const passwordInput = screen.getByTestId('common_register__input-password');
    const examplePassword = 'example@mail.com';
    fireEvent.change(passwordInput, { target: { value: examplePassword } });
    expect(passwordInput.value).toBe(examplePassword);
  });

  test('Create account button is present in the document', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <RegisterForm />
      </Router>
    );

    const signInButton = screen.getByTestId('common_register__button-register');
    expect(signInButton).toBeInTheDocument();
  });

  test('Create account button has the correct text', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <RegisterForm />
      </Router>
    );

    const loginButton = screen.getByTestId('common_register__button-register');
    expect(loginButton).toHaveTextContent(/create account$/i);
  });

  describe('When the name input has an invalid value', () => {
    test('Invalid name error message is present in the document', () => {
      const history = createMemoryHistory();

      render(
        <Router location={history.location} navigator={history}>
          <RegisterForm />
        </Router>
      );

      const nameInput = screen.getByTestId('common_register__input-name');
      fireEvent.change(nameInput, { target: { value: 'abc' } });
      fireEvent.focusOut(nameInput);
      const errMessage = screen.getByTestId(
        'common_register__element-invalid_register',
      );
      expect(errMessage).toBeInTheDocument();
    });

    test('Invalid name error message has correct text', () => {
      const history = createMemoryHistory();

      render(
        <Router location={history.location} navigator={history}>
          <RegisterForm />
        </Router>
      );

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
      const history = createMemoryHistory();

      render(
        <Router location={history.location} navigator={history}>
          <RegisterForm />
        </Router>
      );

      const emailInput = screen.getByTestId('common_register__input-email');
      fireEvent.change(emailInput, { target: { value: 'abc' } });
      fireEvent.focusOut(emailInput);
      const errMessage = screen.getByTestId(
        'common_register__element-invalid_register',
      );
      expect(errMessage).toBeInTheDocument();
    });

    test('Invalid email error message has correct text', () => {
      const history = createMemoryHistory();

      render(
        <Router location={history.location} navigator={history}>
          <RegisterForm />
        </Router>
      );

      const emailInput = screen.getByTestId('common_register__input-email');
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
      const history = createMemoryHistory();

      render(
        <Router location={history.location} navigator={history}>
          <RegisterForm />
        </Router>
      );

      const passwordInput = screen.getByTestId('common_register__input-password');
      fireEvent.change(passwordInput, { target: { value: 'abc' } });
      fireEvent.focusOut(passwordInput);
      const errMessage = screen.getByTestId(
        'common_register__element-invalid_register',
      );
      expect(errMessage).toBeInTheDocument();
    });

    test('Invalid password error message has correct text', () => {
      const history = createMemoryHistory();

      render(
        <Router location={history.location} navigator={history}>
          <RegisterForm />
        </Router>
      );

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