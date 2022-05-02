import * as React from 'react';

/* Assets */
import DeliveryMan from '../../assets';

/* Children */
import LoginForm from '../organisms/LoginForm';

/* Styles */
import { styled } from '../../stitches.config';

const LoginPage = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '$sectionMinHeight',
  width: '100%',

  '&>.Teaser': {
    backgroundImage: `url(${DeliveryMan})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    opacity: '.9',
    position: 'relative',
    zIndex: '$0',
  },

  '&>.ContainerFullCenter': {
    display: 'flex',
    flexFlow: 'column nowrap',
    gap: '$4',
    boxShadow: '0 0 15px rgba(0, 0, 0, .25)',
    position: 'relative',
    zIndex: '$1',
    padding: '$6 $7',

    '&>.Headings': {
      '&>h1': {
        color: '$textDark',
        fontFamily: '$sans',
        fontSize: '$7',
        fontWeight: '$7',
      },

      '&>h2': {
        color: '$gray500',
        fontFamily: '$sans',
        fontSize: '$3',
        fontWeight: '$5',
        margin: '10px 0 $2',
      },
    },
  },

  '@bp3': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '.84fr 1.4fr',

    '&>.ContainerFullCenter': {
      padding: '$5 $4',

      '&>.Headings': {
        '&>h1': {
          fontSize: '$6',
        },
      },
    },
  },
});

function Login() {
  return (
    <LoginPage id="login-page">
      <div className="Teaser" />
      <div className="ContainerFullCenter">
        <div className="Headings">
          <h1 id="title">Sign In</h1>
          <h2 id="subtitle">
            Enter your information below to continue
          </h2>
        </div>
        <LoginForm />
      </div>
    </LoginPage>
  );
}

export default Login;
