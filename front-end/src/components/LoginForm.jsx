import React, { useState } from 'react';

/* Utils */
import EMAIL_REGEX from '../utils/emailRegex';

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
          type="text"
          data-testid="common_login__input-email"
          value={ emailInputText }
          onChange={ (e) => setEmailInputText(e.target.value) }
          onBlur={ validateEmail }
        />
        {
          emailErrVisible && (
            <span
              id="invalid-email-message"
              data-testid="common_login__element-invalid-email"
            >
              Problem!!!
            </span>
          )
        }
      </div>

      <input
        id="login-password-input"
        type="text"
        data-testid="common_login__input-password"
      />

      <button id="login-btn" type="submit" data-testid="common_login__button-login">
        Log in
      </button>

      <button id="sign-up-btn" type="button" data-testid="common_login__button-register">
        <a href="https://">
          Sign up
        </a>
      </button>
    </form>
  );
}

export default LoginForm;
