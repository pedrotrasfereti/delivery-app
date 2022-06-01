import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import Styled from './Styled';

export default function Teaser({ image, children }) {
  return (
    <Styled css={ { backgroundImage: `url(${image})` } }>
      { children }
    </Styled>
  );
}

Teaser.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Teaser.defaultProps = {
  children: '',
};
