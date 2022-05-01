import * as React from 'react';

/* Children */
import LoginForm from '../organisms/LoginForm';

/* Styles */
import { styled } from '../../stitches.config';

const LoginPage = styled('main', {
  alignItems: 'center',
  background: 'none',
  display: 'flex',
  justifyContent: 'center',
  minHeight: '$sectionMinHeight',
  width: '100%',
});

function Login() {
  return (
    <LoginPage id="login-page">
      <LoginForm />
    </LoginPage>
  );
}

export default Login;
