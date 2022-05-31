import { styled } from '../../../stitches.config';

/* Children */
import StyledNavBar from '../../atoms/NavBar/Styled';
import StyledCheckoutBtn from '../../atoms/CheckoutBtn/Styled';

export default styled('header', {
  alignItems: 'center',
  backgroundColor: '$loContrast',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0 1px 1px',
  display: 'flex',
  height: '$headerHeight',
  position: 'fixed',
  width: '100%',
  zIndex: '99',

  [`& ${StyledCheckoutBtn}`]: {
    display: 'none',
  },

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
    [`& ${StyledNavBar}`]: {
      display: 'none',
    },

    [`& ${StyledCheckoutBtn}`]: {
      display: 'flex',
    },
  },
});
