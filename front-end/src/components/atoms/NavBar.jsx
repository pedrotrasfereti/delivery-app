import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

/* Styles */
import { styled } from '../../stitches.config';

/* Utils */
import navLinksMap from '../../utils/navLinksMap';

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

function NavBar() {
  /* Navigation Links */
  const { pathname } = useLocation();
  const user = localStorage.getItem('user');
  const username = JSON.parse(user).name;
  const navLinks = navLinksMap(username)[pathname];

  return (
    <StitchesComponent>
      <ul>
        {
          navLinks.map(({ dataTestId, name, to }) => (
            <li key={ uuid() }>
              <Link data-testid={ dataTestId } to={ to }>{name}</Link>
            </li>
          ))
        }
      </ul>
    </StitchesComponent>
  );
}

export default NavBar;
