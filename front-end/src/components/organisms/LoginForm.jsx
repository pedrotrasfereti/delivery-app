import React, { useState } from 'react';

/* Children */
import { Button, ErrorMessage } from '../atoms';

/* Utils */
import EMAIL_REGEX from '../../utils/emailRegex';
import messages from '../../utils/messages';
import TextInput from '../atoms/TextInput';

function LoginForm() {
  const [emailInputText, setEmailInputText] = useState('');
  const [emailErrVisible, setEmailErrVisible] = useState(false);

  const validateEmail = () => {
    if (emailInputText && !EMAIL_REGEX.test(emailInputText)) {
      setEmailErrVisible(true);
    } else {
      setEmailErrVisible(false);
    }
  };

  return (
    <form id="login-form" action="">
      <div>
        <TextInput
          id="login-email-input"
          type="email"
          data-testid="common_login__input-email"
          value={ emailInputText }
          onChange={ (e) => setEmailInputText(e.target.value) }
          onBlur={ validateEmail }
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

      <TextInput
        id="login-password-input"
        type="password"
        data-testid="common_login__input-password"
      />

      <Button
        id="login-btn"
        type="submit"
        data-testid="common_login__button-login"
      >
        Log in
      </Button>

      <Button
        id="sign-up-btn"
        type="button"
        data-testid="common_login__button-register"
        link
      >
        <a href="https://">Sign up</a>
      </Button>
    </form>
  );
}

export default LoginForm;
