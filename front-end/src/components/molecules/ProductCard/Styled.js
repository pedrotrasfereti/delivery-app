import { styled } from '../../../stitches.config';

const boxShadow = 'rgba(0, 0, 0, .08) 0px 4px 12px';

export default styled('div', {
  backgroundColor: '$loContrast',
  border: '0',
  borderRadius: '$default',
  boxShadow,
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$3',
  height: '350px',
  width: '260px',

  '&>.product-card__image': {
    flex: '1.5',
    position: 'relative',
    overflow: 'hidden',

    '&>img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },

    '&>.product-card__discount:not(:empty)': {
      alignItems: 'center',
      color: '$textLight',
      backgroundColor: 'rgb(3,109,85)',
      background:
        'linear-gradient(333deg, rgba(3,109,85,1) 40%, rgba(61,149,105,1) 100%)',
      borderRadius: '0 $default',
      display: 'flex',
      fontFamily: '$sans',
      fontSize: '$2',
      fontWeight: '$5',
      height: '25px',
      justifyContent: 'center',
      opacity: '.9',
      padding: '$3 $2',
      position: 'absolute',
      right: '0',
      top: '0',
    },
  },

  '&>.product-card__content': {
    display: 'flex',
    flex: '1',
    flexFlow: 'column nowrap',
    gap: '$2',
    padding: '$3',

    '&>h3': {
      color: '$textDark',
      fontFamily: '$sans',
      fontSize: '$4',
      fontWeight: '$5',
    },

    '&>p': {
      color: '$gray600',
      fontFamily: '$sans',
      fontSize: '$3',
      fontWeight: '$4',
    },

    '&>.product-card__content-bottom': {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 'auto',

      '&>.product-card__content-price': {
        color: '$accent1',
        fontFamily: '$sans',
        fontSize: '$4',
        fontWeight: '$5',
      },

      '&>.product-card__content-controls': {
        display: 'flex',

        '&>.product-card__product-quantity': {
          backgroundColor: '$background',
          color: '$textDark',
          fontFamily: '$sans',
          fontSize: '$3',
          fontWeight: '$5',
          outline: '0',
          textAlign: 'center',
          width: '$4',
        },
      },
    },
  },

  '@bp3': {
    height: '300px',
    width: '210px',

    '&>.product-card__content': {
      '&>p': {
        fontSize: '$2',
      },
    },
  },

  '@bp2': {
    height: '265px',
    width: '175px',

    '&>.product-card__content': {
      '&>h3': {
        fontSize: '$3',
      },
    },
  },
});
