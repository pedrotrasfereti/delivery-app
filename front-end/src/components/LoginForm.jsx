import * as React from 'react';

function LoginForm() {
  return (
    <form id="login-form" action="">
      <input
        id="login-email-input"
        type="text"
        data-testid="common_login__input-email"
      />

      <input
        id="login-password-input"
        type="text"
        data-testid="common_login__input-password"
      />

      <button id="login-btn" type="submit" data-testid="common_login__button-login">
        Login
      </button>

      <button id="sign-in-btn" type="button" data-testid="common_login__button-register">
        <a href="https://">
          Sign In
        </a>
      </button>
    </form>
  );
}

export default LoginForm;
