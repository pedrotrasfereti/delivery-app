import { styled } from '../../../stitches.config';

export default styled('nav', {
  zIndex: '99',

  '& ul': {
    display: 'flex',
    gap: '$5',

    '& li': {
      alignItems: 'center',
      display: 'flex',
      gap: '$2',
    },

    '& li>button': {
      appearance: 'none',
      background: 'none',
      border: '0',
      color: 'none',
      outline: '0',
    },

    '& li>button>a': {
      color: '$textDark',
      fontFamily: '$sans',
      fontSize: '16px',
      fontWeight: '$4',
      position: 'relative',
    },

    '& li>button>a:hover': {
      color: '$primary',
    },

    '& li>button.Selected>a': {
      color: '$primary',
      fontWeight: '$5',
    },

    '& li>button>a::before': {
      backgroundColor: '$secondary',
      content: '',
      height: '.2rem',
      position: 'absolute',
      top: '1.5rem',
      left: '0',
      width: '100%',
      transform: 'scaleX(0)',
      transition: 'transform .3s ease',
    },

    '& li>button>a:hover::before': {
      transform: 'scaleX(1)',
    },
  },

  variants: {
    iconbar: {
      true: {
        backgroundColor: '$loContrast',
        bottom: '0',
        border: '1px solid $gray300',
        borderRadius: '1rem 1rem 0 0',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        display: 'none',
        height: '$iconBarHeight',
        position: 'fixed',
        width: '100%',

        '& ul': {
          gap: '0',
          justifyContent: 'space-around',
          width: '100%',

          '& li>a': {
            alignItems: 'center',
            borderRadius: '.5rem',
            color: '$primary',
            display: 'flex',
            fontSize: '$7',
            height: '35px',
            justifyContent: 'center',
            padding: '$2',
            width: '35px',
          },

          '& li>a.Selected': {
            color: '$textLight',
            backgroundColor: '$primary',
          },

          '& li>a::before': {
            width: '0',
          },
        },

        '@bp3': {
          display: 'flex',
        },
      },
    },
  },
});
