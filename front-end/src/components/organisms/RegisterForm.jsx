import React, { useState } from 'react';

/* Children */
import { Button, ErrorMessage, Fieldset, HorizontalRule } from '../atoms';
import TextInputLabel from '../molecules';

/* Utils */
import EMAIL_REGEX from '../../utils/emailRegex';
import messages from '../../utils/messages';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('form', {
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$4',

  '&>.ButtonGroup': {
    display: 'flex',
    flexFlow: 'column nowrap',
    gap: '$3',

    '&>.LinkMessage': {
      color: '$textDark',
      fontFamily: '$sans',
      fontSize: '$2',
      fontWeight: '$5',
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '$1',
    },
  },
});

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

  return (
    <StitchesComponent action="">
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

          <TextInputLabel
            id="register-name-input"
            type="password"
            dataTestId="common_register__input-confirm-password"
            label="Confirm password"
            placeholder="Confirm password"
            value={ confirmPassword }
            handleOnChange={ setConfirmPassword }
          />
        </PasswordSection>
      </Fieldset>

      <div className="ButtonGroup">
        <Button
          id="login-btn"
          type="submit"
          data-testid="common_register__button-register"
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
            <a href="https://">Login</a>
          </Button>
        </span>
      </div>
    </StitchesComponent>
  );
}

export default RegisterForm;
