import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/* State */
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/userSlice';

/* Children */
import { Button, ErrorMessage, Fieldset, HorizontalRule } from '../atoms';
import { ErrorMessageBox, TextInputLabel } from '../molecules';

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
import Form from '../atoms/Form';

const extraStyles = {
  '& .PasswordSection': {
    display: 'flex',
    gap: '$2',
  },
};

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [nameErrVisible, setNameErrVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [emailErrVisible, setEmailErrVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErrVisible, setPasswordErrVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [matchErrVisible, setMatchErrVisible] = useState(false);
  const [registerErrVisible, setRegisterErrVisible] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  // Enable Submit
  useEffect(() => {
    if (
      validateName(name)
      && validateEmail(email)
      && validatePassword(password)
      && validateMatch(password, confirmPassword)
    ) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [
    confirmPassword,
    email,
    name,
    password,
  ]);

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await registerRequest({
        email,
        password,
        name,
      });

      if (user) {
        dispatch(setUser(user));

        localStorage.setItem('user', JSON.stringify({
          email,
          ...user,
        }));

        // Redirect
        if (user.role === 'customer') {
          navigate('/customer/products');
        } else {
          navigate('/seller/orders');
        }
      }
    } catch (err) {
      setRegisterErrVisible(true);
    }
  };

  return (
    <Form action="" css={ extraStyles }>
      {
        registerErrVisible && (
          <ErrorMessageBox
            id="user-already-exists"
            dataTestId="common_register__element-invalid_register"
            message={ messages.register.conflict }
          />
        )
      }
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
              () => setNameErrVisible(!validateName(name))
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
              () => setEmailErrVisible(!validateEmail(email))
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

        <div className="PasswordSection">
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
                () => setPasswordErrVisible(!validatePassword(password))
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
                () => setMatchErrVisible(!validateMatch(confirmPassword, password))
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
        </div>
      </Fieldset>

      <div id="btn-group" className="form__button-group">
        <Button
          id="register-btn"
          type="submit"
          dataTestId="common_register__button-register"
          handleOnClick={ handleSubmit }
          disabled={ submitDisabled }
        >
          Create account
        </Button>

        <HorizontalRule />

        <span className="form__link-message">
          Already have an account?

          <Button
            id="login-btn"
            type="button"
            link
          >
            <Link to="/login">Login</Link>
          </Button>
        </span>
      </div>
    </Form>
  );
}
