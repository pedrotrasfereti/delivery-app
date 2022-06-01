import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import Styled from './Styled';

export default function Teaser({ id, image, children }) {
  return (
    <Styled
      id={ id }
      css={ { backgroundImage: `url(${image})` } }
    >
      { children }
    </Styled>
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
