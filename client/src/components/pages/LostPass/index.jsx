import React from 'react';

/* Assets */
import { LostPass as LostPassImage } from '../../../assets';

/* Children */
import { Button,  HorizontalRule,  ResetPassForm, Teaser } from '../../atoms';

/* Styles */
import { DuoGeneric } from '../../templates';
import { ContentWrapper, DecorOne, DecorTwo } from './Styled';
import { Link } from 'react-router-dom';

const LostPass = () => {
  return (
    <DuoGeneric>
      <ContentWrapper>
        <div className="form-content_headings">
          <h1>It's Okay!</h1>
          <h2>Let's change your password:</h2>
        </div>
        <ResetPassForm />

        <HorizontalRule />

        <span className="form__link-message">
          Already have an account?
          <Button
            id="login-btn"
            type="button"
            link
          >
            <Link to="/login">Sign in</Link>
          </Button>
        </span>
      </ContentWrapper>

      <Teaser image={LostPassImage}>
        <DecorOne />
        <DecorTwo />
      </Teaser>
    </DuoGeneric>
  );
}

export default LostPass;