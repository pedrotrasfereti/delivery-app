import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

/* State */
import { useDispatch } from 'react-redux';
import { clearProducts } from '../../redux/features/productsSlice';
import { clearCart } from '../../redux/features/checkoutSlice';
import { clearUser } from '../../redux/features/userSlice';

/* Styles */
import { styled } from '../../stitches.config';

/* Utils */
import navLinksMap from '../../utils/navLinksMap';
import LocalStorageMethods from '../../utils/localStorage';

export const StitchesComponent = styled('nav', {
  zIndex: '99',

  '& ul': {
    display: 'flex',
    gap: '$5',

    '& li': {
      alignItems: 'center',
      display: 'flex',
      gap: '$2',
    },

    '& li>button': {
      appearance: 'none',
      background: 'none',
      border: '0',
      color: 'none',
      outline: '0',
    },

    '& li>button>a': {
      color: '$textDark',
      fontFamily: '$sans',
      fontSize: '16px',
      fontWeight: '$4',
      position: 'relative',
    },

    '& li>button>a:hover': {
      color: '$primary',
    },

    '& li>button.Selected>a': {
      color: '$primary',
      fontWeight: '$5',
    },

    '& li>button>a::before': {
      backgroundColor: '$secondary',
      content: '',
      height: '.2rem',
      position: 'absolute',
      top: '1.5rem',
      left: '0',
      width: '100%',
      transform: 'scaleX(0)',
      transition: 'transform .3s ease',
    },

    '& li>button>a:hover::before': {
      transform: 'scaleX(1)',
    },
  },

  variants: {
    iconbar: {
      true: {
        backgroundColor: '$loContrast',
        bottom: '0',
        border: '1px solid $gray300',
        borderRadius: '1rem 1rem 0 0',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        display: 'none',
        height: '$iconBarHeight',
        position: 'fixed',
        width: '100%',

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

  // Render
  const excludeRoutes = [
    '/',
    '/login',
    '/register',
  ];

  const shouldRender = !excludeRoutes.includes(pathname);

  const dispatch = useDispatch();

  // Navigation Links
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const user = LocalStorageMethods.getParsedItem('user');

    if (user) {
      setNavLinks(navLinksMap(user.name)[user.role]);
    }
  }, []);

  // Logout
  const logout = () => {
    LocalStorageMethods.deleteItem('user');
    LocalStorageMethods.deleteItem('products');

    dispatch(clearProducts());
    dispatch(clearCart());
    dispatch(clearUser());
  };

  // Conditional Style
  const getLinkClassName = (to) => {
    const path = pathname.replace('checkout', 'products');

    if (to === path) {
      return 'Selected';
    }

    return '';
  };

  return shouldRender && (
    <StitchesComponent iconbar={ iconbar }>
      <ul>
        {
          navLinks.map(({ dataTestId, name, to, icon }) => (
            <li key={ name }>
              {
                iconbar ? (
                  <Link
                    data-testid={ dataTestId }
                    to={ to }
                    className={ getLinkClassName(to) }
                  >
                    { icon() }
                  </Link>
                ) : (
                  <button
                    data-testid={ dataTestId }
                    type="button"
                    className={ getLinkClassName(to) }
                    onClick={
                      name === 'Logout' ? logout : () => {}
                    }
                  >
                    <Link to={ to }>{name}</Link>
                  </button>
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
