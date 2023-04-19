import React from 'react';

/* Assets */
import { LostPass as LostPassImage } from '../../../assets';

/* Children */
import { ResetPassForm, Teaser } from '../../atoms';

/* Styles */
import { DuoGeneric } from '../../templates';
import { ContentWrapper, DecorOne, DecorTwo } from './Styled';

const LostPass = () => {
  return (
    <DuoGeneric>
      <ContentWrapper>
        <div className="form-content_headings">
          <h1>It's Okay!</h1>
          <h2>Let's change your password:</h2>
        </div>
        <ResetPassForm />
      </ContentWrapper>

      <Teaser image={LostPassImage}>
        <DecorOne />
        <DecorTwo />
      </Teaser>
    </DuoGeneric>
  );
}

export default LostPass;