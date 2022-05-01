import React, { useState } from 'react';

/* Children */
import ErrorMessage from '../ErrorMessage';

/* Utils */
import EMAIL_REGEX from '../../utils/emailRegex';
import messages from '../../utils/messages';

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
        <input
          id="login-email-input"
          type="email"
          data-testid="common_login__input-email"
          value={ emailInputText }
          onChange={ (e) => setEmailInputText(e.target.value) }
          onBlur={ validateEmail }
          className="InputBox"
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

      <input
        id="login-password-input"
        type="password"
        data-testid="common_login__input-password"
        className="InputBox"
      />

      <button
        id="login-btn"
        type="submit"
        data-testid="common_login__button-login"
        className="ButtonPrimary"
      >
        Log in
      </button>

      <button
        id="sign-up-btn"
        type="button"
        data-testid="common_login__button-register"
        className="ButtonLink"
      >
        <a href="https://">Sign up</a>
      </button>
    </form>
  );
}

export default LoginForm;
