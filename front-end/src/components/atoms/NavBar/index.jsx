import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

/* State */
import { useDispatch } from 'react-redux';
import { clearProducts } from '../../../redux/features/productsSlice';
import { clearCart } from '../../../redux/features/checkoutSlice';
import { clearUser } from '../../../redux/features/userSlice';

/* Styles */
import Styled from './Styled';

/* Utils */
import navLinksMap from '../../../utils/navLinksMap';
import LocalStorageMethods from '../../../utils/localStorage';

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
    <Styled iconbar={ iconbar }>
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
    </Styled>
  );
}

NavBar.propTypes = {
  iconbar: PropTypes.bool,
};

NavBar.defaultProps = {
  iconbar: false,
};

export default NavBar;
