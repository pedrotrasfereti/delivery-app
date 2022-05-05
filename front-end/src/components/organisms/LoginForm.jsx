import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Children */
import BaseForm from './BaseForm';

import {
  Button,
  ErrorMessage,
  Fieldset,
  HorizontalRule,
} from '../atoms';

import TextInputLabel from '../molecules';

/* Utils */
import {
  validateEmail,
  validatePassword,
} from '../../utils/validators';

import messages from '../../utils/messages';

/* Services */
import { loginRequest } from '../../services/request';

function LoginForm({ id }) {
  const [email, setEmail] = useState('');
  const [emailErrVisible, setEmailErrVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErrVisible, setPasswordErrVisible] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  // const [submitDisabled, setSubmitDisabled] = useState(true);

  // setSubmitDisabled(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginRequest({ email, password });

      if (data) {
        // save data
        localStorage.setItem('user', JSON.stringify({
          email,
          name: data.name,
          role: data.role,
          token: data.token,
        }));

        // redirect to home
        setShouldRedirect(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BaseForm id={ id } action="">
      <Fieldset id="control-group">
        <div>
          <TextInputLabel
            id="login-email-input"
            type="email"
            dataTestId="common_login__input-email"
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
                dataTestId="common_login__element-invalid-email"
                message={ messages.email.invalid }
              />
            )
          }
        </div>

        <div>
          <TextInputLabel
            id="login-password-input"
            type="password"
            dataTestId="common_login__input-password"
            label="Password"
            placeholder="Enter password"
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
                dataTestId="common_login__element-invalid-password"
                message={ messages.password.invalid }
              />
            )
          }
        </div>
      </Fieldset>

      <div className="ButtonGroup">
        <Button
          id="login-btn"
          type="submit"
          dataTestId="common_login__button-login"
          handleOnClick={ (e) => handleSubmit(e) }
        >
          Login
        </Button>

        <HorizontalRule />

        <span className="LinkMessage">
          Don&apos;t have an account?

          <Button
            id="sign-up-btn"
            type="button"
            link
          >
            <Link to="/register">Sign up</Link>
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

LoginForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LoginForm;
