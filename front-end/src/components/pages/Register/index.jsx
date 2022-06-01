import React from 'react';

/* Assets */
import { Packages } from '../../../assets';

/* Children */
import { Teaser } from '../../atoms';
import { RegisterForm } from '../../organisms';

/* Styles */
import { DuoGeneric } from '../../templates';
import { ContentWrapper, DecorOne, DecorTwo } from './Styled';

const styles = {
  // Place form content at the bottom and teaser at the top
  '@bp3': {
    '& #form-content': {
      order: '2',
    },
  },
};

export default function Register() {
  return (
    <DuoGeneric
      id="register-page"
      css={ styles }
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
