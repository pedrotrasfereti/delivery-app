import * as React from 'react';
import { useLocation } from 'react-router-dom';

/* Assets */
import { BsChevronLeft as BackIcon } from 'react-icons/bs';
import { Logo } from '../../../assets';

/* Children */
import { NavBar, CheckoutBtn } from '../../atoms';

/* Styles */
import Styled from './Styled';

function Header() {
  const { pathname } = useLocation();

  const excludeRoutes = [
    '/',
    '/login',
    '/register',
  ];

  const shouldRender = !excludeRoutes.includes(pathname);

  return shouldRender && (
    <Styled>
      <button
        type="button"
        className="BackButton"
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
