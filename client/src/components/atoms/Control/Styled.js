import { styled } from '../../../stitches.config';

export default styled('button', {
  alignItems: 'center',
  cursor: 'pointer',
  border: '0',
  borderRadius: '$default',
  display: 'flex',
  fontFamily: '$sans2',
  fontSize: '$4',
  fontWeight: '$5',
  justifyContent: 'center',
  height: '25px',
  outline: '0',
  width: '25px',

  '&:hover': {
    filter: 'brightness(95%)',
  },

  '&:active': {
    filter: 'brightness(85%)',
  },

  variants: {
    operation: {
      add: {
        backgroundColor: '$accent1',
        color: '$textLight',
      },

      subtract: {
        backgroundColor: '$gray300',
        color: '$textDark',
      },
    },
  },
});
