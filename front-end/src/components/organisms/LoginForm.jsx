import React, { useState } from 'react';

/* Children */
import {
  Button,
  ErrorMessage,
  Fieldset,
  HorizontalRule,
} from '../atoms';

import TextInputLabel from '../molecules';

/* Utils */
import EMAIL_REGEX from '../../utils/emailRegex';
import messages from '../../utils/messages';

/* Styles */
import { styled } from '../../stitches.config';

const Container = styled('div', {
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

function LoginForm() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailErrVisible, setEmailErrVisible] = useState(false);

  const validateEmail = () => {
    if (email && !EMAIL_REGEX.test(email)) {
      setEmailErrVisible(true);
    } else {
      setEmailErrVisible(false);
    }
  };

  return (
    <Container id="login-form-wrapper" action="">
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
            handleOnBlur={ validateEmail }
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

        <TextInputLabel
          id="login-password-input"
          type="password"
          dataTestId="common_login__input-password"
          label="Password"
          placeholder="Enter password"
          value={ password }
          handleOnChange={ setPassword }
        />
      </Fieldset>

      <div className="ButtonGroup">
        <Button
          id="login-btn"
          type="submit"
          data-testid="common_login__button-login"
        >
          Login
        </Button>

        <HorizontalRule />

        <span className="LinkMessage">
          Don&apos;t have an account?

          <Button
            id="sign-up-btn"
            type="button"
            data-testid="common_login__button-register"
            link
          >
            <a href="https://">Sign up</a>
          </Button>
        </span>
      </div>
    </Container>
  );
}

export default LoginForm;
