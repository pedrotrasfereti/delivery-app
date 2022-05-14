import * as React from 'react';

/* Assets */
import { DeliveryMan } from '../../assets';

/* Children */
import { Teaser } from '../atoms';
import { LoginForm } from '../organisms';
import DuoGeneric from '../templates';

/* Styles */
import { styled } from '../../stitches.config';

/* Utils */
import LocalStorageMethods from '../../utils/localStorage';

const ContentWrapper = styled('div', {
  boxShadow: '0 0 120px 10px hsla(215, 0%, 20%, .5)',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$4',
  padding: '$5 $7',
  position: 'relative',
  zIndex: '$1',

  '&>.Headings': {
    '&>h1': {
      color: '$textDark',
      fontFamily: '$sans2',
      fontSize: '$7',
      fontWeight: '$7',
    },

    '&>h2': {
      color: '$gray500',
      fontFamily: '$sans',
      fontSize: '$3',
      fontWeight: '$5',
      marginTop: '$2',
    },
  },

  // Breakpoints
  '@bp4': {
    padding: '$5 $4',
  },
  '@bp3': {
    padding: '$4',

    '&>.Headings': {
      '&>h1': {
        fontSize: '$6',
      },
    },
  },
});

const DecorOne = styled('div', {
  alignSelf: 'flex-end',
  background: '$accent1',
  padding: '$4',

  '@bp3': {
    padding: '$3',
  },
});

const DecorTwo = styled('div', {
  alignSelf: 'flex-start',
  background: '$accent2',
  padding: 'calc($3 + 10px)',
});

function Login() {
  React.useEffect(() => {
    LocalStorageMethods.deleteItem('user');
  }, []);

  return (
    <DuoGeneric id="login-page">
      <Teaser id="teaser" image={ DeliveryMan }>
        <DecorOne />
        <DecorTwo />
      </Teaser>

      <ContentWrapper id="form-content">
        <div className="Headings">
          <h1 id="title">Sign In to Deliveree</h1>
          <h2 id="subtitle">
            Enter your information below to continue
          </h2>
        </div>
        <LoginForm id="login-form" />
      </ContentWrapper>
    </DuoGeneric>
  );
}

export default Login;
