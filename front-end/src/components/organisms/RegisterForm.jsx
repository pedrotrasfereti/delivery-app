import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* Children */
import { Link, Navigate } from 'react-router-dom';
import BaseForm from './BaseForm';
import { Button, ErrorMessage, Fieldset, HorizontalRule } from '../atoms';
import TextInputLabel from '../molecules';

/* Utils */
import {
  validateName,
  validateEmail,
  validatePassword,
  validateMatch,
} from '../../utils/validators';

import messages from '../../utils/messages';

/* Services */
import { registerRequest } from '../../services/request';

/* Styles */
import { styled } from '../../stitches.config';

const PasswordSection = styled('div', {
  display: 'flex',
  gap: '$2',
});

function RegisterForm({ id }) {
  const [name, setName] = useState('');
  const [nameErrVisible, setNameErrVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [emailErrVisible, setEmailErrVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErrVisible, setPasswordErrVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [matchErrVisible, setMatchErrVisible] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

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
    <BaseForm id={ id } action="">
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
            handleOnBlur={
              () => validateName(name, setNameErrVisible)
            }
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
            id="register-email-input"
            type="email"
            dataTestId="common_register__input-email"
            label="Email address"
            placeholder="Enter your email"
            value={ email }
            handleOnChange={ setEmail }
            handleOnBlur={
              () => validateEmail(email, setEmailErrVisible)
            }
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
              id="register-password-input"
              type="password"
              dataTestId="common_register__input-password"
              label="Password"
              placeholder="Set a password"
              value={ password }
              handleOnChange={ setPassword }
              handleOnBlur={
                () => validatePassword(password, setPasswordErrVisible)
              }
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
              id="register-confirm-pw-input"
              type="password"
              dataTestId="common_register__input-confirm-password"
              label="Confirm password"
              placeholder="Confirm password"
              value={ confirmPassword }
              handleOnChange={ setConfirmPassword }
              handleOnBlur={
                () => validateMatch(confirmPassword, password, setMatchErrVisible)
              }
            />
            {
              matchErrVisible && (
                <ErrorMessage
                  id="mismatch-message"
                  dataTestId="common_register__element-invalid_register"
                  message={ messages.password.mismatch }
                />
              )
            }
          </div>
        </PasswordSection>
      </Fieldset>

      <div id="btn-group" className="ButtonGroup">
        <Button
          id="register-btn"
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
            id="login-btn"
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

RegisterForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RegisterForm;
