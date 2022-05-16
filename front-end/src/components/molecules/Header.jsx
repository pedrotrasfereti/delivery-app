import * as React from 'react';
import { useLocation } from 'react-router-dom';

/* Assets */
import { Logo } from '../../assets';

/* Children */
import { NavBar } from '../atoms';
import { StitchesComponent as NavBarStitches } from '../atoms/NavBar';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('header', {
  alignItems: 'center',
  backgroundColor: '$loContrast',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0 1px 1px',
  display: 'flex',
  height: '$headerHeight',
  position: 'fixed',
  width: '100%',
  zIndex: '1',

  '&>.Container': {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',

    '& img': {
      width: '42.5px',
    },

    '& h1': {
      color: '$textDark',
      fontFamily: '$sans2',
      fontSize: '$5',
      fontWeight: '$4',
    },
  },

  '& *': {
    margin: '0 auto',
  },

  '@bp3': {
    [`& ${NavBarStitches}`]: {
      display: 'none',
    },
  },
});

function Header() {
  const { pathname } = useLocation();
  const shouldRender = pathname.includes('customer');

  return shouldRender && (
    <StitchesComponent>
      <div className="Container">
        <img src={ Logo } alt="Deliveree" />
        <h1>Deliveree</h1>
      </div>

      <NavBar />

      {/* <CheckoutBtn flat /> */}
    </StitchesComponent>
  );
}

export default Header;
