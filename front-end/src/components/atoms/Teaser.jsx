import * as React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('div', {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  zIndex: '$0',
});

function Teaser({ image, children }) {
  return (
    <StitchesComponent
      css={
        { backgroundImage: `url(${image})` }
      }
    >
      { children }
    </StitchesComponent>
  );
}

Teaser.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default Teaser;
