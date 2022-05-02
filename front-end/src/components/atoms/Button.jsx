import { styled } from '../../stitches.config';

const Button = styled('button', {
  border: 'none',
  borderRadius: '$default',
  cursor: 'pointer',
  fontFamily: '$sans',
  fontSize: '$3',
  fontWeight: '$5',
  lineHeight: '$default',
  transition: '$default',
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
        padding: '0',
        background: 'transparent',
        '&>a': {
          color: '$tertiary',
          fontFamily: '$sans',
          fontSize: '$2',
          fontWeight: '$6',
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
