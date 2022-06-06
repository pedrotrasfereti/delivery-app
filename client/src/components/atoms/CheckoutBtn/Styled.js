import { styled } from '../../../stitches.config';

export default styled('button', {
  alignItems: 'center',
  appearance: 'none',
  background: 'linear-gradient(333deg, rgba(102,51,153,1) 0%, rgba(51,0,102,1) 100%)',
  bottom: '15px',
  border: '0',
  borderRadius: '$default',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '15px 10px',
  position: 'fixed',
  transition: 'ease .3s',
  right: '15px',
  width: '140px',

  '& .CartIcon': {
    color: '$textDark',
    display: 'none',
    fontSize: '$6',
    position: 'relative',
  },

  // Text
  '& .Label, & .TotalPrice': {
    color: '$textLight',
    fontFamily: '$sans2',
    fontSize: '18px',
    fontWeight: '$5',
  },

  // States
  '&:hover:not(:disabled)': {
    borderRadius: '2.3rem',
    cursor: 'pointer',
  },

  '&:disabled': {
    opacity: '.9',
  },

  '@bp3': {
    background: 'none',
    bottom: '0',
    borderRadius: '0',
    cursor: 'pointer',
    padding: '0',
    position: 'relative',
    right: '0',
    width: 'auto',

    // Hide Text
    '& .Label, & .TotalPrice': {
      display: 'none',
    },

    // Show Icon
    '& .CartIcon': {
      display: 'flex',
    },

    // Show Cart Length
    '&::after': {
      backgroundColor: '$primary',
      bottom: '2px',
      border: '0',
      borderRadius: '$round',
      color: '$loContrast',
      content: '',
      fontFamily: '$sans',
      fontSize: '$1',
      fontWeight: '$5',
      height: '1rem',
      position: 'absolute',
      right: '-6px',
      width: '1rem',
    },
  },
});
