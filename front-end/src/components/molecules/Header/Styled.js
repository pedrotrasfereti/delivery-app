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

  // Back Button
  '& .BackButton': {
    alignItems: 'center',
    appearance: 'none',
    background: 'none',
    border: '0',
    cursor: 'pointer',
    display: 'none',
    justifyContent: 'center',
    transition: 'ease .3s',

    '& .BackIcon': {
      color: '$textDark',
      fontSize: '$4',
    },
  },

  // Hide Nested Checkout Button
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
    // Hide Nested NavBar
    [`& ${StyledNavBar}`]: {
      display: 'none',
    },

    // Show Nested Checkout Button
    [`& ${StyledCheckoutBtn}`]: {
      display: 'flex',
    },

    /* !=**=- Provisory -=**=!
      Show should be done using JavaScript
    */
    '& .BackButton': {
      display: 'flex',
    },
  },
});
