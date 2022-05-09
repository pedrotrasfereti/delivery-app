import * as React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('nav', {
  '& ul': {
    display: 'flex',
    gap: '$5',

    '& li': {
      alignItems: 'center',
      display: 'flex',
      gap: '$2',
    },

    '& li>a': {
      color: '$textDark',
      fontFamily: '$sans',
      fontSize: '$3',
      fontWeight: '$4',
      position: 'relative',
    },

    '& li>a:hover': {
      color: '$primary',
    },

    '& li>a::before': {
      backgroundColor: '$secondary',
      border: '0',
      borderRadius: '$default',
      content: '',
      height: '.1rem',
      position: 'absolute',
      top: '1.4rem',
      left: '0',
      width: '100%',
      transform: 'scaleX(0)',
      transition: 'transform .3s ease',
    },

    '& li>a:hover::before': {
      transform: 'scaleX(1)',
    },
  },
});

function NavBar({ children }) {
  return (
    <StitchesComponent>
      { children }
    </StitchesComponent>
  );
}

NavBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

NavBar.defaultProps = {
  children: '',
};

export default NavBar;
