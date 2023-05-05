import { styled } from '../../../stitches.config';

export default styled('button', {
  backgroundColor: '$button',
  border: 'none',
  borderRadius: '$round',
  color: '$textLight',
  cursor: 'pointer',
  fontFamily: '$sans',
  fontSize: '$2',
  fontWeight: '$6',
  lineHeight: '$default',
  letterSpacing: '.1rem',
  transition: '$default',
  padding: '$btnPadding',
  textAlign: 'center',
  textTransform: 'uppercase',
  userSelect: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',

  '&:hover': {
    filter: 'brightness(92%)',
  },

  '&:disabled,button[disabled]': {
    backgroundColor: '$gray500',
  },

  '@bp3': {
    padding: '$btnPaddingMobile',
  },

  variants: {
    inactive: {
      true: {
        backgroundColor: '$secondary',
        cursor: 'default',
      },
    },
    link: {
      true: {
        padding: '0',
        background: 'transparent',
        letterSpacing: 'normal',
        textTransform: 'none',

        '&>a': {
          color: '$button',
          fontFamily: '$sans',
          fontSize: '$2',
          fontWeight: '$6',
          textDecorationLine: 'underline',
        },
      },
    },
  },
});
