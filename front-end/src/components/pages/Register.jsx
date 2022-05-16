import * as React from 'react';

/* Assets */
import { Packages } from '../../assets';

/* Children */
import { Teaser } from '../atoms';
import { RegisterForm } from '../organisms';
import { DuoGeneric } from '../templates';

/* Styles */
import { styled } from '../../stitches.config';

const ContentWrapper = styled('div', {
  boxShadow: '0 0 120px 10px hsla(215, 0%, 20%, .5)',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$4',
  padding: '$5 $6',
  position: 'relative',
  zIndex: '$1',

  '&>h1': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$7',
    fontWeight: '$7',
  },

  // Breakpoints
  '@bp4': {
    padding: '$5 $4',
  },
  '@bp3': {
    padding: '$4',

    '&>h1': {
      fontSize: '$6',
    },
  },
});

// Place form content at the bottom and teaser at the top
const invertRows = {
  '& #form-content': {
    order: '2',
  },
};

const DecorOne = styled('div', {
  alignSelf: 'flex-end',
  backgroundColor: '$primary',
  padding: 'calc($3 + 15px)',

  '@bp3': {
    padding: '$3',
  },
});

const DecorTwo = styled('div', {
  alignSelf: 'flex-start',
  backgroundColor: '$quaternary',
  padding: 'calc($4 - 10px)',
});

function Register() {
  return (
    <DuoGeneric
      id="register-page"
      css={ { '@bp3': invertRows } }
    >
      <ContentWrapper id="form-content">
        <h1 id="title">Sign Up to Deliveree</h1>

        <RegisterForm id="register-form" />
      </ContentWrapper>

      <Teaser id="teaser" image={ Packages }>
        <DecorOne />
        <DecorTwo />
      </Teaser>
    </DuoGeneric>
  );
}

export default Register;
