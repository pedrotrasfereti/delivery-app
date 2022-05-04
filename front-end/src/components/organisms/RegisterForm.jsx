import React, { useState } from 'react';

/* Children */
import { Link, Navigate } from 'react-router-dom';
import BaseForm from './BaseForm';
import { Button, ErrorMessage, Fieldset, HorizontalRule } from '../atoms';
import TextInputLabel from '../molecules';

/* Utils */
import EMAIL_REGEX from '../../utils/emailRegex';
import messages from '../../utils/messages';

/* Services */
import { registerRequest } from '../../services/request';

/* Styles */
import { styled } from '../../stitches.config';

const PasswordSection = styled('div', {
  display: 'flex',
  gap: '$2',
});

function RegisterForm() {
  const [name, setName] = useState('');
  const [nameErrVisible, setNameErrVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [emailErrVisible, setEmailErrVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErrVisible, setPasswordErrVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [matchErrVisible, setMatchErrVisible] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const validateName = () => {
    const minLength = 12;

    if (name.length < minLength) {
      setNameErrVisible(true);
    } else {
      setNameErrVisible(false);
    }
  };

  const validateEmail = () => {
    if (email && !EMAIL_REGEX.test(email)) {
      setEmailErrVisible(true);
    } else {
      setEmailErrVisible(false);
    }
  };

  const validatePassword = () => {
    const minLength = 6;

    if (password.length < minLength) {
      setPasswordErrVisible(true);
    } else {
      setPasswordErrVisible(false);
    }
  };

  const validateMatch = () => {
    if (confirmPassword !== password) {
      setMatchErrVisible(true);
    } else {
      setMatchErrVisible(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await registerRequest({
        email,
        password,
        name,
      });

      // implement save data step
      localStorage.setItem('user', JSON.stringify(data));

      // redirect to home
      setShouldRedirect(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BaseForm action="">
      <Fieldset id="control-group">
        <div>
          <TextInputLabel
            id="register-name-input"
            type="text"
            dataTestId="common_register__input-name"
            label="Name"
            placeholder="Enter your full name"
            value={ name }
            handleOnChange={ setName }
            handleOnBlur={ validateName }
          />
          {
            nameErrVisible && (
              <ErrorMessage
                id="invalid-name-message"
                dataTestId="common_register__element-invalid_register"
                message={ messages.name.invalid }
              />
            )
          }
        </div>

        <div>
          <TextInputLabel
            id="register-name-input"
            type="email"
            dataTestId="common_register__input-email"
            label="Email address"
            placeholder="Enter your email"
            value={ email }
            handleOnChange={ setEmail }
            handleOnBlur={ validateEmail }
          />
          {
            emailErrVisible && (
              <ErrorMessage
                id="invalid-email-message"
                dataTestId="common_register__element-invalid_register"
                message={ messages.email.invalid }
              />
            )
          }
        </div>

        <PasswordSection>
          <div>
            <TextInputLabel
              id="register-name-input"
              type="password"
              dataTestId="common_register__input-password"
              label="Password"
              placeholder="Set a password"
              value={ password }
              handleOnChange={ setPassword }
              handleOnBlur={ validatePassword }
            />
            {
              passwordErrVisible && (
                <ErrorMessage
                  id="invalid-password-message"
                  dataTestId="common_register__element-invalid_register"
                  message={ messages.password.invalid }
                />
              )
            }
          </div>

          <div>
            <TextInputLabel
              id="register-name-input"
              type="password"
              dataTestId="common_register__input-confirm-password"
              label="Confirm password"
              placeholder="Confirm password"
              value={ confirmPassword }
              handleOnChange={ setConfirmPassword }
              handleOnBlur={ validateMatch }
            />
            {
              matchErrVisible && (
                <ErrorMessage
                  id="invalid-password-message"
                  dataTestId="common_register__element-invalid_register"
                  message={ messages.password.mismatch }
                />
              )
            }
          </div>
        </PasswordSection>
      </Fieldset>

      <div className="ButtonGroup">
        <Button
          id="login-btn"
          type="submit"
          data-testid="common_register__button-register"
          onClick={ handleSubmit }
        >
          Create account
        </Button>

        <HorizontalRule />

        <span className="LinkMessage">
          Already have an account?

          <Button
            id="sign-up-btn"
            type="button"
            data-testid="common_login__button-register"
            link
          >
            <Link to="/login">Login</Link>
          </Button>
        </span>
      </div>

      {/* Redirect to Home page */}
      {
        shouldRedirect && <Navigate replace to="/home" />
      }
    </BaseForm>
  );
}

export default RegisterForm;
