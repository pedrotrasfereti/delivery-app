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

function Teaser({ id, image, children }) {
  return (
    <StitchesComponent
      id={ id }
      css={
        { backgroundImage: `url(${image})` }
      }
    >
      { children }
    </StitchesComponent>
  );
}

Teaser.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Teaser.defaultProps = {
  children: '',
};

export default Teaser;
