import { styled } from '../../stitches.config';

const Button = styled('button', {
  border: 'none',
  borderRadius: '$default',
  cursor: 'pointer',
  fontFamily: '$sans',
  fontSize: '$3',
  fontWeight: '$4',
  lineHeight: '$default',
  transition: '.25s',
  padding: '$btnPadding',
  textAlign: 'center',
  userSelect: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',

  '&:hover': {
    filter: 'brightness(92%)',
  },

  variants: {
    primary: {
      true: {
        backgroundColor: '$buttonPrimary',
        color: '$textLight',
      },
    },
    link: {
      true: {
        background: 'transparent',
        '&>a': {
          color: '$textDark',
        },
        '&:hover>a': {
          textDecorationLine: 'underline',
        },
      },
    },
  },

  defaultVariants: {
    primary: true,
  },
});

export default Button;
