import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/* Assets */
import { BsChevronLeft as BackIcon } from 'react-icons/bs';
import { Logo } from '../../../assets';

/* Children */
import { NavBar, CheckoutBtn } from '../../atoms';

/* Styles */
import Styled from './Styled';

function Header() {
  // Back Button
  const navigate = useNavigate();
  const goBack = -1;

  const { pathname } = useLocation();

  // Conditional Render
  const excludeRoutes = [
    '/',
    '/login',
    '/register',
  ];

  const shouldRender = !excludeRoutes.includes(pathname);

  // Conditional Styles
  const hideOn = [
    '/customer/products',
    '/seller/orders',
  ];

  const backDisabled = hideOn.includes(pathname);

  const styles = {
    visibility: backDisabled ? 'hidden' : 'visible',
  };

  return shouldRender && (
    <Styled>
      <button
        type="button"
        className="BackButton"
        onClick={ () => navigate(goBack) }
        disabled={ backDisabled }
        style={ styles }
      >
        <BackIcon className="BackIcon" />
      </button>

      <div className="Container">
        <img src={ Logo } alt="Deliveree" />
        <h1>Deliveree</h1>
      </div>

      <NavBar />

      <CheckoutBtn />
    </Styled>
  );
}

export default Header;