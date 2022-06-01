import React from 'react';

/* Assets */
import { DeliveryMan } from '../../../assets';

/* Children */
import { Teaser } from '../../atoms';
import { LoginForm } from '../../organisms';

/* Styles */
import { DuoGeneric } from '../../templates';
import { ContentWrapper, DecorOne, DecorTwo } from './Styled';

export default function Login() {
  return (
    <DuoGeneric>
      <Teaser image={ DeliveryMan }>
        <DecorOne />
        <DecorTwo />
      </Teaser>

      <ContentWrapper>
        <div className="form-content_headings">
          <h1 id="title">Sign In to Deliveree</h1>
          <h2 id="subtitle">
            Enter your information below to continue
          </h2>
        </div>
        <LoginForm />
      </ContentWrapper>
    </DuoGeneric>
  );
}
