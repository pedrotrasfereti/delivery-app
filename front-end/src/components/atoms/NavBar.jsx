import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

/* Styles */
import { styled } from '../../stitches.config';

/* Utils */
import navLinksMap from '../../utils/navLinksMap';

export const StitchesComponent = styled('nav', {
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

  variants: {
    iconbar: {
      true: {
        backgroundColor: '$loContrast',
        bottom: '0',
        borderRadius: '1rem 1rem 0 0',
        borderTop: '1px solid rgba(149, 157, 165, .5)',
        display: 'none',
        position: 'fixed',
        width: '100%',
        height: '$5',

        '& ul': {
          gap: '0',
          justifyContent: 'space-around',
          width: '100%',

          '& li>a': {
            alignItems: 'center',
            borderRadius: '.5rem',
            color: '$primary',
            display: 'flex',
            fontSize: '$7',
            height: '35px',
            justifyContent: 'center',
            padding: '$2',
            width: '35px',
          },

          '& li>a.Selected': {
            color: '$textLight',
            backgroundColor: '$primary',
          },

          '& li>a::before': {
            width: '0',
          },
        },

        '@bp3': {
          display: 'flex',
        },
      },
    },
  },
});

function NavBar({ iconbar }) {
  const { pathname } = useLocation();

  /* Navigation Links */
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      const username = JSON.parse(user).name;

      setNavLinks(navLinksMap(username)[pathname]);
    }
  }, [pathname]);

  /* Conditional Style */
  const getLinkClassName = (to) => {
    return to === pathname ? 'Selected' : '';
  };

  return (
    <StitchesComponent iconbar={ iconbar }>
      <ul>
        {
          navLinks.map(({ dataTestId, name, to, icon }) => (
            <li key={ uuid() }>
              {
                iconbar ? (
                  <Link
                    to={ to }
                    className={ getLinkClassName(to) }
                  >
                    { icon() }
                  </Link>
                ) : (
                  <Link data-testid={ dataTestId } to={ to }>{name}</Link>
                )
              }
            </li>
          ))
        }
      </ul>
    </StitchesComponent>
  );
}

NavBar.propTypes = {
  iconbar: PropTypes.bool,
};

NavBar.defaultProps = {
  iconbar: false,
};

export default NavBar;
